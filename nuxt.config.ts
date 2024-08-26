

export default defineNuxtConfig({
  appId: "KCM-Watch-Front-Door",
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL || "https://api.kcmdev.org",
    apiToken: process.env.NUXT_API_TOKEN || "bc4edbae-3a39-40af-87e0-95066fd44a83",
    api2Url: process.env.NUXT_API2_URL || "https://local-api2.kcmtst.org",
    api2Token: process.env.NUXT_API2_TOKEN || "api2_870cd5ca72dccc78281a7ca4aa1b165c64387074248db652ebc10694848a",
    // public: {
    //   ssoRedirectUrl: process.env.NUXT_PUBLIC_SSO_REDIRECT_URL || "/volunteer-role-add",
    // },
  },


  app: {
    head: {
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" },
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
      // script: [
      //   {
      //     src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      //     integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
      //     crossorigin: "anonymous",
      //   },
      // ],
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
    './assets/scss/main.scss'
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
