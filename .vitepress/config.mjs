import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/",
  title: "NET Online - Guide",
  description: "Documentation for NET Online",
  lang: "ru-RU",
  themeConfig: {
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/STNET-ONLINE/docs/tree/master/docs/:path'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Наша команда', link: '/team' },
      { text: 'Документация', link: '/info' }
    ],

    sidebar: [
      {
        text: 'Интерфейс',
        items: [
          { text: 'Адаптивный интерфейс', link: '/interface-adaptive' }
        ]
      },
      {
        text: 'Сценарные действия и функции',
        items: [
          { text: 'Сохранение прогресса (Legacy)', link: '/legacy-saveloot' },
          { text: 'Менеджер группировок', link: '/faction' }
        ]
      },
      {
        text: 'Логика',
        items: [
          { text: 'Персональные хранилища', link: '/logics/stashes' },
        ]
      },
      {
        text: 'История версий',
        items: [
          { text: 'Legacy', items: [
            { text: 'Семейство версий 17.0', link: '/versions/17.0' },
            { text: 'Семейство версий 18.0', link: '/versions/18.0' },
            { text: 'Семейство версий 19.0', link: '/versions/19.0' },
          ]},
          { text: 'Actual', items: [
            { text: 'Семейство версий Experimental', link: '/versions/experimental' },
            { text: 'Семейство версий 0.20', link: '/versions/0.20' },
          ]}
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
