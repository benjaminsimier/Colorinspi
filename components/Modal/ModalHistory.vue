<template>
  <div>
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
          v-for="color in data.history.slice().reverse()"
          :key="color.code"
          class="col-span-12 transition-all sm:col-span-3 lg:col-span-2"
        >
          <div
            class="flex aspect-square w-full cursor-pointer items-center justify-center rounded-md border transition-all hover:bg-primary"
            :style="{ backgroundColor: color.code, color: color.text }"
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
  </div>
</template>

<script setup lang="ts">
// props
const props = defineProps<{
  historyModalVisible: boolean
  data: any
}>()

// emit
const emit = defineEmits(['useHistoryColor', 'update:historyModalVisible'])

// methods
const useHistoryColor = (color: any) => {
  // emit event to parent
  emit('useHistoryColor', color)
}

// computed
const historyModalVisible = computed({
  get: () => props.historyModalVisible,
  set: (value: boolean) => {
    emit('update:historyModalVisible', value)
  },
})
</script>
