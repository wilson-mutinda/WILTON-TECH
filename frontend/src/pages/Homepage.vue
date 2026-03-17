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
                 <div class="flex items-center justify-between">
                    <!-- left container -->
                     <div class="bg-white p-2 rounded-md shadow-md">
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
                     <!-- right container -->
                      <div class=""></div>
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