import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MolScience 文档',
  description: 'MolScience 文档中心',
  lang: 'zh-CN',

  themeConfig: {
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MolScience/molscience-docs' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present MolScience'
    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'MolScience 文档',
      description: 'MolScience 文档中心',

      themeConfig: {
        nav: [
          { text: '新人手册', link: '/handbook/' },
          { text: '文档规范', link: '/markdown-examples' }
        ],

        sidebar: {
          '/handbook/': [
            {
              text: 'MolScience 新人手册',
              items: [
                { text: '概览', link: '/handbook/' },
                { text: '从这里开始', link: '/handbook/start' },
                { text: 'GitHub 协作', link: '/handbook/github' },
                { text: '数据库指南', link: '/handbook/database' },
                { text: '化学基础', link: '/handbook/chemistry' },
                { text: '机器学习基础', link: '/handbook/machine-learning' },
                { text: '常见问题', link: '/handbook/faq' }
              ]
            }
          ]
        }
      }
    },

    en: {
      label: 'English',
      lang: 'en-US',
      title: 'MolScience Docs',
      description: 'Documentation for MolScience',

      themeConfig: {
        nav: [
          { text: 'Handbook', link: '/en/handbook/' },
          { text: 'Documentation Style', link: '/en/markdown-examples' }
        ],

        sidebar: {
          '/en/handbook/': [
            {
              text: 'MolScience Handbook',
              items: [
                { text: 'Overview', link: '/en/handbook/' },
                { text: 'Start Here', link: '/en/handbook/start' },
                { text: 'GitHub Guide', link: '/en/handbook/github' },
                { text: 'Database Guide', link: '/en/handbook/database' },
                { text: 'Chemistry Basics', link: '/en/handbook/chemistry' },
                { text: 'Machine Learning Basics', link: '/en/handbook/machine-learning' },
                { text: 'FAQ', link: '/en/handbook/faq' }
              ]
            }
          ]
        }
      }
    }
  }
})
