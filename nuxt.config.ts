export default defineNuxtConfig({
  compatibilityDate: '2024-07-05',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      title: '월구독 CSO | monthlycso',
      titleTemplate: '%s | monthlycso',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0d1b2a' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Pretendard:wght@400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://monthlycso.com',
      contactFormUrl:
        process.env.NUXT_PUBLIC_CONTACT_FORM_URL ||
        'https://script.google.com/macros/s/AKfycbwgTgcBszQUekBPrc5FGwAnQJQXgbUAIZx57y4DLxnDqgdrLn1rbFa3g2jsZZHueP9VSQ/exec',
      ga4Id: process.env.NUXT_PUBLIC_GA4_ID || '',
      clarityId: process.env.NUXT_PUBLIC_CLARITY_ID || ''
    }
  },
  nitro: {
    preset: 'static'
  },
  typescript: {
    strict: true,
    typeCheck: false
  }
});
