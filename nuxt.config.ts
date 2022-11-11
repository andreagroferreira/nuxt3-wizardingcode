// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@formkit/nuxt',
        '@pinia/nuxt',
        "nuxt-lodash"
    ],
    build: {
        transpile: ['@headlessui/vue'],
    },
    vueuse: {
        ssrHandlers: true,
    },
})
