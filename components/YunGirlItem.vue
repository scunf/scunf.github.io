<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

// Define the type locally to avoid dependency issues
export interface GirlType {
  name: string
  avatar: string
  from: string
  url?: string
  reason?: string
}

const props = defineProps<{
  i: number
  girl: GirlType
}>()

const itemRef = ref()

// Animation using @vueuse/motion
useMotion(itemRef, {
  initial: {
    opacity: 0,
    translateY: 40,
  },
  enter: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: 'spring',
      duration: 400,
      damping: 8,
      delay: props.i * 50,
    },
  },
})

// Fallback image handler
const onImgError = (e: Event) => {
  const targetEl = e.target as HTMLImageElement
  // Use a reliable placeholder or just keep the broken image if you prefer
  // Here we use a generic avatar placeholder from a CDN
  targetEl.src = 'https://cdn.yunyoujun.cn/img/avatar/none.jpg' 
}
</script>

<template>
  <li ref="itemRef" class="girl-item">
    <a
      class="girl-item-link"
      :href="girl.url || `https://zh.moegirl.org/${girl.name}`"
      :title="girl.reason" alt="portrait" target="_blank" rel="noopener"
    >
      <figure class="girl-info">
        <img 
          class="girl-avatar" 
          loading="lazy" 
          :src="girl.avatar" 
          :alt="girl.name" 
          @error="onImgError"
        >
        <figcaption class="girl-name" :title="(i + 1).toString()">{{ girl.name }}</figcaption>
        <figcaption class="girl-from">{{ girl.from }}</figcaption>
      </figure>
    </a>
  </li>
</template>

<style lang="scss">
.girl-item {
  display: inline-flex;
  text-align: center;
  justify-content: center;
  width: 8rem;
  margin: 1rem;
  list-style: none; /* Ensure no bullets */

  .girl-item-link {
    text-decoration: none; /* Remove underline from link */
    color: inherit;
    display: block;
    width: 100%;
  }

  .girl {
    &-info {
      width: 100%;
      padding: 0;
      margin: 0;
    }

    &-avatar {
      object-fit: cover;
      object-position: center top;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      padding: 0.2rem;
      background-color: var(--va-c-bg-light); /* Use theme variable */
      box-shadow: 0 0 1rem rgb(0 0 0 / 0.12);
      transition: 0.5s;

      &:hover {
        box-shadow: 0 0 2rem rgb(0 0 0 / 0.12);
        transform: scale(1.05);
      }
    }

    &-name {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      font-weight: bold;
    }

    &-from {
      font-size: 12px;
      font-family: var(--va-font-serif);
      color: var(--va-c-text-light);

      &::before {
        content: '「';
      }

      &::after {
        content: '」';
      }
    }
  }
}
</style>
