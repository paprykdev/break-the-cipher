import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: ['@nuxtjs/google-fonts', '@nuxt/ui'],
    css: ['assets/css/main.css'],
    googleFonts: {
        families: {
            'Rubik Glitch': true,
            Poppins: true,
        },
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
