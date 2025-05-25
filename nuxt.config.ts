// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            "Rubik Glitch": true,
            Poppins: true,
        },
    },
});

