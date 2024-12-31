import { defineConfig } from 'vitepress'

const pkg = require('../../package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SNDocs",
  description: "Asset manipulation library for Stick Nodes",
  base: '/sndocs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'SN Spec', link: '/spec/formats/nodes' },
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
      '/spec/': [
        {
          text: 'File Format Specifications',
          items: [
            { text: 'nodes', link: '/spec/formats/nodes' },
            { text: 'stknds', link: '/spec/formats/stknds' },
            { text: 'nodemc', link: '/spec/formats/nodemc' }
          ]
        },
        {
          text: 'Sub-format Specifications',
          items: [
            { text: 'Auto Camera', link: '/spec/subformats/auto_camera' },
            { text: 'Cached Movieclip', link: '/spec/subformats/cached_movieclip' },
            { text: 'Color', link: '/spec/subformats/color' },
            { text: 'Connection', link: '/spec/subformats/connection' },
            { text: 'Frame', link: '/spec/subformats/frame' },
            { text: 'ID Conversion Maps', link: '/spec/subformats/id_conversion_maps' },
            { text: 'Movieclip Frame', link: '/spec/subformats/movieclip_frame' },
            { text: 'Movieclip Library Data', link: '/spec/subformats/movieclip_library_data' },
            { text: 'Node', link: '/spec/subformats/node' },
            { text: 'Polyfill', link: '/spec/subformats/polyfill' },
            { text: 'RGB888', link: '/spec/subformats/rgb888' },
            { text: 'RGBA8888', link: '/spec/subformats/rgba8888' },
            { text: 'Session Save Data', link: '/spec/subformats/session_save_data' },
            { text: 'Sprite Group Source', link: '/spec/subformats/sprite_group_source' },
            { text: 'Sprite Source', link: '/spec/subformats/sprite_source' },
          ]
        },
        {
          text: 'Additional Information',
          items: [
            { text: 'Font Booleans', link: '/spec/additional_information/font_booleans' },
            { text: 'Node Types', link: '/spec/additional_information/node_types' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vinceTheProgrammer/sticknodes.js' }
    ],
  }
})