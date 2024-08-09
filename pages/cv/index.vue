<script setup lang="ts">

</script>

<template>
  <section id="cv" class="text-gray-700 p-12 flex">
    <div class="w-[770px] h-[1300px] max-w-[970px]  max-h-[1300px] grow bg-white mx-auto" ref="pdfSection">
      <div class=" p-24 divide-y">
<!--        header-->
        <div class="grid grid-cols-2 divide-x pb-5">
          <div class="flex flex-col text-center gap-4">
            <h1 class="font-bold text-3xl tracking-wide">DEWA GEDE ARDI <br> CAHYA PUTRA</h1>
            <hr class="w-[95%] mr-auto p">
            <h6 class="tracking-widest font-semibold">SOFTWARE ENGINEER</h6>
            <div class="flex flex-wrap gap-3 justify-center">
              <span class="inline-flex items-center gap-2"><Icon name="ic:baseline-email"/>dodeardi@gmail.com</span>
              <span class="inline-flex items-center gap-2"><Icon name="ic:baseline-local-phone"/>+6289682305042</span>
              <span class="inline-flex items-center gap-2"><Icon name="ic:baseline-location-on"/>Jember, East Java, Indonesia</span>
            </div>
          </div>
          <div class="flex flex-col ps-5 justify-evenly">
            <h1 class="font-semibold text-xl tracking-widest">ABOUT ME</h1>
            <p>As a versatile Full-Stack Developer and Unity Game Programmer, I bring a proven track record of creating engaging gaming experiences and robust web applications. My expertise includes proficiency in Unity, C#, Laravel, Vue.js, and Nuxt.js, allowing me to deliver high-quality solutions that captivate users and drive results.</p>
          </div>
        </div>
<!--        header-->
        <div class="flex flex-row pt-5 divide-x gap-12">
          <div class="flex flex-col basis-1/4 gap-3">
            <div class="py-6">
              <h1 class="font-semibold text-xl tracking-widest pb-3">EDUCATION</h1>
              <h3 class="font-semibold">BACHELOR OF COMPUTER SCIENCE</h3>
              <span>Jember University, Jember 2023</span>
            </div>
            <hr>
            <div class="flex flex-col py-3">
              <h1 class="font-semibold text-xl tracking-widest pb-5">SKILLS</h1>
              <div class="flex flex-wrap gap-3">
                <span class="border p-3">Unity Engine</span>
                <span class="border p-3">C#</span>
                <span class="border p-3">Unity Game Service</span>
                <span class="border p-3">PHP / Laravel</span>
                <span class="border p-3">Vue JS</span>
                <span class="border p-3">Nuxt JS</span>
                <span class="border p-3">Node JS</span>
              </div>
            </div>
            <div class="flex flex-col">
              <h1 class="font-semibold text-xl tracking-widest pb-5">LINKS</h1>
              <div class="flex flex-col gap-2">
                <label>LinkedIn : </label>
                <a href="https://www.linkedin.com/in/dewag97/">https://www.linkedin.com/in/dewag97/</a>
              </div>
              <div class="flex flex-col gap-2 mt-3">
                <label>Portofolio : </label>
                <a href="https://dewa97.vercel.app">https://dewa97.vercel.app</a>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3 ps-8 basis-3/4">
            <div class="py-6 ">
              <h1 class="font-semibold text-xl tracking-widest pb-3">WORK EXPERIENCES</h1>
              <h3 class="font-semibold">LECTURER PRACTICUM ASSISTANT</h3>
              <i>Computer Science Faculty, Jember University | Jember | Feb 2018 - Feb 2019</i>
              <ul class="list-disc list-inside mt-3">
                <li>Assisted in multiple programming classes, including Object-Oriented Programming, OpenGL Programming, and Web Development, enhancing student learning and engagement.</li>
                <li>Facilitated programming classes for enhanced student success.</li>
                <li>Boosted student comprehension in Object-Oriented and Web Development.</li>
                <li>Elevated learning experiences through practical OpenGL projects.</li>
              </ul>
            </div>
            <div class="py-6 ">
              <h3 class="font-semibold">PART TIME TUTOR</h3>
              <i>Kode Koding | Jember | Sep 2019 - Dec 2019</i>
              <ul class="list-disc list-inside mt-3">
                <li>Delivered engaging and hands-on instruction in Unity game development to high school students at MAN 1 Jember, ensuring a comprehensive understanding of programming concepts.</li>
                <li>Delivered engaging Unity tutoring to enhance student programming skills.</li>
                <li>Facilitated hands-on game development projects to boost learner engagement.</li>
                <li>Fostered a collaborative learning environment, increasing student confidence.</li>
              </ul>
            </div>
            <div class="py-6 ">
              <h3 class="font-semibold">FULLSTACK WEB AND GAME PROGRAMMER</h3>
              <i>PT Matata Edukasi Inovasi | Jakarta | Apr 2020  - Present</i>
              <ul class="list-disc list-inside mt-3">
                <li>Contributed to the development of diverse projects, including game development and backend systems. </li>
                <li>Proficient in Unity and C# scripting for dynamic game design. </li>
                <li>Experienced in API programming using PHP and JavaScript for seamless integration.</li>
                <li>Configured server for system deployement.</li>
                <li>Contributed to multiple successful project launches, driving team innovation and results.</li>
              </ul>
            </div>
            <hr>
            <div class="py-6 ">
              <h1 class="font-semibold text-xl tracking-widest pb-3">LANGUAGES</h1>
              <div class="flex gap-24">
              <h6>Bahasa Indonesia</h6>
              <h6>English</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
#cv {
  font-family: Raleway ;
}
</style>