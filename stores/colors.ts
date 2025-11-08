import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserColorStore = defineStore('userColor', {
  state: () => ({
    history: [] as any[],
    favorites: [] as any[],
    currentColor: {} as any,
  }),

  actions: {
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

        const color = {
          name: raw.name.value,
          code: raw.hex.value,
          text: textColor,
        }

        this.currentColor = color
        this.addToHistory(color)

        return color
      } catch (error) {
        console.error(error)
        return null
      }
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
          history: this.history,
          favorites: this.favorites,
          currentColor: this.currentColor,
        })
      )
    },

    // Load everything when app starts
    loadFromStorage() {
      const saved = localStorage.getItem('userColorStore')
      if (!saved) return

      const parsed = JSON.parse(saved)
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
  },
})
