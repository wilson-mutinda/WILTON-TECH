<template>
    <div class="bg-gray-200 min-h-screen">
        <!-- header -->
         <HeaderPage />

         <!-- hero section (grey) -->

         <!-- services (grey) -->

         <!-- featured (wilton blue) -->

         <!-- contact (grey) -->
          <section class="py-12">
            <div class="container mx-auto px-4">
                <!-- two containers -->
                 <div class="flex items-cente justify-between flex-col md:flex-row gap-4">
                    <!-- left container -->
                     <div class="bg-white p-4 rounded-md shadow-md">
                        <h2 class="font-semibold mb-2">Let's Connect</h2>
                        <p>Need to talk to us? Reach out and let's discuss how we can bring your vision to life.</p>

                        <!-- contact icons -->
                         <div class="flex flex-col space-y-4 mt-4">

                            <!-- email -->
                             <div class="flex gap-1 items-center">
                                <img src="/envelope-solid-full.svg" alt="email" class="w-10">
                                <div class="">
                                    <h3 class="font-medium mb-1">Email</h3>
                                    <p class="text-sm">info@wiltontechnologies.com</p>
                                </div>
                             </div>

                             <div class="flex gap-1 items-center">
                                    <img src="/phone.png" alt="phone" class="w-10">
                                    <div class="">
                                        <h3 class="font-medium mb-1">Phone</h3>
                                        <p class="text-sm">+254 XXX XXX XXX</p>
                                    </div>
                                </div>

                                <div class="flex gap-1 items-center">
                                    <img src="/map-pin-house.png" alt="map" class="w-10">
                                    <div class="">
                                        <h3 class="font-medium mb-1">Location</h3>
                                        <p class="text-sm">Nairobi, Kenya</p>
                                    </div>
                                </div>
                         </div>
                     </div>
                     <!-- right container (form) -->
                      <div class="bg-white p-4 rounded-md shadow-md">
                        <h3 class="font-semibold mb-4">Send a Message</h3>
                        <form action="">
                            <!-- name and email -->
                             <div class="flex flex-col md:flex-row gap-4">
                                <!-- name -->
                                 <div class="">
                                    <label class="block font-medium mb-2" for="name">Name</label>
                                    <input class="rounded-md outline-none ring-1 p-2 ring-wilton-blue w-full mb-2" type="text" name="name" id="name">
                                 </div>
                                 <!-- email -->
                                  <div class="">
                                    <label class="font-medium block mb-2" for="email">Email</label>
                                    <input class="rounded-md outline-none ring-1 p-2 ring-wilton-blue w-full mb-2" type="email" name="email" id="email">
                                  </div>
                             </div>

                             <!-- service of interest -->
                              <div class="">
                                <label class="block font-medium mb-2" for="service">Service Interest</label>
                                <select class="rounded-md outline-none ring-1 p-2 ring-wilton-blue w-full mb-2" name="service" id="service">
                                    <option value="">Select service of interest</option>
                                    <option value="software-dev">Software Development</option>
                                    <option value="mobile-app">Mobile App Development</option>
                                    <option value="web-app">Web App Development</option>
                                    <option value="web-design">Website Design</option>
                                    <option value="branding">Branding & Design</option>
                                    <option value="social-media">Social Media</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                </select>
                              </div>
                              <!-- message -->
                               <div class="">
                                <label class="block mb-2 font-medium" for="message">Message</label>
                                <textarea class="rounded-md outline-none ring-1 p-2 ring-wilton-blue w-full mb-2" name="message" id="message" rows="4"></textarea>
                               </div>
                               <!-- submit button -->
                                <div class="">
                                    <button type="button" class="bg-wilton-blue w-full text-white p-2 font-semibold rounded-md mt-2 mb-2">
                                        Send Message
                                    </button>
                                </div>
                        </form>
                      </div>
                 </div>
            </div>
          </section>

         <!-- Footer -->
          <FooterPage />
    </div>
</template>

<script>
import FooterPage from '@/components/FooterPage.vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default {
    components: {
        HeaderPage,
        FooterPage
    }
}

</script>