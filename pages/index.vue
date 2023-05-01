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

        <div
          class="relative mx-auto h-[280spx] w-[250px] cursor-pointer rounded-md bg-white shadow-md"
        >
          <div v-if="!loading">
            <div
              v-if="previousColor"
              class="absolute left-[-80px] top-[50%] hidden h-[50px] w-[50px] translate-y-[-50%] cursor-default select-none items-center justify-center rounded-full border border-primary opacity-25 transition-all md:flex"
              :class="{
                '!opacity-100': previousColorActive,
                '!cursor-pointer': previousColorActive,
              }"
              @click="previousColorActive ? usePreviousColor() : null"
            >
              <a-tooltip
                v-if="previousColorActive"
                title="Previous color"
                color="#7b6dc4"
                placement="left"
                mouseEnterDelay="0.7"
              >
                <rollback-outlined style="color: #7b6dc4; font-size: 20px" />
              </a-tooltip>
              <div v-else>
                <rollback-outlined style="color: #7b6dc4; font-size: 20px" />
              </div>
            </div>

            <div
              class="scale-1 relative mx-auto h-[280px] w-[250px] active:scale-[98%]"
              @click="copyToClipboard"
            >
              <div
                class="absolute left-[50%] top-[50%] h-[230px] w-[230px] translate-x-[-50%] translate-y-[calc(-50%-15px)] rounded-md transition-all"
                :style="{ backgroundColor: '#' + colorToUse.code }"
              ></div>
              <div
                class="absolute bottom-[10px] left-[50%] translate-x-[-50%] select-none"
              >
                #{{ colorToUse.code }}
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

        <div class="mt-8 w-full justify-center gap-6">
          <a-button
            type="primary"
            :size="size"
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

    <div class="absolute bottom-5 right-5 flex gap-2">
      <div>
        This interface use the
        <a
          href="https://www.colr.org/api.html"
          target="_blank"
          rel="noopener noreferrer"
          >Colr API</a
        >
      </div>
      <div class="opacity-70">-</div>
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
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue'
import axios from 'axios'

useHead({
  titleTemplate: 'Colorinspi',
})

const colorToUse = ref({ name: '', code: '' })
const previousColor = ref({ name: '', code: '' })
const previousColorActive = ref(false)

const loading = ref(true)

const createColor = async () => {
  try {
    const response = await axios.get(
      'https://www.colr.org/json/color/random?timestamp=' + Date.now()
    )
    const color = response.data

    if (
      color.colors &&
      color.colors[0] &&
      color.colors[0].tags &&
      color.colors[0].tags[0]
    ) {
      const code = color.colors[0].hex
      const name = color.colors[0].tags[0].name

      localStorage.setItem(
        'previousColor',
        JSON.stringify({
          name: colorToUse.value.name,
          code: colorToUse.value.code,
        })
      )

      colorToUse.value = {
        name,
        code,
      }
    } else {
      return createColor()
    }
  } catch (error) {
    console.error(error)
  }
}

const changeColor = () => {
  previousColorActive.value = true
  createColor()
}

onMounted(() => {
  createColor()
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

watch(colorToUse, () => {
  previousColor.value = JSON.parse(localStorage.getItem('previousColor'))
  if (colorToUse.value.code) {
    loading.value = false
  }
})

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.code === 'Space' && !loading) {
    changeColor()
  }
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText('#' + colorToUse.value.code)

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

const usePreviousColor = () => {
  const code = previousColor.value.code
  const name = previousColor.value.name

  previousColorActive.value = false
  colorToUse.value = {
    name,
    code,
  }
}
</script>
