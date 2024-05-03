// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false},
  modules: ["@nuxt/ui", "@nuxt/image"],
   render: {
    ssr: false // Disable server-side rendering (SSR)
  },
  colorMode: {
    preference: 'light'
  }
})