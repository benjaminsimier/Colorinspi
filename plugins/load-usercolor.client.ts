export default defineNuxtPlugin(() => {
  const store = useUserColorStore()
  store.loadFromStorage()
})
