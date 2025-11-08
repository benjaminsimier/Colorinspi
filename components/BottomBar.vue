<template>
  <div>
    <div
      class="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white py-4"
    >
      <div class="container">
        <div class="grid grid-cols-3 items-center justify-between">
          <div class="flex items-center justify-start gap-2">
            <!-- GENERATE -->
            <div class="mr-4">
              <a-tooltip
                title="Generate Color"
                color="#7b6dc4"
                placement="top"
                mouse-enter-delay="0.5"
              >
                <a-button
                  type="primary"
                  :loading="loading"
                  @click="createColor"
                >
                  <template #icon>
                    <LoadingOutlined v-if="loading" />
                    <PlusOutlined v-else />
                  </template>
                </a-button>
              </a-tooltip>
            </div>

            <!-- HISTORY -->
            <div>
              <a-tooltip
                title="Color History"
                color="#7b6dc4"
                placement="top"
                mouse-enter-delay="0.5"
              >
                <a-button
                  type="secondary"
                  :loading="loading"
                  @click="historyModalVisible = true"
                >
                  <template #icon>
                    <LoadingOutlined v-if="loading" />
                    <HistoryOutlined v-else />
                  </template>
                </a-button>
              </a-tooltip>
            </div>

            <!-- FAVORITES -->
            <div>
              <a-tooltip
                title="Favorites"
                color="#7b6dc4"
                placement="top"
                mouse-enter-delay="0.5"
              >
                <a-button
                  type="secondary"
                  :loading="loading"
                  @click="favoritesModalVisible = true"
                >
                  <template #icon>
                    <LoadingOutlined v-if="loading" />
                    <AppstoreAddOutlined v-else />
                  </template>
                </a-button>
              </a-tooltip>
            </div>

            <!-- MATCHING COLORS -->
            <div>
              <a-tooltip
                title="Matching Colors"
                color="#7b6dc4"
                placement="top"
                mouse-enter-delay="0.5"
              >
                <a-button
                  type="secondary"
                  :loading="loading"
                  @click="matchingColorsModalVisible = true"
                >
                  <template #icon>
                    <LoadingOutlined v-if="loading" />
                    <EditOutlined v-else />
                  </template>
                </a-button>
              </a-tooltip>
            </div>

            <!-- ADD TO FAVORITES -->
            <div class="ml-4">
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
                <a-button type="secondary" :loading="loading">
                  <template #icon>
                    <HeartOutlined
                      v-if="
                        userColorStore.favorites
                          .map((f) => f.code)
                          .indexOf(colorToUse.code) === -1
                      "
                      @click="addToFavorites"
                    />

                    <HeartFilled
                      v-else
                      @click="removeFromFavorites(colorToUse)"
                    />
                  </template>
                </a-button>
              </a-tooltip>
            </div>
          </div>

          <div class="flex items-center justify-center gap-2">
            <div
              class="h-8 w-8 rounded-md border"
              :style="{ backgroundColor: colorToUse.code }"
            ></div>

            <div
              v-for="item in colorToUse.matchingColors[
                userColorStore.settings.mode
              ]"
              :key="item.code"
            >
              <div
                class="h-8 w-8 rounded-md border"
                :style="{ backgroundColor: item.code }"
              ></div>
            </div>
          </div>

          <div class="flex items-center justify-end gap-2">
            <!-- TEMPLATE -->
            <div>
              <a-button type="secondary" @click="templatesModalVisible = true">
                {{
                  templates.find(
                    (i) => i.slug === userColorStore.settings.template
                  )?.name || templates[0].name
                }}
              </a-button>
            </div>

            <!-- COLOR MODE -->
            <div>
              <a-button type="secondary" @click="colorModesModalVisible = true">
                {{
                  colorModes.find(
                    (i) => i.mode === userColorStore.settings.mode
                  )?.name || colorModes[0].name
                }}
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TEMPLATE -->
    <a-modal
      v-model:visible="templatesModalVisible"
      :footer="null"
      :closable="false"
      centered
      width="250px"
      @ok="templatesModalVisible = false"
    >
      <div class="flex flex-col gap-2 overflow-scroll">
        <div v-for="item in templates" :key="item.name">
          <a-button
            type="secondary"
            class="w-full"
            @click="useTemplate(item.slug)"
          >
            {{ item.name }}
          </a-button>
        </div>
      </div>
    </a-modal>

    <!-- COLOR MODE -->
    <a-modal
      v-model:visible="colorModesModalVisible"
      :footer="null"
      :closable="false"
      centered
      width="250px"
      @ok="colorModesModalVisible = false"
    >
      <div class="flex flex-col gap-2 overflow-scroll">
        <div v-for="item in colorModes" :key="item.mode">
          <a-button
            :type="
              item.mode === userColorStore.settings.mode
                ? 'primary'
                : 'secondary'
            "
            class="w-full"
            @click="useColorMode(item.mode)"
          >
            {{ item.name }}
          </a-button>
        </div>
      </div>
    </a-modal>

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
  </div>
</template>

<script setup lang="ts">
// get store
const userColorStore = useUserColorStore()

const templatesModalVisible = ref(false)
const colorModesModalVisible = ref(false)

const historyModalVisible = ref(false)
const favoritesModalVisible = ref(false)
const matchingColorsModalVisible = ref(false)

const loading = ref(false)

const colorToUse = ref({
  name: '',
  code: '',
  text: 'black',
  matchingColors: [],
})

onMounted(() => {
  if (!userColorStore?.settings.mode) {
    userColorStore.getSettings('monochrome')
  }

  if (!userColorStore.currentColor.code) {
    createColor()
  } else {
    colorToUse.value = userColorStore.currentColor
  }
})

const createColor = async () => {
  loading.value = true

  await userColorStore.getCurrentColor()

  colorToUse.value = userColorStore.currentColor

  loading.value = false
}

const templates = ref([
  {
    name: 'Landing Page',
    slug: 'landing',
  },
  {
    name: 'Pricing Page',
    slug: 'pricing',
  },
  {
    name: 'Product Page',
    slug: 'product',
  },
  {
    name: 'Blog Post',
    slug: 'blog-post',
  },
  {
    name: 'Blog',
    slug: 'blog',
  },
  //   {
  //     name: 'Portfolio',
  //     slug: 'portfolio',
  //   },
  //   {
  //     name: 'Resume',
  //     slug: 'resume',
  //   },
])

const colorModes = ref([
  {
    name: 'Monochrome',
    mode: 'monochrome',
  },
  {
    name: 'Analogic',
    mode: 'analogic',
  },
  {
    name: 'Complement',
    mode: 'complement',
  },
  {
    name: 'Triad',
    mode: 'triad',
  },
])

const useTemplate = (template: string) => {
  // go to template page
  navigateTo(`/templates/${template}`)

  templatesModalVisible.value = false
}

const useColorMode = (mode: string) => {
  userColorStore.getSettings(mode)

  colorModesModalVisible.value = false
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
</script>
