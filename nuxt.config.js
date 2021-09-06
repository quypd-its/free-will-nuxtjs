const env = require('./env');
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxtjs Free Will',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#41b883' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css'
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: `${env.appUrl}`,
    proxy: true,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/signin.php', method: 'POST', propertyName: 'access_token' },
          user: { url: '/api/get_own_info.php', method: 'GET', propertyName: false },
          logout: false
        },
        tokenName: 'X-Authorization'
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    plugins: [{ src: '~/plugins/auth.js', mode: 'client' }]
  },
  js: [
    '@/assets/css/bootstrap.min.js'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],
  // router: {
  //   middleware: ['auth']
  // },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    ['@nuxtjs/moment', ['ja']],
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Disallow: ''
    }]
  ],
  srcDir: 'src',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
