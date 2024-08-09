<script setup >
const menu = [
  {
    url : '/',
    icon : "ic:baseline-home",
    title : "Home",
  },
  {
    url : '#web',
    icon : "ic:baseline-web",
    title : "Web Apps",
  },
  {
    url : '#games',
    icon : "ic:baseline-videogame-asset",
    title : "Games",
  },
  {
    url : '#backend',
    icon : "ic:baseline-cloud",
    title : "Backend and Server",
  },
  {
    url : '/cv',
    icon : "ic:outline-file-present",
    title : "CV",
  },
  // {
  //   url : '',
  //   icon : "ic:baseline-blender",
  //   title : "3D Modelling",
  // },

]
</script>

<template>
<nav class="fixed h-20 lg:w-full sm:w-screen items-center text-gray-700 flex flex-row gap-4  max-h-32 z-10">
  <div class="text-center font-black text-2xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent p-5">
    <span>DewZ</span>
  </div>
  <div class="font-semibold lg:ml-64 sm:ml-auto sm:max-w-screen sm:pr-4 ">
    <span class="inline-flex gap-1 items-center"> <Icon name="mdi:gmail" class="text-xl"/> dodeardi@gmail.com</span>
  </div>
  <div class="grow lg:block sm:hidden">
    <div class="flex flex-row justify-end mr-6 gap-5">
      <div v-for="item in menu">
        <a :href="item.url" class="flex items-center gap-1 transition-all duration-300"> <Icon :name="item.icon" /> <span>{{item.title}}</span></a>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>