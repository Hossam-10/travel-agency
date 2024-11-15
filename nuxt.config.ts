export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],
  css: ["primeicons/primeicons.css", "@/assets/styles/main.scss"],
  primevue: {
    options: {
      theme: 'none'
    },
  },
  i18n: {
    locales: [
      { code: "ar", language: "ar", dir: "rtl", name: 'العربية' },
      { code: "en", language: "en", dir: "ltr", name: 'English' },
    ],
    defaultLocale: "ar",
    strategy: "prefix",
    lazy: true,
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
});