import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'SCuNF',
    },
    nav: [
    { text: 'menu.posts', link: '/posts/', icon: 'i-ri-article-line' },
    { text: '项目列表', link: '/project', icon: 'i-ri-gallery-view' },
    { text: '相册', link: '/albums', icon: 'i-ri-image-line' },
    { text: '友情链接', link: '/links/', icon: 'i-ri-link' },
    { text: '老婆列表', link: '/girls/', icon: 'i-ri-women-line' },
    
  ],

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2016,
      beian: {
        enable: true,
        icp: '苏ICP备17038157号',
        police: '苏公网安备xxxxxx号',
      },
    },
  },

  unocss: { safelist },
})
