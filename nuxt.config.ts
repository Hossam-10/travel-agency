export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@vee-validate/nuxt",
    "@nuxtjs/i18n",
  ],
  css: ["primeicons/primeicons.css", "@/assets/styles/main.scss"],
  primevue: {
    options: {
      theme: "none",
    },
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "ValidationForm",
      Field: "Field",
      ErrorMessage: "ErrorMessage",
    },
  },
  i18n: {
    locales: [
      { code: "ar", language: "ar", dir: "rtl" },
      { code: "en", language: "en", dir: "ltr" },
    ],
    defaultLocale: "en",
    strategy: "prefix",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
    vueI18n: "./i18n.config.ts",
  },
});