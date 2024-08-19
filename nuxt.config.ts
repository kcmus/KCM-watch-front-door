import runtimeConfig from "./nuxt.runtimeConfig";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig,


  app: {
    head: {
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous",
        },
        {
          rel: "apple-touch-icon",
          href: "https://kcm-www.s3.amazonaws.com/production/s3fs-public/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
          href: "https://kcm-www.s3.amazonaws.com/production/s3fs-public/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
          href: "https://kcm-www.s3.amazonaws.com/production/s3fs-public/favicons/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
          href: "https://kcm-www.s3.amazonaws.com/production/s3fs-public/favicons/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "https://kcm-www.s3.amazonaws.com/production/s3fs-public/favicons/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "https://kcm-www.s3.amazonaws.com/production/s3fs-public/favicons/safari-pinned-tab.svg",
        },
      ],
      
    },
  },

  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
      "~/components",
    ],
  },

  // Add Bootstrap CSS
  css: [
    'bootstrap/dist/css/bootstrap.css',
    './assets/styles/main.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    "~/assets/scss/main.scss"
    
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_globals.scss" as *;',
        },
      },
    },
  },

  // Register Bootstrap JS plugin
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ]

})
