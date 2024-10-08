// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: '台北景點之眼',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: '文化時空隧道'
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' }
      ]
    },
  },
  devtools: { enabled: false },
  devServer: {
    host: '0.0.0.0', // 监听所有接口，包括 127.0.0.1
    port: 3000
  },
  runtimeConfig: {
    public: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      GEMINI_API_KEY: process.env.GEMINI_API_KEY,
      AZURE_API_KEY: process.env.AZURE_API_KEY,
      AZURE_ENDPOINT: process.env.AZURE_ENDPOINT,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
    }
  }
})
