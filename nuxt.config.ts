// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false},
  modules: ["@nuxt/ui", "@nuxt/image"],
  routeRules:{
    '/': {ssr:false}, //client side rendering
    '/ssr':{ssr:true}, // server side rendering
    '/isr':{isr:2300}, //increamental static rendering
    '/ssg':{prerender:true}
  }
})