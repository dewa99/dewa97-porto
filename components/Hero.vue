
<script setup >



function select(item)
{
  selected.value = item;
  console.log(selected.value)
}


</script>

<template>
  <section>
    <div class="lg:grid lg:grid-cols-2 sm:flex sm:flex-col sm:gap-3  h-screen  items-center " >
      <div >
        <h1 class="lg:text-4xl sm:text-3xl font-bold sm:hidden lg:block ">Dewa Gede <br> Ardi Cahya <br> Putra</h1>
        <h1 class="lg:text-4xl sm:text-3xl font-bold mt-12 lg:hidden sm:block">Dewa Gede Ardi Cahya  Putra</h1>
        <strong class="text-xl">Software Engineer</strong>
        <p class="mt-3 ">Introducing myself <br> as an expert (it's not) Software Engineer
          <br> from Jember East Java Indonesia <br>
          with 4 years experience as Software Engineer both <br>
          <strong>Fullstack Web Devs</strong> and <strong>Unity Devs</strong>
        </p>
      </div>
      <div class="flex sm:order-first lg:order-last">
        <img src="../public/dewanobg.png" alt="" class="lg:-translate-y-12 lg:ml-auto sm:w-64 lg:w-96">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>