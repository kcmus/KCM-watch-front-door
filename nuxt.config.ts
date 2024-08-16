import runtimeConfig from "./nuxt.runtimeConfig";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig,

  // Add Bootstrap CSS
  css: [
    'bootstrap/dist/css/bootstrap.css',
    './assets/styles/main.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    
  ],

  // Register Bootstrap JS plugin
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ]

 
})
