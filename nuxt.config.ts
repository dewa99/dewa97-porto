// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',

    devServer : {
        host : '0.0.0.0'
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: ['~/assets/css/main.css'],
    devtools: { enabled: true },
    modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
    fonts : {
        families : [
            {name : "Roboto", provider : 'google'}
        ],
        defaults : {
            weights : [100,400,500,600,700,800],
            fallbacks : {
                'serif' : ['Poppins'],
            }
        }
    }
})