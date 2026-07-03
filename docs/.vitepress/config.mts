import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MolScience Docs',
  description: 'Documentation for MolScience',

  themeConfig: {
    logo: 'https://s.guyue.me/img/icon_molscience.png',

    nav: [
      { text: 'Handbook', link: '/handbook/' },
      { text: 'Standards', link: '/standards/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'GitHub', link: 'https://github.com/MolScience' }
    ],

    sidebar: {
      '/handbook/': [
        {
          text: 'MolScience Handbook',
          items: [
            { text: 'Overview', link: '/handbook/' },
            { text: 'Start Here', link: '/handbook/start' },
            { text: 'GitHub Guide', link: '/handbook/github' },
            { text: 'Database Guide', link: '/handbook/database' },
            { text: 'Chemistry Basics', link: '/handbook/chemistry' },
            { text: 'Machine Learning Basics', link: '/handbook/machine-learning' },
            { text: 'FAQ', link: '/handbook/faq' }
          ]
        }
      ],

      '/standards/': [
        {
          text: 'Standards',
          items: [
            { text: 'Overview', link: '/standards/' },
            { text: 'Molecule Data Standard', link: '/standards/molecule-data' }
          ]
        }
      ],

      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Overview', link: '/guides/' },
            { text: 'Literature Review', link: '/guides/literature-review' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MolScience' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present MolScience'
    }
  }
})
