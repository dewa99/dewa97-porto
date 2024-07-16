
<script setup >
const portofolio = [
  {img : 'luar_benteng_clas.png', title : "Bantu Belajar IPS - Ekspedisi Kaladuta" , category : "Mobile Game"},
  {img : 'slide1.png', title : "Bantu Belajar IPS - Ekspedisi Kaladuta" , category : "Mobile Game"},
  {img : 'slide2.png', title : "Bantu Belajar IPS - Ekspedisi Kaladuta" , category : "Mobile Game"},
  {img : 'slide3.png', title : "Bantu Belajar IPS - Ekspedisi Kaladuta" , category : "Mobile Game"},
]

const selected = ref(portofolio[0])
function select(item)
{
  selected.value = item;
  console.log(selected.value)
}


</script>

<template>
  <section>
    <div class="grid  grid-cols-2 h-screen  items-center " >
      <div class="snap-center">
        <h1 class="text-4xl font-bold">Dewa Gede <br> Ardi Cahya <br> Putra</h1>
        <strong class="text-xl">Software Engineer</strong>
        <p class="mt-3 ">Introducing myself <br> as an expert (it's not) Software Engineer
          <br> from Jember East Java Indonesia <br>
          with 4 years experience as Software Engineer both <br>
          <strong>Fullstack Web Programming</strong> and <strong>Unity Programming</strong>
        </p>
      </div>
      <div class="flex ">
        <img src="../public/dewanobg.png" alt="" class="-translate-y-12 ml-auto">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>