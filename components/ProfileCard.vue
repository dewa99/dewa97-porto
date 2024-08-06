<script setup >
const timeline = [
  {year : 'July 2016 - July 2023', title : "Started my University Life", description : "I started my college at my hometown city named Jember University, yes it was late graduation for me but thank god i graduated"},
  {year : 'November 2019 - April 2020', title : "Internship and Probation", description : "It was a mandatory internship for my college program but Matata Edu was so kind to giving me probation"},
  {year : 'May 2020 - Present', title : "Fulltime Worker", description : "Before my probation end i got my first fulltime offering letter from my current company and started to working there as their Junior Programmer"},
]
</script>

<template>
    <section>
      <div class="lg:grid lg:grid-rows-2 sm:flex sm:flex-col sm:gap-3 h-screen lg:items-center">
        <div class="flex lg:flex-row  sm:flex-col gap-3">
          <div class="my-auto ms-2">
            <h1 class="text-4xl font-bold">Introducing , me!</h1>
            <p class="mt-5 lg:pe-24 ">Born in Jember, East Java, Indonesia, in August 1997, I've always been captivated by technology. My journey began at age ten, experimenting with computers and playing games. I explored into programming with C# and JavaScript using Unity 4, a passion that continues to drive me. To further my knowledge, I pursued a Computer Science degree and working on a  startup called, PT Matata Edukasi Inovasi. This marked the beginning of my professional career.
            </p>
          </div>
          <img src="../public/man(1).png" alt="" class="max-w-48 ml-auto mr-4 sm:hidden lg:block">
        </div>
        <div class="mb-auto ms-1">
          <h1 class="text-2xl font-bold">Overall i'm proficient on</h1>
          <div class="flex flex-wrap mt-5 lg:gap-3 sm:gap-1">
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Unity / C#</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Laravel / PHP</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Node JS</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Nuxt JS</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Vue JS</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Express JS</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Tailwind</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Python Djago/Flask</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">MySQL</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Ubuntu Server</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Apache/Nginx</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">Redis</div>
            <div class="bg-gray-300 px-4 py-2 rounded-2xl">AWS Lightsail</div>
          </div>
        </div>

      </div>
    </section>
</template>

<style scoped>

</style>