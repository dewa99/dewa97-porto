<script setup >

const items = [
  {title : 'Bantukerja - bantukerja.com (2020 - 2024)',
    menu : 'Bantukerja',
    icon : 'bantukerja.png',
    url : 'https://bantukerja.com',
    description : 'Bantu Kerja is a web-based platform designed to prepare Indonesian youth (aged 14-24) for the workforce through project-based learning (Work-Based Learning). It offers a variety of learning modules and internship projects.',
    stacks : ['PHP','Laravel 6','Bootstrap', 'Jquery', 'Vue 2'],
    contribution : ['Creating notification system for user side','Admin dashboard backend','Subscription system and integrating payment gateway','User Realtime Chat'],
    images : ['bk/slide5.png','bk/slide1.png','bk/slide2.png','bk/slide3.png','bk/slide4.png']
  },
  {title : 'Bantubelajar Website - bantubelajar.co.id (2021 - 2024)',
    menu : 'Bantubelajar',
    icon : 'bantubelajar.png',
    url : 'https://bantubelajar.co.id',
    description : '\n' +
        '\n' +
        '    The Bantubelajar website is a platform that hosts games created by Matata. These games are built using WebGL technology, allowing them to be played directly in a web browser. Bantubelajar has implemented a subscription system. Users who do not subscribe cannot access the full content of the games (in-game content).',
    stacks : ['PHP','Laravel 7','Bootstrap', 'Jquery', 'WebGL'],
    contribution : ['Subscription system and integrating payment gateway','Creating admin dashboard backend','WebGL Content','Creating all the frontend'],
    images : ['bb/slide1.png','bb/slide2.png','bb/slide3.png','bb/slide4.png','bb/slide5.png']
  },
  {title : 'Klipingmu - klipingmu.com (2023 - 2024)',
    menu : 'Klipingmu',
    icon : 'klipingmu.png',
    url : 'https://klipingmu.com',
    description : 'Klipingmu is a news portal hub website that collects and displays the latest news from several prominent news portals, enabling readers to quickly grasp the day\'s top stories.',
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
  <div class="h-screen translate-y-7  flex flex-col ">
    <div class="w-full flex flex-col lg:gap-12 sm:gap-2">
      <h1 class="text-3xl font-bold text-right">Web Apps</h1>
      <nav class=" h-20 w-full  items-center text-gray-700 flex flex-row gap-4  max-h-32 z-10 rounded-3xl">
        <div class="grow">
          <div class="flex flex-row justify-center mr-6 gap-5">
            <div v-for="(item,index) in items">
              <button class="py-2 px-3 bg-gray-100  hover:bg-coffee-light rounded-2xl flex lg:flex-row sm:flex-wrap gap-2" @click="select(index)">
                <img :src="item.icon" alt="" class="h-7 w-7 rounded-lg object-contain sm:hidden lg:block"
                ><span>{{ item.menu}}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="grid lg:grid-cols-2 sm:gap-6 mt-5 ">
      <Carousel ref="carousel" :autoplay="2000" v-model="currentSlide" class="lg:hidden">
        <Slide v-for="slide in selected.images" :key="slide">
          <div class="carousel__item">
            <img :src="slide" alt="" class="object-cover">
          </div>
        </Slide>

      </Carousel>


      <div id="accordion-collapse" data-accordion="collapse" class="lg:hidden">
        <h2 id="accordion-collapse-heading-1">
          <button type="button" class="flex  justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>{{selected.title}}</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <h1 class="font-bold lg:text-2xl sm:text-xl">{{ selected.title }} <a :href="selected.url" target="_blank" class="hover:text-orange-600"><Icon name="ic:outline-arrow-outward"/></a>  </h1>
            <p>{{selected.description}} </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
            <span>Stacks</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <div class="lg:flex lg:flex-wrap sm:flex sm:flex-wrap lg:gap-5 sm:gap-1 ">
              <span class="bg-gray-300 lg:px-4 lg:py-2 sm:px-1 sm:mx-1 rounded-2xl" v-for="item in selected.stacks">{{ item }}</span>
            </div>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
            <span>Contributions</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <ul class="">
              <li v-for="item in selected.contribution" class="my-1">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>


      <div class="lg:flex flex-col gap-3 sm:hidden ">
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

      <div class="text-right lg:flex flex-col lg:gap-5 lg:ms-12 sm:gap-2 sm:hidden">
        <h1 class="font-bold lg:text-2xl sm:text-xl">{{ selected.title }} <a :href="selected.url" target="_blank" class="hover:text-orange-600"><Icon name="ic:outline-arrow-outward"/></a>  </h1>
        <p>{{selected.description}} </p>
        <h1 class="font-bold lg:text-2xl sm:text-xl">Stacks</h1>
        <div class="lg:flex lg:flex-wrap sm:flex sm:flex-wrap lg:gap-5 sm:gap-1 justify-end">
          <span class="bg-gray-300 lg:px-4 lg:py-2 sm:px-1 sm:mx-1 rounded-2xl" v-for="item in selected.stacks">{{ item }}</span>
        </div>
        <h1 class="font-bold lg:text-2xl sm:text-xl">Contributions</h1>
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
