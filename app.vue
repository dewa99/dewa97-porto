<template>
  <Navbar/>
  <Sidebar/>
  <Main/>
</template>
<script setup>
  import Navbar from "~/components/Navbar.vue";
  import { onMounted } from 'vue'
  import { useFlowbite } from '/composables/useFlowbite';
  import Main from "~/components/Main.vue";
  useHead({
    title : "Dewa - Porto",
    link : [{rel : "icon" , type : "image/png", href : "dewanobg.png"}],
    bodyAttrs : {
      class : 'bg-gray-200'
    }
  })
  // initialize components based on data attribute selectors
  onMounted(() => {
    useFlowbite(() => {
      initFlowbite();
    })
  })

</script>
<style>
html{
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
}
</style>