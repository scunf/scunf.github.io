<script lang="ts" setup>
import type { Post } from 'valaxy'
import { useLayout } from 'valaxy'
import YunPostMeta from 'valaxy-theme-yun/components/YunPostMeta.vue'

defineProps<{
  frontmatter: Post
}>()

// 仅在 Post 布局（文章详情页）显示
const isPost = useLayout('post')
</script>

<template>
  <!-- 使用插槽将自定义内容插入到 YunPostMeta 中 -->
  <YunPostMeta :frontmatter="frontmatter">
    <!-- 不蒜子文章阅读量统计 -->
    <span v-if="isPost" id="busuanzi_container_page_pv" class="inline-flex items-center gap-1" title="阅读量">
      <div class="i-ri-eye-line" />
      <span id="busuanzi_value_page_pv" />
    </span>
  </YunPostMeta>
</template>
