<script lang="ts" setup>
import { defineWebPage, useSchemaOrg } from '@unhead/schema-org/vue'
import { useFrontmatter, usePostTitle } from 'valaxy'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const frontmatter = useFrontmatter()

const title = usePostTitle(frontmatter)

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

// 判断 albums 是分组格式还是平铺格式
const raw = computed(() => frontmatter.value.albums || [])
const isGrouped = computed(() => !Array.isArray(raw.value))

// 分组格式
const groups = computed(() => {
  if (!isGrouped.value) return []
  return Object.entries(raw.value as Record<string, any>).map(([key, val]) => ({
    key,
    title: val.title || key,
    emoji: val.emoji || '📸',
    collection: val.collection || [],
  }))
})

// 平铺格式的 albums 列表
const flatAlbums = computed(() => {
  if (Array.isArray(raw.value)) return raw.value
  return []
})

const curGroup = ref('all')
</script>

<template>
  <YunLayoutWrapper>
    <YunLayoutLeft />

    <RouterView v-slot="{ Component }">
      <component :is="Component">
        <template #main-header>
          <YunPageHeader
            :title="title || t('title.album')"
            :icon="frontmatter.icon || 'i-ri-gallery-line'"
            :color="frontmatter.color"
            :page-title-class="frontmatter.pageTitleClass"
          />
        </template>
        <template #main-content>
          <!-- 分组格式 -->
          <template v-if="isGrouped">
            <div text="center" class="yun-text-light" p="2">
              {{ t('counter.albums', groups.reduce((s, g) => s + g.collection.length, 0)) }}
            </div>
            <div class="mt-3" flex="~ wrap" justify="center">
              <YunProjectToggleButton
                :active="curGroup === 'all'"
                @click="curGroup = 'all'"
              >
                全部
              </YunProjectToggleButton>
              <YunProjectToggleButton
                v-for="g in groups"
                :key="g.key"
                :active="g.key === curGroup"
                @click="curGroup = g.key"
              >
                <span class="inline-flex">{{ g.emoji }}</span>
                <span class="inline-flex">{{ g.title }}</span>
              </YunProjectToggleButton>
            </div>
            <div flex="~ wrap" justify="center">
              <template v-for="g in groups" :key="g.key">
                <div v-if="curGroup === 'all' || curGroup === g.key" class="w-full text-center">
                  <div class="yun-album-group-title" text="xl" font="black" m="b-2 t-4">
                    {{ g.emoji }} {{ g.title }}
                  </div>
                  <YunAlbumList :albums="g.collection" />
                </div>
              </template>
            </div>
          </template>
          <!-- 平铺格式（兼容旧格式） -->
          <template v-else>
            <div text="center" class="yun-text-light" p="2">
              {{ t('counter.albums', flatAlbums.length) }}
            </div>
            <YunAlbumList :albums="flatAlbums" />
          </template>
          <RouterView />
        </template>
      </component>
    </RouterView>
  </YunLayoutWrapper>

  <YunFooter />
</template>
