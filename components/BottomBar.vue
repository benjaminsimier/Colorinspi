<template>
  <div>
    <div
      class="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white py-2 md:py-4"
    >
      <div class="container mx-auto px-2 md:px-4">
        <!-- Responsive Layout: Stacked on mobile (flex-col), Grid on desktop (md:grid-cols-3) -->
        <div
          class="flex flex-col items-center justify-between gap-y-2 md:grid md:grid-cols-3"
        >
          <!-- 1. Actions (Left Group) -->
          <!-- Responsive: w-full, horizontal scrollable on mobile (overflow-x-auto) -->
          <div
            class="order-1 flex w-full flex-nowrap items-center justify-center gap-2 overflow-x-auto md:order-1 md:w-auto md:justify-start md:overflow-visible"
          >
            <!-- GENERATE -->
            <div class="mr-4 flex-shrink-0">
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
            <div class="flex-shrink-0">
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
            <div class="flex-shrink-0">
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
            <div class="flex-shrink-0">
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
            <div class="ml-4 flex-shrink-0">
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

          <!-- 2. Color Swatches (Center Group) -->
          <!-- Responsive: w-full, centered -->
          <div
            class="order-2 flex w-full items-center justify-center gap-2 md:order-2 md:w-auto"
          >
            <div
              class="h-8 w-8 flex-shrink-0 rounded-md border"
              :style="{ backgroundColor: colorToUse.code }"
            ></div>

            <div
              v-for="item in colorToUse.matchingColors[
                userColorStore.settings.mode
              ]"
              :key="item.code"
              class="flex-shrink-0"
            >
              <div
                class="h-8 w-8 rounded-md border"
                :style="{ backgroundColor: item.code }"
              ></div>
            </div>
          </div>

          <!-- 3. Settings (Right Group) -->
          <!-- Responsive: w-full. Use justify-between and flex-1 on mobile for split buttons -->
          <div
            class="order-3 flex w-full items-center justify-between gap-2 md:order-3 md:w-auto md:justify-end"
          >
            <!-- TEMPLATE -->
            <div class="flex-1 md:flex-none">
              <a-button
                type="secondary"
                @click="templatesModalVisible = true"
                class="w-full"
              >
                {{
                  templates.find(
                    (i) => i.slug === userColorStore.settings.template
                  )?.name || templates[0].name
                }}
              </a-button>
            </div>

            <!-- COLOR MODE -->
            <div class="flex-1 md:flex-none">
              <a-button
                type="secondary"
                @click="colorModesModalVisible = true"
                class="w-full"
              >
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

    <!-- MODALS (kept unchanged) -->

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
            :type="item.slug === currentTemplate ? 'primary' : 'secondary'"
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
import { ref, onMounted } from 'vue'

// Import necessary icons if they are used globally or need explicit import in a setup script
// Note: Assuming these icons (PlusOutlined, HistoryOutlined, etc.) are available either globally or imported elsewhere.

// get store
// Assuming useUserColorStore is globally defined or imported via nuxt/vite/etc.
declare const useUserColorStore: () => any

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
  matchingColors: {}, // Initialized as object to match expected structure access later
})

// Get template from url
const currentTemplate = computed(() =>
  useRouter().currentRoute.value.fullPath.replace('/templates/', '')
)

onMounted(() => {
  // Initialize colorToUse if store data exists, or create new color
  // Assuming userColorStore.settings is available immediately
  if (!userColorStore?.settings.mode) {
    userColorStore.getSettings('monochrome')
  }

  if (!userColorStore.currentColor?.code) {
    createColor()
  } else {
    colorToUse.value = userColorStore.currentColor
  }
})

const createColor = async () => {
  loading.value = true

  // Ensure getCurrentColor fetches and sets the current color
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
  // Assuming navigateTo is a global function (e.g., from Nuxt 3)
  navigateTo(`/templates/${template}`)

  templatesModalVisible.value = false
}

const useColorMode = (mode: string) => {
  userColorStore.getSettings(mode)

  // Re-fetch matching colors since the mode changed, otherwise colorToUse won't update its swatches visually
  // If userColorStore handles re-fetching on setting change, this might not be needed.
  // Assuming useUserColorStore.getSettings triggers necessary reactivity/updates.

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
    // Assuming userColorStore.getAllColorSchemes is available
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
  // check if color is already in favorites is handled in the template logic
  userColorStore.addToFavorites(colorToUse.value)
}

const removeFromFavorites = (color: any) => {
  userColorStore.removeFromFavorites(color)
}
</script>
