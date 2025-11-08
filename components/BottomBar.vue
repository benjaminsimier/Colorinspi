<template>
  <div>
    <div
      class="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white py-4"
    >
      <div class="container">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <!-- NEW -->
            <div>
              <a-button type="primary" :loading="loading" @click="createColor">
                <template #icon>
                  <LoadingOutlined v-if="loading" />
                  <PlusOutlined v-else />
                </template>
              </a-button>
            </div>

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

          <div class="flex items-center gap-2">
            <!-- TEMPLATE -->
            <div>
              <a-button type="secondary" @click="useTemplate">
                {{ templates[0].name }}
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
    slug: 'landing-page',
  },
  {
    name: 'Blog',
    slug: 'blog',
  },
  {
    name: 'Portfolio',
    slug: 'portfolio',
  },
  {
    name: 'Resume',
    slug: 'resume',
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

const useTemplate = (template: string) => {}

const useColorMode = (mode: string) => {
  userColorStore.getSettings(mode)

  colorModesModalVisible.value = false
}

const useHistoryColor = (color: any) => {}

const useFavorite = (color: any) => {}
const removeFromFavorites = (color: any) => {}

const useMatchingColor = (color: any) => {}
</script>
