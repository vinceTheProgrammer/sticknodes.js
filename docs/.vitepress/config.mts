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
      { text: 'API Reference', link: '/reference/stickfigure' },
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
        }
      ],

      '/reference/': [
        {
          text: 'API',
          items: [
            { text: 'Stickfigure', link: '/reference/stickfigure' },
            { text: 'Project', link: '/reference/project' },
            { text: 'Movieclip', link: '/reference/movieclip' },
            { text: 'Skin', link: '/reference/skin' }
          ]
        },
        {
          text: 'File Format Specifications',
          items: [
            { text: 'nodes', link: '/reference/spec/nodes' },
            { text: 'stknds', link: '/reference/spec/stknds' },
            { text: 'nodemc', link: '/reference/spec/nodemc' },
            { text: 'snskin', link: '/reference/spec/snskin' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vinceTheProgrammer/sticknodes.js' }
    ],
  }
})
