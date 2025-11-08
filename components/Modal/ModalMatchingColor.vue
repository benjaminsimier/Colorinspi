<template>
  <div>
    <a-modal
      v-model:visible="matchingColorsModalVisible"
      :footer="null"
      title="Matching Colors"
      centered
      width="550px"
      @ok="matchingColorsModalVisible = false"
    >
      <div class="h-96 overflow-scroll">
        <div class="flex flex-col gap-4">
          <div v-for="(mode, key) in data.matchingColors" :key="key">
            <div class="mb-2 text-lg font-bold capitalize">{{ key }}</div>
            <div class="grid grid-cols-12 gap-2">
              <div
                v-for="color in mode"
                :key="color.code"
                class="col-span-12 transition-all sm:col-span-6 lg:col-span-4"
              >
                <div
                  class="flex aspect-square w-full cursor-pointer items-center justify-center rounded-md border transition-all hover:bg-primary"
                  :style="{ backgroundColor: color.code, color: color.text }"
                  @click="useMatchingColor(color)"
                >
                  <div class="flex flex-col items-center gap-1">
                    <div class="text-sm">{{ color.name }}</div>
                    <div class="text-xs">{{ color.code }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
// props
const props = defineProps<{
  matchingColorsModalVisible: boolean
  data: any
}>()

// emit
const emit = defineEmits([
  'useMatchingColor',
  'update:matchingColorsModalVisible',
])

// methods
const useMatchingColor = (color: any) => {
  // emit event to parent
  emit('useMatchingColor', color)
}

// computed
const matchingColorsModalVisible = computed({
  get: () => props.matchingColorsModalVisible,
  set: (value: boolean) => {
    emit('update:matchingColorsModalVisible', value)
  },
})
</script>
