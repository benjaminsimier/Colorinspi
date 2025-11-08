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

        const color = {
          name: response.data.name.value,
          code: response.data.hex.value,
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
  },
})
