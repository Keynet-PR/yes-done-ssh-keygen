// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "shadcn-nuxt",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode',
    "nuxt-auth-sanctum",
    "nuxt-lucide-icons",
    "nuxt-icons",
  ],

  colorMode: {
    classSuffix: ''
  },

  lucide: {
    namePrefix: 'Icon'
  },

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

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-10-16",
})