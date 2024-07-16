<script setup >
const timeline = [
  {year : 'July 2016 - July 2023', title : "Started my university life", description : "I started my college at my hometown city named Jember University, yes it was late graduation for me but thank god i graduated"},
  {year : 'November 2019 - April 2020', title : "Internship and Probation", description : "It was a mandatory internship for my college program but Matata Edu was so kind to giving me probation"},
  {year : 'May 2020 - Present', title : "Fulltime Worker", description : "Before my probation end i got my first fulltime offering letter from my current company and started to working there as their Junior Programmer"},
]
</script>

<template>
    <section>
      <div class="grid gap-x-8 grid-cols-2 h-screen">
        <div class="snap-center">
          <ol class="relative border-s border-gray-100 dark:border-gray-700">
            <li class="ms-4 mb-4" v-for="item in timeline">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{item.year}}</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{item.title}}</h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{item.description}}</p>
            </li>
          </ol>
        </div>
        <div>
          <h1 class="text-4xl font-bold">Introducing , me!</h1>
          <p class="mt-5">I was born at Jember East Java Indonesia on first August 1997. <br>
            Technology was my first interest in my life, i started operating personal computer at 10 playing "Game House's" games.
            <br>
            My first programming language was C# and Javascript through Unity 4, and i keep following and playing around with unity until now.
            <br> After that i decided to get my Computer Science degree and work on a startup company called PT Matata Edukasi Inovasi.
            <br> And that's how is my career begin!
          </p>
        </div>
      </div>
    </section>
</template>

<style scoped>

</style>