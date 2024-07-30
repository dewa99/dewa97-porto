<script setup >

const items = [
  {title : 'Bantukerja - bantukerja.com',
    menu : 'Bantukerja',
    icon : 'bantukerja.png',
    url : 'https://bantukerja.com',
    description : 'Bantu Kerja adalah platform berbasis web untuk membentuk kesiapan kerja generasi muda Indonesia (usia 14 - 24 tahun) lewat pembelajaran berbasis projek (Work-Based Learning) dengan berbagai modul belajar dan projek magang.',
    stacks : ['PHP','Laravel 6','Bootstrap', 'Jquery', 'Vue 2'],
    contribution : ['Creating notification system for user side','Admin dashboard backend','Subscription system and integrating payment gateway','User Realtime Chat'],
    images : ['bk/slide5.png','bk/slide1.png','bk/slide2.png','bk/slide3.png','bk/slide4.png']
  },
  {title : 'Bantubelajar Website - bantubelajar.co.id',
    menu : 'Bantubelajar',
    icon : 'bantubelajar.png',
    url : 'https://bantubelajar.co.id',
    description : 'Bantubelajar website adalah hub untuk games buatan matata yang dibuild untuk WebGL agar dapat dimainkan dalam browser. Bantubelajar website mengimplementasikan sistem berlangganan, pengguna yang tidak berlangganan tidak dapat membuka gamenya secara penuh (ingame content)',
    stacks : ['PHP','Laravel 7','Bootstrap', 'Jquery', 'WebGL'],
    contribution : ['Subscription system and integrating payment gateway','Creating admin dashboard backend','WebGL Content','Creating all the frontend'],
    images : ['bb/slide1.png','bb/slide2.png','bb/slide3.png','bb/slide4.png','bb/slide5.png']
  },
  {title : 'Klipingmu - klipingmu.com',
    menu : 'Klipingmu',
    icon : 'klipingmu.png',
    url : 'https://klipingmu.com',
    description : 'Klipingmu adalah website news portal hub yang mengumpulkan dan menampilkan berita - berita terbaru dari beberapa sumber portal terkemuka agar pembaca berita lebih dapat merangkum apa yang terjadi pada hari ini ',
    stacks : ['Javascript','Node JS','Express JS', 'Nuxt 3', 'Vue 3', 'Tailwind'],
    contribution : ['Creating REST API and scrapper worker','Frontend Slicing',"Almost everything u see in there it's basically made by me"],
    images : ['klipingmu/slide1.png','klipingmu/slide2.png','klipingmu/slide3.png','klipingmu/slide4.png','klipingmu/slide5.png']
  }
]

const selected = ref(items[0]);
const currentSlide = ref(0);

function slideTo(v)
{
  currentSlide.value = v;
  console.log(currentSlide.value)
}

function select(index)
{
  selected.value = items[index]
}

</script>

<template>
<section id="web">
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="w-full flex flex-col gap-12">
      <h1 class="text-3xl font-bold text-right">Web Apps</h1>
      <nav class=" h-20 w-full  items-center text-gray-700 flex flex-row gap-4  max-h-32 z-10 rounded-3xl">

        <div class="grow">
          <div class="flex flex-row justify-center mr-6 gap-5">
            <div v-for="(item,index) in items">
              <button class="py-2 px-3 bg-gray-100  hover:bg-coffee-light rounded-2xl flex flex-row gap-2" @click="select(index)">
                <img :src="item.icon" alt="" class="h-7 w-7 rounded-lg object-contain"
                ><span>{{ item.menu}}</span>
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
        <h1 class="font-bold text-2xl">{{ selected.title }}</h1>
        <p>{{selected.description}} </p>
        <h1 class="font-bold text-2xl">Stacks</h1>
        <div class="flex flex-wrap gap-5 justify-end">
          <span class="bg-gray-300 px-4 py-2 rounded-2xl" v-for="item in selected.stacks">{{ item }}</span>
        </div>
        <h1 class="font-bold text-2xl">Contributions</h1>
        <ul class="">
          <li v-for="item in selected.contribution">{{item}} -</li>
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
