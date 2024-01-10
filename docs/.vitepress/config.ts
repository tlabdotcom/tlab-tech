import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TLab Tech",
  titleTemplate: "Amazing",
  description: "Documentation all TLab Tech Universe",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/documentation/' }
    ],

    sidebar: {
      '/documentation': [
        {
          text: 'Intro',
          items: [
            { text: 'Backend Engineer', link: '/documentation/' }
          ]
        },
        {
          text: 'Guidelines',
          items: [
            { text: 'REST API', link: '/documentation/rest/' },
            { text: 'Semantic Versioning', link: '/documentation/semver/' },
            { text: 'Format Database', link: '/documentation/database-format/' },
            { text: 'Naming Convention', link: '/documentation/naming-convention/' },
            { text: 'Conventional Commits', link: '/documentation/conventional-commits/' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
