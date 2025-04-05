import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: pkg.name,
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover'
        },
        { name: 'description', content: pkg.version }
      ]
    }
  },
  ssr: false, // for netlify deploy
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/motion/nuxt',
    '@tresjs/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: [300, 400, 500, 700],
          Fraunces: [400, 700, 900, '900i'],
          'IBM Plex Mono': [400, 500, 600],
          VT323: [400]
        }
      }
    ]
  ],
  content: {
    documentDriven: true
  },
  runtimeConfig: {
    // add the openai api key to the runtime config
    public: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      PRODUCTION: process.env.PRODUCTION
    }
  }
})
