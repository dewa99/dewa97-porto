<script setup >
const items = [
  {title : 'Bantukerja - bantukerja.com',
    menu : 'Bantukerja',
    url : 'https://bantukerja.com',
    description : 'Bantu Kerja adalah platform berbasis web untuk membentuk kesiapan kerja generasi muda Indonesia (usia 14 - 24 tahun) lewat pembelajaran berbasis projek (Work-Based Learning) dengan berbagai modul belajar dan projek magang.',
    stacks : ['PHP','Laravel 6','Bootstrap', 'Jquery', 'Vue 2'],
    contribution : ['Creating notification system for user side','Admin dashboard backend','Subscription system and integrating payment gateway','User Realtime Chat'],
    images : ['bk/slide5.png','bk/slide1.png','bk/slide2.png','bk/slide3.png','bk/slide4.png']
  }
]

const selected = ref(items[0]);
const currentSlide = ref(0);

function slideTo(v)
{
  currentSlide.value = v;
  console.log(currentSlide.value)
}
</script>

<template>
<section>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="w-full flex flex-col gap-12">
      <h1 class="text-3xl font-bold text-right">Web Apps</h1>
      <nav class=" h-20 w-full  items-center text-gray-700 flex flex-row gap-4  max-h-32 z-10 rounded-3xl">

        <div class="grow">
          <div class="flex flex-row justify-center mr-6 gap-5">
            <div >
              <button class="py-2 px-3 bg-gray-100  hover:bg-coffee-light rounded-2xl flex flex-row gap-2">
                <img src="../public/bantukerja.png" alt="" class="h-7 w-7 rounded-lg object-contain"
                ><span>Bantukerja</span>
              </button>
            </div>
            <div >
              <button class="py-2 px-3 bg-gray-100  hover:bg-coffee-light hover:bg-coffee-light rounded-2xl flex flex-row gap-2">
                <img src="../public/bantubelajar.png" alt="" class="h-7 w-7 rounded-lg object-contain"
                ><span>Bantubelajar</span>
              </button>
            </div>
            <div >
              <button class="py-2 px-3 bg-gray-100  hover:bg-coffee-light hover:bg-coffee-light rounded-2xl flex flex-row gap-2">
                <img src="../public/klipingmu.png" alt="" class="h-7 w-7 rounded-lg object-contain"
                ><span>Klipingmu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="grid grid-cols-2 mt-5 ">
      <div class="flex flex-col gap-3">
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" class=" rounded-2xl overflow-clip">
          <Slide v-for="slide in selected.images" :key="slide" >
            <div class="carousel__item h-full"><img :src="slide" alt="" class="h-full object-coverstatus"></div>
          </Slide>
        </Carousel>

        <Carousel
            id="thumbnails"
            :items-to-show="4"
            v-model="currentSlide"
            ref="carousel"
        >
          <Slide v-for="(slide,index) in selected.images" :key="slide" class="m-1 rounded-xl overflow-clip !w-full hover:scale-125 transition ease-in-out hover:z-50">
            <div class="carousel__item"  @click="slideTo(index)"><img :src="slide" alt=""></div>
          </Slide>
        </Carousel>
      </div>
      <div class="text-right flex flex-col gap-5 ms-12">
        <h1 class="font-bold text-2xl">Bantukerja - bantukerja.com</h1>
        <p>Bantu Kerja adalah platform berbasis web untuk membentuk kesiapan kerja generasi muda Indonesia (usia 14 - 24 tahun) lewat pembelajaran berbasis projek (Work-Based Learning) dengan berbagai modul belajar dan projek magang. </p>
        <h1 class="font-bold text-2xl">Stacks</h1>
        <div class="flex gap-5 justify-end">
          <span class="bg-gray-300 px-4 py-2 rounded-2xl">PHP</span>
          <span class="bg-gray-300 px-4 py-2 rounded-2xl">Laravel 6</span>
          <span class="bg-gray-300 px-4 py-2 rounded-2xl">Bootstrap</span>
          <span class="bg-gray-300 px-4 py-2 rounded-2xl">Jquery</span>
          <span class="bg-gray-300 px-4 py-2 rounded-2xl">Vue 2</span>

        </div>
        <h1 class="font-bold text-2xl">Contributions</h1>
        <ul class="">
          <li>Creating notification system for user side -</li>
          <li>Admin dashboard backend -</li>
          <li>Subscription system and integrating payment gateway -</li>
          <li>User Realtime Chat -</li>
        </ul>
      </div>
    </div>
  </div>

</section>
</template>
<style scoped>
:deep(#thumbnails  .carousel__track){
  display: grid ;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
}
</style>
