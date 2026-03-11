<template>
    <footer class="bg-gradient-to-b from-wilton-blue to-wilton-navy py-6">
        <!-- three divs -->
         <div class="">
            <!-- first div -->
             <div class="">
                <!-- four sections -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
                    <!-- first section -->
                    <div class="">
                        <!-- logo and desc -->
                         <div class="max-w-md flex flex-col gap-4">
    
                            <div class="">
                                <img 
                                    src="/Wilton Technologies Navy blue horizontal-01.png"
                                    alt="footer-image"
                                    class="block w-52 mb-1"
                                    >
                            </div>

                            <div class="">
                                <p class="text-white text-sm leading-relaxed">
                                    Empowering businesses through innovative technology,
                                    creative design, and reliable digital solutions that
                                    drive growth and long-term success.
                                </p>
                            </div>

                            <!-- social media -->
                            <div class="flex items-center justify-center gap-2">
                                
                                <!-- facebook -->
                                <div class="rounded-full invert p-2 bg-gray-200">
                                    <img src="/facebook.png" alt="facebook" class="w-5 h-5">
                                </div>

                                <!-- linkedin -->
                                <div class="rounded-full invert p-2 bg-gray-200">
                                    <img src="/linkedin(1).png" alt="linkedin" class="w-5 h-5">
                                </div>

                                <!-- twitter -->
                                <div class="rounded-full invert p-2 bg-gray-200">
                                    <img src="/twitter.png" alt="twitter" class="w-5 h-5">
                                </div>

                                <!-- tiktok -->
                                <div class="rounded-full invert p-2 bg-gray-200">
                                    <img src="/tik-tok.png" alt="tiktok" class="w-5 h-5">
                                </div>

                                <!-- instagram -->
                                <div class="rounded-full invert p-2 bg-gray-200">
                                    <img src="/instagram.png" alt="instagram" class="w-5 h-5">
                                </div>

                            </div>

                        </div>
                    </div>
                    <!-- second section -->
                    <div class="">
                        <h3 class="text-white font-medium mb-2 underline">Quick Links</h3>
                        <nav class="flex flex-col gap-4 text-white">
                            <a class="hover:text-wilton-gray w-fit" href="#">Home</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">About</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">Services</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">Portfolio</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">Contact</a>
                        </nav>
                    </div>
                    <!-- third section -->
                    <div class="">
                        <h3 class="text-white font-medium mb-2 underline">Our Services</h3>
                        <nav class="flex flex-col gap-4 text-white">
                            <a class="w-fit hover:text-wilton-gray" href="#">Software Development</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">Mobile & Web Apps</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">Website Design</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">Branding & Design</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">Social Media</a>
                            <a class="w-fit hover:text-wilton-gray" href="#">Digital Marketing</a>
                        </nav>
                    </div>
                    <!-- fourth section -->
                    <div class="">
                        <h3 class="text-white font-medium mb-2 underline">Contact Us</h3>
                        <div class="flex flex-col space-y-2 text-white">
                            <p>Nairobi, Kenya</p>
                            <p>+254 XXX XXX XXX</p>
                            <p>info@wiltontechnologies.com</p>
                        </div>
                    </div>
                </div>
            </div>
             <!-- divider -->
              <div class="bg-wilton-gray mt-2 mb-2 h-px"></div>
              <!-- last div -->
               <div class="p-4">
                <!-- newsletter -->
                <div class=""></div>
                <!-- copyright -->
                 <div class="flex items-center gap-1">
                    <img src="/copyright.png" alt="copyright" class="invert w-4">
                    <p class="text-white">{{currentYear}} Wilton Technologies. All rights reserved.</p>
                 </div>
               </div>
         </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    },

    methods: {}
}
</script>
