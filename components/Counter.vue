<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const props = defineProps<{
  initial?: number
}>()

const { count, inc, dec } = useCounter(props.initial || 0)
</script>

<template>
  <div class="counter-container">
    <button class="btn dec" @click="dec()">
      -
    </button>
    <span class="count">{{ count }}</span>
    <button class="btn inc" @click="inc()">
      +
    </button>
  </div>
</template>

<style lang="scss" scoped>
.counter-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--va-c-divider);
  border-radius: 4px;
  padding: 0.5rem;
  margin: 1rem 0;
  gap: 1rem;
  background-color: var(--va-c-bg-light);
}

.count {
  font-size: 1.5rem;
  font-weight: bold;
  min-width: 2rem;
  text-align: center;
  color: var(--va-c-text);
}

.btn {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background-color: var(--va-c-primary);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
