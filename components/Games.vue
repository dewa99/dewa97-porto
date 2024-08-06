<script setup >

const items = [
  {title : 'Bantu Belajar IPS 7 - Ekspedisi Kaladuta',
    menu : 'Ekspedisi Kaladuta',
    icon : 'kaladuta.png',
    url : 'https://play.google.com/store/apps/details?id=com.MatataEdu.BBIPS7&hl=id',
    description : 'Bantu Belajar Series.\n' +
        'Ekspedisi Kaladuta is a Turn-Based RPG game set during the historical attack on Batavia by the Mataram Kingdom against the VOC in 1628-1629. This game is not limited to a specific age group as it aims to provide learning opportunities for students about the historical background of the event, the figures involved, and the situation in Batavia at that time, which is now known as Jakarta.\n',
    stacks : ['C#','Unity 2021', 'Blender', 'Substance Painter','PHP', 'MySQL'],
    contribution : ['3D Environment Designer and Optimizations','3D Character Modeller and Optimizations','Backend Data Transactions','Google Play Publish'],
    images : ['kaladuta/slide1.jpeg','kaladuta/slide2.png','kaladuta/slide3.png','kaladuta/slide4.png']
  },
  {title : 'Uprising War of Independence',
    menu : 'Uprising',
    icon : 'uprsing.jpg',
    url : 'https://play.google.com/store/apps/details?id=com.MatataEdu.Uprising',
    description : 'Uprising War of Independence is a mobile FPS game set during the Indonesian War of Independence. It features three historical locations: Yogyakarta Monument, Ambarawa Rural Area, and Hotel Oranje Surabaya. The game offers three modes: Team Deathmatch, Free for All, and Capture The Flag.',
    stacks : ['C#','Unity 2021','Blender', 'Substance Painter', 'Photon', 'PHP', 'MySQL'],
    contribution : ['Some 3D characters and maps modeller','Level designer','3D Optimizations','Backend deployment','Creating API for database integration'],
    images : ['uprising/slide1.png','uprising/slide2.png','uprising/slide3.png','uprising/slide4.png']
  },
  {title : 'Kaladuta Auto Battle',
    menu : 'Auto Battle',
    icon : 'autobattle.png',
    url : 'https://klipingmu.com',
    description : 'Kaladuta Expedition Autobattle is a strategy game set during the historical attack on Batavia, occupied by the VOC, by the Mataram Kingdom in 1628-1629. This game is not limited to a specific age group as it aims to provide learning opportunities for students about the historical background of the event, the figures involved, and the situation in Batavia at that time, which is now known as Jakarta.',
    stacks : ['C#','Unity 2021','Blender', 'Substance Painter', 'PHP', 'MySQL'],
    contribution : ['Creating all the 3d models','Creating the UI',"Backend integration"],
    images : ['autobattle/slide1.png','autobattle/slide2.png','autobattle/slide3.png','autobattle/slide4.png']
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
  <section id="games">
    <div class="h-screen translate-y-7  flex flex-col ">
      <div class="w-full flex flex-col lg:gap-12 sm:gap-2">
        <h1 class="text-3xl font-bold text-right">Games</h1>
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


        <div id="accordion" data-accordion="collapse" class="lg:hidden">
          <h2 id="accordion-games-1">
            <button type="button" class="flex  justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-games-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span>{{selected.title}}</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-games-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <h1 class="font-bold lg:text-2xl sm:text-xl">{{ selected.title }} <a :href="selected.url" target="_blank" class="hover:text-orange-600"><Icon name="ic:outline-arrow-outward"/></a>  </h1>
              <p>{{selected.description}} </p>
            </div>
          </div>
          <h2 id="accordion-games-2">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-games-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
              <span>Stacks</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-games-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <div class="lg:flex lg:flex-wrap sm:flex sm:flex-wrap lg:gap-5 sm:gap-1 ">
                <span class="bg-gray-300 lg:px-4 lg:py-2 sm:px-1 sm:mx-1 rounded-2xl" v-for="item in selected.stacks">{{ item }}</span>
              </div>
            </div>
          </div>
          <h2 id="accordion-games-3">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-games-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
              <span>Contributions</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-games-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}
</style>
