<template>
  <div>
    <div
      class="flex h-screen w-full items-center justify-center bg-background py-6"
    >
      <div class="justify-center text-center">
        <div class="mb-[30px] text-2xl font-medium text-richBlack">
          <a href="https://www.instagram.com/colorinspi/" target="_blank"
            >Colorinspi</a
          >'s color generator
        </div>

        <div class="flex flex-col gap-4 sm:flex-row">
          <!-- LEFT -->
          <div
            class="flex items-center justify-center gap-4 sm:w-[60px] sm:flex-col"
          >
            <!-- HISTORY -->
            <div
              class="flex h-[50px] w-[50px] !cursor-pointer select-none items-center justify-center rounded-full border border-primary !opacity-100 transition-all"
              @click="historyModalVisible = true"
            >
              <a-tooltip
                title="Color History"
                color="#7b6dc4"
                placement="top"
                mouse-enter-delay="0.5"
              >
                <history-outlined style="color: #7b6dc4; font-size: 20px" />
              </a-tooltip>
            </div>

            <!-- FAVORITES -->
            <div
              class="flex h-[50px] w-[50px] cursor-pointer select-none items-center justify-center rounded-full border border-primary opacity-100 transition-all"
              @click="favoritesModalVisible = true"
            >
              <a-tooltip
                title="Favorites"
                color="#7b6dc4"
                placement="top"
                mouse-enter-delay="0.5"
              >
                <appstore-add-outlined
                  style="color: #7b6dc4; font-size: 20px"
                />
              </a-tooltip>
            </div>

            <!-- MATCHING COLORS -->
            <div
              class="flex h-[50px] w-[50px] cursor-pointer select-none items-center justify-center rounded-full border border-primary opacity-100 transition-all"
              @click="matchingColorsModalVisible = true"
            >
              <a-tooltip
                title="Matching Colors"
                color="#7b6dc4"
                placement="top"
                mouse-enter-delay="0.5"
              >
                <edit-outlined style="color: #7b6dc4; font-size: 20px" />
              </a-tooltip>
            </div>
          </div>

          <!-- COLOR -->
          <div
            class="relative mx-auto h-[280spx] w-[250px] rounded-md bg-white shadow-md"
          >
            <div v-if="!loading" class="relative">
              <!-- ADD TO FAVORITES -->
              <div class="absolute right-[20px] top-[20px] z-20">
                <a-tooltip
                  :title="
                    userColorStore.favorites
                      .map((f) => f.code)
                      .indexOf(colorToUse.code) === -1
                      ? 'Add to favorites'
                      : 'Remove from favorites'
                  "
                  color="#7b6dc4"
                  placement="top"
                  mouse-enter-delay="0.5"
                >
                  <heart-outlined
                    v-if="
                      userColorStore.favorites
                        .map((f) => f.code)
                        .indexOf(colorToUse.code) === -1
                    "
                    @click.stop="addToFavorites"
                    style="font-size: 20px"
                    :style="`color: ${colorToUse.text}`"
                  />

                  <heart-filled
                    v-else
                    @click.stop="removeFromFavorites(colorToUse)"
                    style="font-size: 20px"
                    :style="`color: ${colorToUse.text}`"
                  />
                </a-tooltip>
              </div>

              <div
                class="scale-1 relative mx-auto h-[280px] w-[250px] cursor-pointer active:scale-[98%]"
                @click="copyToClipboard"
              >
                <div
                  class="absolute left-[50%] top-[50%] h-[230px] w-[230px] translate-x-[-50%] translate-y-[calc(-50%-15px)] rounded-md transition-all"
                  :style="{ backgroundColor: colorToUse.code }"
                ></div>

                <div
                  class="absolute bottom-[10px] left-[50%] translate-x-[-50%] select-none font-semibold text-gray-600"
                >
                  {{ colorToUse.code }}
                </div>
              </div>
            </div>

            <div v-else class="relative mx-auto h-[280px] w-[250px]">
              <div
                class="absolute left-[50%] top-[50%] h-[230px] w-[230px] translate-x-[-50%] translate-y-[calc(-50%-15px)] rounded-md bg-primary transition-all"
              ></div>
              <div
                class="absolute bottom-[10px] left-[50%] translate-x-[-50%] select-none"
              >
                Loading
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div
            class="flex w-[60px] flex-col items-center justify-center gap-4"
          ></div>
        </div>

        <div class="mt-8 w-full justify-center gap-6">
          <a-button
            type="primary"
            class="!w-[220px] !rounded-sm !border-0 !bg-primary opacity-100"
            :class="{ 'opacity-25': loading, '!cursor-default': loading }"
            @click="!loading ? createColor() : null"
          >
            Generate a new color
          </a-button>
          <div
            class="mt-3 hidden select-none text-xs opacity-50 transition-all md:block"
            :class="{ '!opacity-0': loading }"
          >
            Or press the Spacebar to generate new color
          </div>
        </div>
      </div>
    </div>

    <!-- HISTORY -->
    <ModalHistory
      v-model:historyModalVisible="historyModalVisible"
      :data="userColorStore"
      @useHistoryColor="useHistoryColor"
    />

    <!-- FAVORITES -->
    <ModalFavorites
      v-model:favoritesModalVisible="favoritesModalVisible"
      :data="userColorStore"
      @useFavorite="useFavorite"
      @removeFromFavorites="removeFromFavorites"
    />

    <!-- MATCHING COLORS -->
    <ModalMatchingColor
      v-model:matchingColorsModalVisible="matchingColorsModalVisible"
      :data="colorToUse"
      @useMatchingColor="useMatchingColor"
    />

    <!-- FLOATING CTA: DISCOVER TEMPLATES (New Feature) -->
    <div
      class="fixed bottom-6 right-6 z-50 transition-transform duration-300 hover:scale-[1.03]"
      title="See examples and templates using these colors."
    >
      <div
        class="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-xl transition-all hover:bg-indigo-700"
        @click="goToTemplate"
      >
        <!-- Using LayoutOutlined (Ant Design Icon) for template/design concept -->
        <layout-outlined style="font-size: 16px" />
        Discover Templates
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue'

