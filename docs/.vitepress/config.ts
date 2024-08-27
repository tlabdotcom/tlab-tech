import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TLab Tech",
  titleTemplate: "Amazing",
  description: "Documentation all TLab Tech Universe",
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap', rel: 'stylesheet' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap', rel: 'stylesheet'}
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/documentation/' }
    ],

    sidebar: {
      '/documentation': [
        { text: 'Intro', link: '/documentation/' },
        {
          text: 'Team',
          items: [
            { text: 'Backend Engineer', link: '/documentation/team/backend.md' },
            { text: 'Frontend Engineer', link: '/documentation/team/frontend.md' },
            { text: 'Fullstack Engineer', link: '/documentation/team/fullstack.md' }
          ]
        },
        {
          text: 'Guidelines',
          items: [
            { text: 'REST API', link: '/documentation/rest/' },
            { text: 'Semantic Versioning', link: '/documentation/semver/' },
            { text: 'Format Database', link: '/documentation/database-format/' },
            { text: 'Naming Convention', link: '/documentation/naming-convention/' },
            { text: 'Conventional Commits', link: '/documentation/conventional-commits/' },
            { text: 'Penggunaan JetBrains IDE', link: '/documentation/jetbrains-ide/' }
          ]
        },
        {
          text: 'Cheet Sheet',
          items: [
            { text: 'Linux Command', link: '/documentation/cheatset/linux-command'}
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
