import postcssPresetEnv from 'postcss-preset-env'
import postcssEasingGradients from 'postcss-easing-gradients'
import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default {
  target: 'static',
  components: true,
  ssr: false,
  generate: {
    fallback: true,
  },
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
  },
  head: {
    title: 'ModernAmusement by Shady Tawfik',
    manifest: { name: 'ModernAmusement by Shady Tawfik', lang: 'en-EN' },
    meta: [
      { property: 'og:site_name', content: 'ModernAmusement by Shady Tawfik' },
      { name: 'og-type', property: 'og:type', content: 'ModernAmusement by Shady Tawfik' },
      {
        name: 'og:image',
        property: 'og:image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
      {
        name: 'image',
        property: 'image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
      // Twitter
      { name: 'twitter:site', content: '@nathan_tawfik' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:url',
        name: 'twitter:url',
        content: 'https://twitter.com/nathan_tawfik',
      },
      {
        name: 'twitter:title',
        name: 'twitter:title',
        content: 'ModernAmusement by Shady Tawfik',
      },
      {
        name: 'twitter:description',
        name: 'twitter:description',
        content: 'Sharing skills in the area of web development.',
      },
      {
        name: 'twitter:image',
        name: 'twitter:image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#526488' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-content-placeholders.js', '~/plugins/fontawesome.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', 'nuxt-purgecss', '@nuxtjs/i18n'],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    locales: [
      {
        code: 'en',
        name: 'En',
        code: 'en',
        iso: 'en-US',
        dir: 'ltr',
      },
      {
        code: 'de',
        name: 'De',
        code: 'de',
        iso: 'de-DE',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          // Header
          contactCTA: 'Contact',
          introHomepageSubheadline: 'Hi all. I am',
          introHomepage: 'Shady from Germany, Bielefeld.',
          introHomepageCopy: 'creative fullstack web developer',
          // Skills
          introHomepageSkillOne: '7 years of professional work experience.',
          introHomepageSkillTwo: 'Logical approach to problem solving is my passion.',
          introHomepageSkillThree: 'Code perfectionist in the best sense of the word.',
          introHomepageSkillFour: 'Intuitive - Strong perference for engaging UI.',
          introHomepageSkillFive: 'Code inclusive, effective, impactful products.',
          introHomepageSkillSix: 'Dynamic - Websites don´t have to be static.',
          // Mobile
          introHomepageMobile: 'Hi all. I am Shady from Germany, Bielefeld.',
          // Blog Preview
          homepageBlogHeadline: 'Latest Blog Posts',
          homepageBlogDescriptionShort:
            'Welcome to the best and latest news on Web development current by ModernAmusments.',
          homepageBlogDescriptionLong:
            'A constructive and inclusive blog for software developers. With you every step of your journey. On this blog I share tips and tricks, frameworks, projects, tutorials, etc. Make sure you subscribe to get the latest updates',
          // Footer
          footerHeadline: 'Let`s keep in touch!',
          footerCopy: 'Find me on any of these platforms, i respond 1-2 business days. Or simply write me an E-Mail.',
          footerLinkHeadline: 'OTHER RESOURCES',
          footerTermLink: 'Terms & Conditions',
          footerUseLinks: 'USEFUL LINKS',
          formMessage: 'Message',
          formRole: 'Your Role',
          formCancel: 'Cancel',
          formSend: 'Send',
        },
        de: {
          // Header
          contactCTA: 'Kontakt',
          introHomepageSubheadline: 'Hallo an alle, ich bin',
          introHomepage: 'Shady aus Deutschland, Bielefeld.',
          introHomepageCopy: 'kreativer Fullstack-Webentwickler',
          // Skills
          introHomepageSkillOne: '7 Jahre Berufserfahrung.',
          introHomepageSkillTwo: 'Logisches Herangehen an Problemlösungen',
          introHomepageSkillThree: 'Ein Perfektionist, wenn es um Code geht',
          introHomepageSkillFour: 'Intuitive Gestaltung mit einer Vorliebe für ansprechende UI',
          introHomepageSkillFive: 'Code für inklusive Produkte',
          introHomepageSkillSix: 'Dynamisch - Websites müssen nicht statisch sein.',
          // Mobile
          introHomepageMobile: 'Hallo zusammen. Ich bin Shady aus Deutschland, Bielefeld.',
          // Blog Preview
          homepageBlogHeadline: 'Neueste Blogbeiträge',
          homepageBlogDescriptionShort:
            'Willkommen zu den besten und neuesten Nachrichten über Web-Entwicklung aktuell von ModernAmusments.',
          homepageBlogDescriptionLong:
            'Ein konstruktiver und umfassender Blog für Softwareentwickler. Ich begleite dich bei jedem Schritt deiner Reise. In diesem Blog teile ich Tipps und Tricks, Frameworks, Projekte, Tutorials, etc. Abonnieren Sie diesen Blog, um die neuesten Updates zu erhalten',
          // Footer
          footerHeadline: 'Bleiben wir in Kontakt!',
          footerCopy:
            'Finden Sie mich auf einer dieser Plattformen, ich antworte innerhalb von 1-2 Werktagen. Oder schreiben Sie mir einfach eine E-Mail.',
          footerLinkHeadline: 'SONSTIGE RESSOURCEN',
          footerTermLink: 'Impressum & Datenschutz',
          footerUseLinks: 'NÜTZLICHE LINKS',
          // Form
          formMessage: 'Nachricht',
          formRole: 'DEINE ROLLE',
          formCancel: 'Abbrechen',
          formSend: 'Senden',
        },
      },
    },
  },
  /*
   ** Build configuration
   */

  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false,
          },
        }),
        'postcss-easing-gradients': postcssEasingGradients,
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  /*
   ** Custom additions configuration
   */
  // ? The content property: https://content.nuxtjs.org/configuration
  content: {
    dir: 'content',
  },
  tailwindcss: {
    viewer: false, // disabled because it causes `Error: Cannot find module 'tailwindcss/resolveConfig'`, fixed in https://github.com/nuxt-community/tailwindcss-module/pull/303
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false, // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    // ? Safelisting docs: https://purgecss.com/safelisting.html
    safelist: {
      // standard: [],
      deep: [/dark/, /light/, /btn/, /icon/, /main/],
      greedy: [/^card/, /image$/, /title$/, /^nuxt-content/, /code/, /pre/, /token/, /^vue-content-placeholders/],
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'light', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax',
      },
    },
  },
  pwa: {
    icon: {
      source: 'static/preview.png',
      filename: 'preview',
    },
    manifest: { name: 'ModernAmusement by Shady Tawfik', lang: 'en-EN' },

    meta: [
      { property: 'og:site_name', content: 'ModernAmusement by Shady Tawfik' },
      { name: 'og-type', property: 'og:type', content: 'ModernAmusement by Shady Tawfik' },
      {
        name: 'og:image',
        property: 'og:image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
      {
        name: 'image',
        property: 'image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
      // Twitter
      { name: 'twitter:site', content: '@nathan_tawfik' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:url',
        name: 'twitter:url',
        content: 'https://twitter.com/nathan_tawfik',
      },
      {
        name: 'twitter:title',
        name: 'twitter:title',
        content: 'ModernAmusement by Shady Tawfik',
      },
      {
        name: 'twitter:description',
        name: 'twitter:description',
        content: 'Sharing skills in the area of web development.',
      },
      {
        name: 'twitter:image',
        name: 'twitter:image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
    ],
  },
}
