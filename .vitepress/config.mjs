import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/",
  title: "NET Online",
  description: "Documentation for NET Online",
  lang: "ru-RU",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/STNET-ONLINE/docs/tree/master/docs/:path'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Интерфейс',
        items: [
          { text: 'Адаптивный интерфейс', link: '/interface-adaptive' }
        ]
      },
      {
        text: 'Сценарные действия',
        items: [
          { text: 'Сохранение прогресса (Legacy)', link: '/legacy-saveloot' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/STNET-ONLINE/docs' },
      { icon: 'x', link: 'https://x.com/netonline_mod' },
      { icon: 'vk', link: 'https://vk.com/stalknetonline' }
    ]
  }
})
