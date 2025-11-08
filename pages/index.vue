<template>
  <div>
    <div
      class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-background"
    >
      <div class="justify-center text-center">
        <div class="mb-[30px] text-2xl font-medium text-richBlack">
          <a href="https://www.instagram.com/colorinspi/" target="_blank"
            >Colorinspi</a
          >'s color generator
        </div>

        <div class="flex gap-4">
          <!-- LEFT -->
          <div class="flex w-[60px] flex-col items-center justify-center gap-4">
            <!-- HISTORY -->
            <div
              class="h-[50px] w-[50px] select-none items-center justify-center rounded-full border border-primary transition-all md:flex"
              :class="
                userColorStore.history.length > 1
                  ? '!cursor-pointer !opacity-100'
                  : '!cursor-default opacity-25'
              "
              @click="
                userColorStore.history.length > 1
                  ? (historyModalVisible = true)
                  : null
              "
            >
              <a-tooltip
                title="Color History"
                color="#7b6dc4"
                placement="top"
                mouseEnterDelay="0.5"
              >
                <history-outlined style="color: #7b6dc4; font-size: 20px" />
              </a-tooltip>
            </div>

            <!-- FAVORITES -->
            <div
              class="h-[50px] w-[50px] cursor-pointer select-none items-center justify-center rounded-full border border-primary opacity-100 transition-all md:flex"
              @click="favoritesModalVisible = true"
            >
              <a-tooltip
                title="Favorites"
                color="#7b6dc4"
                placement="top"
                mouseEnterDelay="0.5"
              >
                <appstore-add-outlined
                  style="color: #7b6dc4; font-size: 20px"
                />
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
                  mouseEnterDelay="0.5"
                >
                  <heart-outlined
                    v-if="
                      userColorStore.favorites
                        .map((f) => f.code)
                        .indexOf(colorToUse.code) === -1
                    "
                    @click.stop="addToFavorites"
                    style="color: #7b6dc4; font-size: 20px"
                  />

                  <heart-filled
                    v-else
                    @click.stop="removeFromFavorites(colorToUse)"
                    style="color: #7b6dc4; font-size: 20px"
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
                  class="absolute bottom-[10px] left-[50%] translate-x-[-50%] select-none"
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
            @click="!loading ? changeColor() : null"
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

    <div
      class="absolute bottom-5 w-full gap-2 text-center md:right-5 md:flex md:w-auto"
    >
      <div>
        This interface use the
        <a
          href="https://www.thecolorapi.com"
          target="_blank"
          rel="noopener noreferrer"
          >THE<span class="font-bold">COLOR</span>API</a
        >
      </div>
      <div class="hidden opacity-70 md:block">-</div>
      <div>
        Project on
        <a
          href="https://github.com/benjaminsimier/Colorinspi"
          target="_blank"
          rel="noopener noreferrer"
          >Github</a
        >
      </div>
    </div>

    <!-- HISTORY -->
    <a-modal
      v-model:visible="historyModalVisible"
      :footer="null"
      title="Color History"
      centered
      width="1000px"
      @ok="historyModalVisible = false"
    >
      <div class="grid h-96 grid-cols-12 gap-2 overflow-scroll">
        <div
          v-for="color in userColorStore.history.slice().reverse()"
          :key="color.code"
          class="col-span-2"
        >
          <div
            class="flex aspect-square w-full cursor-pointer items-center justify-center rounded-md border border-primary transition-all hover:bg-primary hover:text-white"
            :style="{ backgroundColor: color.code }"
            @click="useHistoryColor(color)"
          >
            <div class="flex flex-col items-center gap-1">
              <div class="text-sm">{{ color.name }}</div>
              <div class="text-xs">{{ color.code }}</div>
            </div>
          </div>
        </div>
      </div>
    </a-modal>

    <!-- FAVORITES -->
    <a-modal
      v-model:visible="favoritesModalVisible"
      :footer="null"
      title="Favorites"
      centered
      width="1000px"
      @ok="favoritesModalVisible = false"
    >
      <div class="grid h-96 grid-cols-12 gap-2 overflow-scroll">
        <div
          v-for="color in userColorStore.favorites.slice().reverse()"
          :key="color.code"
          class="col-span-2"
        >
          <div
            class="relative flex aspect-square w-full cursor-pointer items-center justify-center rounded-md border border-primary transition-all hover:bg-primary hover:text-white"
            :style="{ backgroundColor: color.code }"
            @click="useFavorite(color)"
          >
            <!-- ADD TO FAVORITES -->
            <div class="absolute right-[8px] top-[8px] z-20">
              <a-tooltip
                title="Remove from favorites"
                color="#7b6dc4"
                placement="top"
                mouseEnterDelay="0.5"
              >
                <delete-outlined
                  @click.stop="removeFromFavorites(color)"
                  style="color: #7b6dc4; font-size: 20px"
                />
              </a-tooltip>
            </div>

            <div class="flex flex-col items-center gap-1">
              <div class="text-sm">{{ color.name }}</div>
              <div class="text-xs">{{ color.code }}</div>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue'

useHead({
  titleTemplate: 'Colorinspi',
})

const userColorStore = useUserColorStore()

const colorToUse = ref({ name: '', code: '' })
const isFavorite = ref(false)

const historyModalVisible = ref(false)
const favoritesModalVisible = ref(false)

const loading = ref(true)

const createColor = async () => {
  loading.value = true

  await userColorStore.getCurrentColor()

  colorToUse.value = {
    name: userColorStore.currentColor.name,
    code: userColorStore.currentColor.code,
  }

  loading.value = false
}

const changeColor = () => {
  createColor()
}

onMounted(() => {
  loading.value = true

  if (userColorStore.currentColor.code) {
    colorToUse.value = {
      name: userColorStore.currentColor.name,
      code: userColorStore.currentColor.code,
    }
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
    changeColor()
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
  colorToUse.value = {
    name: color.name,
    code: color.code,
  }

  historyModalVisible.value = false
}

const useFavorite = (color: any) => {
  colorToUse.value = {
    name: color.name,
    code: color.code,
  }

  favoritesModalVisible.value = false
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
</script>
