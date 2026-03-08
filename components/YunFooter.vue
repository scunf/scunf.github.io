<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

// 引入不蒜子统计脚本
useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <!-- 这里的 id 是不蒜子统计专用的，请勿修改 -->
    <div class="busuanzi-stats">
      <span id="busuanzi_container_site_pv" style="display:none">
        本站总访问量 <span id="busuanzi_value_site_pv" /> 次
      </span>
      <span class="mx-2">|</span>
      <span id="busuanzi_container_site_uv" style="display:none">
        本站访客数 <span id="busuanzi_value_site_uv" /> 人次
      </span>
    </div>

    <!-- 网站运行时间，start-time 请修改为你建站的日期 -->
    <VCLiveTime mt="2" start-time="2024-01-01">
      <template #live-time-before>
        <span>本站已运行</span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>

<style scoped>
.busuanzi-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}
</style>
