<template>
  <div>
    <a-modal
      v-model:visible="favoritesModalVisible"
      :footer="null"
      title="Favorites"
      centered
      width="1000px"
      @ok="favoritesModalVisible = false"
    >
      <div
        v-if="data.favorites.length"
        class="grid h-96 grid-cols-12 gap-2 overflow-scroll"
      >
        <div
          v-for="color in data.favorites.slice().reverse()"
          :key="color.code"
          class="col-span-12 transition-all sm:col-span-3 lg:col-span-2"
        >
          <div
            class="group relative flex aspect-square w-full cursor-pointer items-center justify-center rounded-md border transition-all hover:bg-primary"
            :style="{ backgroundColor: color.code, color: color.text }"
            @click="useFavorite(color)"
          >
            <div
              class="absolute right-[8px] top-[8px] z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 transition-all group-hover:opacity-100"
            >
              <a-tooltip
                title="Remove from favorites"
                color="#7b6dc4"
                placement="top"
                mouseEnterDelay="0.5"
              >
                <delete-outlined
                  @click.stop="removeFromFavorites(color)"
                  style="color: #7b6dc4; font-size: 18px"
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

      <div v-else class="flex h-96 items-center justify-center">
        No favorite color yet
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
// props
const props = defineProps<{
  favoritesModalVisible: boolean
  data: any
}>()

// emit
const emit = defineEmits([
  'useFavorite',
  'removeFromFavorites',
  'update:favoritesModalVisible',
])

// methods
const useFavorite = (color: any) => {
  // emit event to parent
  emit('useFavorite', color)
}

const removeFromFavorites = (color: any) => {
  // emit event to parent
  emit('removeFromFavorites', color)
}

// computed
const favoritesModalVisible = computed({
  get: () => props.favoritesModalVisible,
  set: (value: boolean) => {
    emit('update:favoritesModalVisible', value)
  },
})
</script>
