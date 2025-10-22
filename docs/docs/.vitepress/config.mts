import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "Typyn v1",
  description: "A lightweight, chainable TypeScript validation library for safe data parsing and schema enforcement.",
  lastUpdated: true,
  cleanUrls: true, 

  themeConfig: {
    // Navigation bar (top-right)
    logo: '/assets/logo.png',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Resources', link: '/resources/' }
    ],

    // Sidebar (left navigation, collapsible)
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
        collapsed: false, // Open by default
        items: [
          { text: 'Quick Start', link: '/' },
          { text: 'Why Typyn?', link: '/introduction/why-typyn' } // Separate page: introduction/why-typyn.md
        ]
      },
      {
        text: 'Primitives',
        link: '/primitives/',
        collapsed: false,
        items: [
          { text: 'String', link: '/primitives/string' }, // primitives/string.md
          { text: 'Number', link: '/primitives/number' }, // primitives/number.md
          { text: 'Boolean', link: '/primitives/boolean' }, // primitives/boolean.md
          { text: 'Literal', link: '/primitives/literal' }, // primitives/literal.md
          { text: 'Enum', link: '/primitives/enum' } // primitives/enum.md
        ]
      },
      {
        text: 'Composites',
        link: '/composites/',
        collapsed: false,
        items: [
          { text: 'Array', link: '/composites/array' }, // composites/array.md
          { text: 'Object', link: '/composites/object' }, // composites/object.md
          { text: 'Map', link: '/composites/map' }, // composites/map.md
          { text: 'Set', link: '/composites/set' } // composites/set.md
        ]
      },
      {
        text: 'Utilities',
        link: '/utilities/',
        collapsed: false,
        items: [
          { text: 'Optional', link: '/utilities/optional' }, // utilities/optional.md
          { text: 'Nullable', link: '/utilities/nullable' }, // utilities/nullable.md
          { text: 'Union', link: '/utilities/union' } // utilities/union.md
        ]
      },
      {
        text: 'Advanced',
        link: '/advanced/',
        collapsed: false,
        items: [
          { text: 'Date', link: '/advanced/date' }, // advanced/date.md
          { text: 'IP', link: '/advanced/ip' }, // advanced/ip.md
          { text: 'UUID', link: '/advanced/uuid' }, // advanced/uuid.md
          { text: 'File', link: '/advanced/file' } // advanced/file.md
        ]
      },
      {
        text: 'Examples & Guides',
        link: '/examples/',
        collapsed: false,
        items: [
          { text: 'Form Validation', link: '/examples/form-validation' }, // guides/form-validation.md
          { text: 'API Schemas', link: '/examples/api-schemas' }, // guides/api-schemas.md
          { text: 'Error Handling', link: '/examples/error-handling' } // guides/error-handling.md
        ]
      },
      {
        text: 'Performance',
        link: '/benchmarks/',
        collapsed: false,
        items: [
          { text: 'Results', link: '/benchmarks/results' }, // benchmarks/results.md
          { text: 'Methodology', link: '/benchmarks/methodology' } // benchmarks/methodology.md
        ]
      },
      {
        text: 'Resources',
        link: '/resources/',
        collapsed: false,
        items: [
          { text: 'Contributing', link: '/resources/contributing' }, // resources/contributing.md
          { text: 'Changelog', link: '/resources/changelog' } // resources/changelog.md
        ]
      }
    ],

    // Footer configuration
    footer: {
      message: '<a href="https://github.com/ManojKumar2920/typyn/blob/main/LICENSE">MIT Licensed</a> | Copyright © 2025 ManojKumar2920',
      copyright: 'Released under the MIT License.'
    },

    // Social links (e.g., in footer or nav)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ManojKumar2920/typyn' }
      // Add more: { icon: 'twitter', link: 'https://twitter.com/yourhandle' }
    ],

    // Search configuration (built-in)
    search: {
      provider: 'local' // Or 'algolia' for advanced search
    },

    // Edit link (points to GitHub)
    editLink: {
      pattern: 'https://github.com/ManojKumar2920/typyn/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // Carbon ads (optional, for sponsorship)
    carbonAds: {
      code: '', // Your Carbon code
      placement: ''
    }
  },

  // Vite bundler options (for custom plugins, etc.)
  vite: {
    optimizeDeps: {
      include: ['typyn'] // Ensure Typyn is optimized
    }
  }
})