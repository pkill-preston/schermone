// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro:{
    devProxy: {
      host: 'localhost'
    }
  },
  ssr: false,
  imports: {
    autoImport: false
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    // timeline: {
    //   enabled: true
    // }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lucide-icons',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  lucide: {
    namePrefix: ""
  }
})