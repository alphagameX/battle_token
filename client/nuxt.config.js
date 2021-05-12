export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BattleToken',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { hid: 'fontawesome', src: 'https://kit.fontawesome.com/1cad8970fa.js', defer: true }
    ]
  },

  env: {
    PUSHER_ID: '0d5e5a271bec9e219e2f',
    SERVER_URL: "http://localhost/"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/vuesax.css'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuesax.js',
    { src: '~/plugins/websocket.js', mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/',
    { path:  '~/components/Global', prefix: 'Global' },
    { path:  '~/components/Card', prefix: 'Card' },
    { path:  '~/components/Dashboard', prefix: 'Dashboard' },
    { path:  '~/components/Home', prefix: 'Home' },
    { path:  '~/components/Match', prefix: 'Match' },
    { path:  '~/components/Popup', prefix: 'Popup'},
    { path:  '~/components/Swiper', prefix: 'Swiper'},
    { path:  '~/components/Tutorial', prefix: 'Tutorial'}
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  axios: {
    baseURL: "http://localhost/api",
    progress: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      "plugins": [
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
      ]
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      },
      loaders: {
        vue: {
          prettify: false 
        }
      }
    }
  }
}
