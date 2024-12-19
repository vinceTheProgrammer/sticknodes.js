import { defineConfig } from 'vitepress'

const pkg = require('../../package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sticknodes.js",
  description: "Asset manipulation library for Stick Nodes",
  base: '/sticknodes.js/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/reference/spec/nodes' },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/vincetheprogrammer/sticknodes.js'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/vincetheprogrammer/sticknodes.js'
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        },
        {
          text: 'Stickfigures',
          items: [
            { text: 'Import', link: '/guide/import' },
            { text: 'Create', link: '/guide/create' },
            { text: 'Manipulate', link: '/guide/manipulate' },
            { text: 'Export', link: '/guide/export' }
          ]
        }
      ],

      '/reference/': [
        {
          text: 'File Format Specifications',
          items: [
            { text: 'nodes', link: '/reference/spec/nodes' },
            { text: 'stknds', link: '/reference/spec/stknds' },
            { text: 'nodemc', link: '/reference/spec/nodemc' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vinceTheProgrammer/sticknodes.js' }
    ],
  }
})