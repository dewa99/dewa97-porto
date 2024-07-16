<script setup >
const menu = [
  {
    url : '',
    icon : "ic:baseline-home",
    title : "Home",
  },
  {
    url : '',
    icon : "ic:baseline-web",
    title : "Web Apps",
  },
  {
    url : '',
    icon : "ic:baseline-videogame-asset",
    title : "Games",
  },
  {
    url : '',
    icon : "ic:baseline-cloud",
    title : "Backend and Server",
  },
  // {
  //   url : '',
  //   icon : "ic:baseline-blender",
  //   title : "3D Modelling",
  // },

]
</script>

<template>
<nav class="fixed h-20 w-full items-center text-gray-700 flex flex-row gap-4  max-h-32 z-10">
  <div class="font-semibold ml-64">
    <span class="inline-flex gap-1 items-center"> <Icon name="mdi:gmail" class="text-xl"/> dodeardi@gmail.com</span>
  </div>
  <div class="grow">
    <div class="flex flex-row justify-end mr-6 gap-5">
      <div v-for="item in menu">
        <a :href="item.url" class="flex items-center gap-1"> <Icon :name="item.icon" /> <span>{{item.title}}</span></a>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>