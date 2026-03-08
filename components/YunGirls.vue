<script lang="ts" setup>
import { isClient } from '@vueuse/core'
import { ref, watch } from 'vue'

export interface GirlType {
  name: string
  avatar: string
  from: string
  url?: string
  reason?: string
}

const props = defineProps<{
  girls: GirlType[] | string
  random?: boolean
}>()

const data = ref<GirlType[]>([])

watch(() => props.girls, async () => {
  let rawData: GirlType[] = []
  
  if (typeof props.girls === 'string') {
    if (!isClient) return
    try {
      rawData = (await fetch(props.girls).then(res => res.json()) as GirlType[]) || []
    } catch (e) {
      console.error('Failed to fetch girls data:', e)
    }
  } else {
    rawData = props.girls || []
  }

  // Randomize if requested
  if (props.random) {
    data.value = Array.from(rawData).sort(() => Math.random() - 0.5)
  } else {
    data.value = rawData
  }
}, { immediate: true })
</script>

<template>
  <div class="girls">
    <ul class="girl-items">
      <YunGirlItem v-for="(girl, i) in data" :key="i" :i="i" :girl="girl" />
    </ul>
  </div>
</template>

<style lang="scss">
.girls {
  text-align: center;

  .girl-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
  }
}

.girls-number {
  color: white;
}
</style>
