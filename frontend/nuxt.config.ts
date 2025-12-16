// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s | ' + process.env.SITE_NAME,
      title: process.env.SITE_NAME
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  runtimeConfig: {
    public: {
      GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN,
      CRAFT_URL: process.env.CRAFT_URL,
      BASE_URL: process.env.BASE_URL,
      SITE_NAME: process.env.SITE_NAME
    }
  },
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        host: process.env.BASE_URL?.replace('https://', ''),
        port: 3000
      },
      allowedHosts: [
        'starter-nuxt.ddev.site',
        '.ddev.site'
      ]
    }
  },
  nitro: {
    devServer: {
      watch: ['./server']
    }
  },
  modules: ['@nuxtjs/i18n'],
})