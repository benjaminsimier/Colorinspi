import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserColorStore = defineStore('userColor', {
  state: () => ({
    settings: {} as any,
    history: [] as any[],
    favorites: [] as any[],
    currentColor: {} as any,
  }),

  actions: {
    getSettings(mode = 'monochrome') {
      this.settings = { mode }
      this.saveToStorage()
      return this.settings
    },

    async getCurrentColor() {
      try {
        const response = await axios.get(
          'https://www.thecolorapi.com/random?timestamp=' + Date.now()
        )

        const raw = response.data

        const r = raw.rgb.r
        const g = raw.rgb.g
        const b = raw.rgb.b

        const textColor = this.getBestTextColorFromRGB(r, g, b)

        // Get all matching color schemes
        const matchingColors = await this.getAllColorSchemes(raw.hex.value)

        const color = {
          name: raw.name.value,
          code: raw.hex.value,
          text: textColor,
          matchingColors,
        }

        this.currentColor = color
        this.addToHistory(color)

        return color
      } catch (error) {
        console.error(error)
        return null
      }
    },

    setCurrentColor(color: any) {
      this.currentColor = color
      this.saveToStorage()
    },

    addToFavorites(color: any) {
      this.favorites.push(color)
      this.saveToStorage()
    },

    removeFromFavorites(color: any) {
      this.favorites = this.favorites.filter((c) => c.code !== color.code)
      this.saveToStorage()
    },

    addToHistory(color: any) {
      this.history.push(color)
      this.saveToStorage()
    },

    removeFromHistory(index: number) {
      this.history.splice(index, 1)
      this.saveToStorage()
    },

    // Save everything into localStorage
    saveToStorage() {
      localStorage.setItem(
        'userColorStore',
        JSON.stringify({
          settings: this.settings,
          history: this.history,
          favorites: this.favorites,
          currentColor: this.currentColor,
          matchingColors: this.currentColor.matchingColors || [],
          lastUpdate: Date.now(),
        })
      )
    },

    // Load everything when app starts
    loadFromStorage() {
      const saved = localStorage.getItem('userColorStore')
      if (!saved) return

      const parsed = JSON.parse(saved)
      this.settings = parsed.settings || { mode: 'monochrome' }
      this.history = parsed.history || []
      this.favorites = parsed.favorites || []
      this.currentColor = parsed.currentColor || {}
    },

    // --- Helper to compute best text color ---
    getBestTextColorFromRGB(r: number, g: number, b: number) {
      const linear = (c: number) => {
        const cs = c / 255
        return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4)
      }

      const R = linear(r)
      const G = linear(g)
      const B = linear(b)

      const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B

      const contrastWhite = (1 + 0.05) / (luminance + 0.05)
      const contrastBlack = (luminance + 0.05) / 0.05

      return contrastBlack >= contrastWhite ? 'black' : 'white'
    },

    // -- Helper to get matching colors ---
    async getMatchingColors(hex: string, count = 3, mode = 'monochrome') {
      try {
        const cleanHex = hex.replace('#', '')
        const query = `?hex=${cleanHex}&mode=${mode}&count=${count}&timestamp=${Date.now()}`
        const response = await axios.get(
          `https://www.thecolorapi.com/scheme${query}`
        )

        return response.data.colors.map((color: any) => ({
          name: color.name.value,
          code: color.hex.value,
          text: this.getBestTextColorFromRGB(
            color.rgb.r,
            color.rgb.g,
            color.rgb.b
          ),
        }))
      } catch (error) {
        console.error('Failed to get matching colors', error)
        return []
      }
    },

    async getAllColorSchemes(hex: string) {
      const matchingColors: Record<string, any[]> = {}

      matchingColors.monochrome = await this.getMatchingColors(
        hex,
        3,
        'monochrome'
      )
      matchingColors.analogic = await this.getMatchingColors(hex, 3, 'analogic')
      matchingColors.complement = await this.getMatchingColors(
        hex,
        3,
        'complement'
      )
      matchingColors.triad = await this.getMatchingColors(hex, 3, 'triad')

      return matchingColors
    },
  },
})
