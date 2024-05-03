// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false},
  modules: ["@nuxt/ui", "@nuxt/image"],
   ssr: false,
   target: 'static',
  routeRules:{
    '/':{prerender:true}
  }
})