<template>
  <div class="bg-gray-100 min-h-full">

    <!-- header (blue) -->
     <HeaderPage />

    <!-- hero section (grey opacity) -->
     <section class="">
      <div class="mx-auto relative">


        <!-- bg image -->
         <img src="/coffeebeanworks-laptop-2017978.svg" alt="bg-image" class="w-full object-cover h-[400px]">

         <!-- dark overlay -->
          <div class="bg-wilton-navy opacity-50 absolute inset-0"></div>

          <!-- content -->
           <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h3 class="text-white font-bold text-4xl">About Us</h3>
            <p class="text-white mt-2 max-w-xl">Driving digital transformation with passion and integrity.</p>
           </div>
      </div>
     </section>

     <!-- our story section (blue) -->
      <section class="py-4">
        <div class="containe mx-auto px-4 bg-wilton-blue rounded-md shadow-md">
          <!-- left and right side -->
           <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <!-- left side -->
             <div class="bg-white rounded-md p-4">
              <h3 class="text-2xl font-bold mb-4">Our Story</h3>
              <p class="text-gray-800">Founded in 2025, Wilton Technologies began with a vision to bridge the gap 
                between innovative technology and real-world business needs. What started as a small team of passionate 
                developers has grown into a full-service digital solutions agency serving clients across the globe. <br> <br>
                We believe that technology should empower businesses, not complicate them. That's why we focus on delivering 
                solutions that are not only cutting-edge but also scalable, and aligned with your goals.
              </p>
             </div>
             <!-- right side -->
              <div class="bg-white rounded-md p-4">
                <img src="/Asset 4 (1).png" alt="">
              </div>
           </div>
        </div>
      </section>

      <!-- misson and vision section (grey) -->
       <section class="py-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 containe p-4 rounded-md shadow-md bg-white mx-auto px-4">
          <!-- mission card -->
           <div class="bg-wilton-blue rounded-md p-4">
            <!-- image -->
             <div class="bg-wilton-navy inline-flex rounded-full p-2 mb-2">
              <img src="/iconmonstr-target-3-240.png" alt="mision" width="40" class="invert">
             </div>
             <!-- mission info -->
              <div class="">
                <h3 class="font-semibold mb-2 text-white">Our Mission</h3>
                <p class="text-white">To empower businesses with innovative, reliable, and human-centered technology solutions 
                  that drive growth, efficiency, and lasting value.
                </p>
              </div>
           </div>
           <!-- vision card -->
            <div class="bg-wilton-blue rounded-md p-4">
              <!-- image -->
               <div class="bg-wilton-navy inline-flex rounded-full p-2 mb-2">
                <img src="/vision-svgrepo-com.svg" alt="vision" width="40" class="invert">
               </div>
               <!-- vision info -->
                <div class="">
                  <h3 class="font-semibold mb-2 text-white">Our Vision</h3>
                  <p class="text-white">To be the preferred digital partner for forward-thinking organizations, setting new standards in technology and design.</p>
                </div>
            </div>
        </div>
       </section>

       <!-- core values section (blue) -->
        <section class="py-10">
          <div class="bg-wilton-blue containe mx-auto px-4 rounded-md shadow-md p-4">
            <!-- title -->
             <h3 class="text-center text-white text-3xl font-medium">Our Core Values</h3>

             <!-- three core value cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
                <!-- excellence card -->
                 <div class="bg-white rounded-md p-4 shadow-md flex flex-col items-center text-center">
                  <!-- image -->
                   <div class="mb-2 bg-wilton-navy rounded-full p-2">
                    <img src="/award-quality-svgrepo-com.svg" alt="excel" width="40" class="invert">
                   </div>
                   <!-- info -->
                    <div class="">
                      <h3 class="mb-2 font-semibold text-xl">Excellence</h3>
                      <p class="text-gray-700">We strive for the highest quality in everything we do, from code to customer service.</p>
                    </div>
                 </div>
                 <!-- integrity card -->
                  <div class="bg-white rounded-md p-4 shadow-md flex flex-col items-center text-center">
                    <!-- image -->
                     <div class="mb-2 bg-wilton-navy rounded-full p-2">
                      <img src="/iconmonstr-shield-1-thin-240.png" alt="intgrity" width="40" class="invert">
                     </div>
                     <!-- info -->
                      <div class="">
                        <h3 class="mb-2 font-semibold text-xl">Integrity</h3>
                        <p class="text-gray-700">We are transparent, honest, and always do what&apos;s right for our clients.</p>
                      </div>
                  </div>
                  <!-- collaboration card -->
                   <div class="bg-white rounded-md p-4 shadow-md flex flex-col items-center text-center">
                    <!-- image -->
                     <div class="mb-2 bg-wilton-navy rounded-full p-2">
                      <img src="/iconmonstr-discord-4-240.png" alt="collaboration" width="40" class="invert">
                     </div>
                     <!-- info -->
                      <div class="">
                        <h3 class="mb-2 font-semibold text-xl">Collaboration</h3>
                        <p class="text-gray-700">We believe the best results come from working closely with our clients.</p>
                      </div>
                   </div>
              </div>
          </div>
        </section>

        <!-- team section (grey) -->
         <section class="py-8">
          <div class="containe mx-auto bg-white rounded-md p-4 shadow-md">
            <!-- title -->
             <div class="text-center">
              <h3 class="font-semibold text-3xl mb-2">Meet the Team</h3>
              <p class="mb-4">We&apos;re a diverse group of creatives, engineers, and strategists who are passionate about what we do.</p>
             </div>

             <!-- team cards -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto px-4">
                <!-- first card -->
                 <div class="bg-wilton-navy rounded-md flex flex-col items-center text-center">
                  <!-- image -->
                   <div class="mt-4">
                    <img src="/user.png" alt="user" width="200">
                   </div>
                   <!-- desc -->
                    <div class="">
                      <h3 class="text-white font-bold text-xl mb-2">Antony Muigai</h3>
                      <p class="text-wilton-blue font-semibold mb-2">CEO</p>
                    </div>
                 </div>
                 <!-- second card -->
                  <div class="bg-wilton-navy rounded-md flex flex-col items-center text-center">
                    <!-- image -->
                     <div class="mt-4">
                      <img src="/user.png" alt="user" width="200">
                     </div>
                     <!-- desc -->
                      <div class="">
                        <h3 class="text-white font-bold text-xl mb-2">Wilson Kilonzo</h3>
                        <p class="text-wilton-blue font-semibold mb-2">CTO</p>
                      </div>
                  </div>
              </div>
          </div>
         </section>

         <!-- CTA(let's create together) -->
          <section class="py-8">
            <div class="container mx-auto px-4 text-center bg-wilton-navy rounded-md shadow-md p-4 text-white space-y-3">
              <h3 class="font-semibold text-xl">Let's Create Something Great Together</h3>
              <p class="">Whether you have a project in mind or just want to say hello, we&apos;d love to hear from you.</p>
              <div class="">
                <a href="/contact-us" class="rounded-md bg-wilton-blue px-4 py-2 font-semibold">Contact Us</a href="/contact-us">
              </div>
            </div>
          </section>

     <!-- footer(blue) -->
      <FooterPage />
  </div>
</template>

<script>
import FooterPage from '@/components/FooterPage.vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  data () {
    return {
    }
  },

  components: {
    HeaderPage,
    FooterPage
  }
}
</script>