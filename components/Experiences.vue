<script setup >
  const experiences = [
    {
      id : 1,
      years : '2020 - 2021',
      title : 'Developed bantukerja.com phase 2',
      description : "As a junior programmer for PT Matata Edukasi Inovasi i involved in the bantukerja project and mainly assisting the work of the head programmer to creating notification system and etc",
      stacks : 'PHP, Laravel 6, MySQL, Vue'
    },
    {
      id : 2,
      years : '2022',
      title : 'Developed and Released bantubelajar.co.id ',
      description : "I worked on paid WebGL game platform called bantubelajar.co.id. I've done creating subscription system, payment gateway integrations and Unity WebGL Integration on the platform and also the data transaction between games",
      stacks : 'PHP, Laravel 6, MySQL, Vue, Unity, Midtrans'
    },
    {
      id : 3,
      years : '2022',
      title : 'Developed and Released bantubelajar.co.id ',
      description : "I worked on paid WebGL game platform called bantubelajar.co.id. I've done creating subscription system, payment gateway integrations and Unity WebGL Integration on the platform and also the data transaction between games",
      stacks : 'PHP, Laravel 6, MySQL, Vue, Unity, Midtrans'
    },
    {
      id : 4,
      years : '2022',
      title : 'Developed and Released bantubelajar.co.id ',
      description : "I worked on paid WebGL game platform called bantubelajar.co.id. I've done creating subscription system, payment gateway integrations and Unity WebGL Integration on the platform and also the data transaction between games",
      stacks : 'PHP, Laravel 6, MySQL, Vue, Unity, Midtrans'
    },
    {
      id : 5,
      years : '2022',
      title : 'Developed and Released bantubelajar.co.id ',
      description : "I worked on paid WebGL game platform called bantubelajar.co.id. I've done creating subscription system, payment gateway integrations and Unity WebGL Integration on the platform and also the data transaction between games",
      stacks : 'PHP, Laravel 6, MySQL, Vue, Unity, Midtrans'
    }
  ]
</script>

<template>
  <div class="bg-gray-200  p-5 rounded-2xl flex flex-row gap-5 drop-shadow-2xl" v-for="item in experiences">
    <img src="../public/bantukerja.png" alt="" class="h-16  my-auto rounded-full">
    <div :id="'accordion-collapse'+item.id" data-accordion="collapse" class="grow transition ">
      <h2  >
        <button type="button" class="flex items-center justify-between w-full  p-5 font-medium  rounded-xl  gap-3" :data-accordion-target="'#description'+item.id" aria-expanded="false" :aria-controls="'description'+item.id">
          <span class="text-gray-700">{{item.title}}</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div :id="'description'+item.id" class="hidden" >
        <div class="pt-3 px-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <span>{{item.years}}</span>
          <p class="mb-2 text-gray-500 dark:text-gray-400">{{item.description}}</p>
          <span class="px-3 py-1 bg-gray-300 rounded-lg">{{item.stacks}}</span>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>