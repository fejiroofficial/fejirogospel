export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Fejiro Gospel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `I’m a frontend developer and user interface designer from Lagos,
      Nigeria. I’m founder, Jiro Tech, a media technology company providing solutions
      for Africa's movie industry with it's flagship brand yet to be piloted. I am very passionate about working with startups. Though a frontend
      developer, with my knowledge of backend technologies, I can be fullstack
      every once in a while.`,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faviconWhite.svg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sail&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '@/plugins/antd-ui',
    '@/plugins/sanity-blocks.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/sanity',
    '@nuxtjs/axios',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    '@nuxtjs/sanity',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*',
      },
    },
  },
}