// Assuming required Ant Design icons (like LayoutOutlined) are available globally
// or imported elsewhere in the setup script if needed.

useHead({
  titleTemplate: 'Colorinspi',
})

const userColorStore = useUserColorStore()

const colorToUse = ref({
  name: '',
  code: '',
  text: 'black',
  matchingColors: [],
})

const historyModalVisible = ref(false)
const favoritesModalVisible = ref(false)
const matchingColorsModalVisible = ref(false)

const loading = ref(true)

const createColor = async () => {
  loading.value = true

  await userColorStore.getCurrentColor()

  if (!userColorStore?.settings?.mode) {
    userColorStore.getSettings('monochrome')
  }

  colorToUse.value = userColorStore.currentColor

  loading.value = false
}

onMounted(() => {
  loading.value = true

  if (userColorStore.currentColor.code) {
    colorToUse.value = userColorStore.currentColor
  } else {
    createColor()
  }

  if (userColorStore.history.length > 0) {
  }

  loading.value = false

  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.code === 'Space') {
    createColor()
  }
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(colorToUse.value.code)

    notification['success']({
      message: 'Copied to Clipboard!',
      description:
        'Color code copied to clipboard! You can now paste it anywhere you like.',
      duration: 3,
      closeIcon: false,
    })
  } catch (err) {
    notification['error']({
      message: 'Copy Failed',
      description:
        'Oops! Something went wrong and we could not copy the color code to your clipboard.',
      duration: 3,
      closeIcon: false,
    })
  }
}

const useHistoryColor = (color: any) => {
  colorToUse.value = color

  // Update current color in store
  userColorStore.setCurrentColor(color)

  historyModalVisible.value = false
}

const useFavorite = (color: any) => {
  colorToUse.value = color

  // Update current color in store
  userColorStore.setCurrentColor(color)

  favoritesModalVisible.value = false
}

const useMatchingColor = async (color: any) => {
  // check if color is already in history
  const isHistory = userColorStore.history.some(
    (history) => history.code === color.code
  )

  if (!isHistory) {
    color.matchingColors = await userColorStore.getAllColorSchemes(color.code)

    // Add to history
    userColorStore.addToHistory(color)
  }

  colorToUse.value = color

  // Update current color in store
  userColorStore.setCurrentColor(color)

  matchingColorsModalVisible.value = false
}

const addToFavorites = () => {
  // check if color is already in favorites
  const isFavorite = userColorStore.favorites.some(
    (favorite) => favorite.code === colorToUse.value.code
  )

  if (isFavorite) {
    return
  }

  userColorStore.addToFavorites(colorToUse.value)
}

const removeFromFavorites = (color: any) => {
  userColorStore.removeFromFavorites(color)
}

const goToTemplate = () => {
  navigateTo('/templates/landing')
}
</script>
