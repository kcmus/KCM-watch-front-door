// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

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
