<script setup lang="ts">
import { useFrontmatter, useSiteConfig } from 'valaxy'

const siteConfig = useSiteConfig()

const fm = useFrontmatter()
</script>

<template>
  <YunLayoutWrapper>
    <div flex="~ col">
      <YunProjects />
      <YunSponsor class="mt-4" />
      <YunComment
        v-if="siteConfig.comment.enable &amp;&amp; fm.comment !== false"
        class="max-w-4xl m-auto"
      />
    </div>
  </YunLayoutWrapper>
</template>
