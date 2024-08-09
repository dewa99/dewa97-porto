
import VueHtml2pdf from 'vue3-html2pdf'

defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueHtml2pdf);
})
