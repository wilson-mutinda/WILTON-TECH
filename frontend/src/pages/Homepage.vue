<template>
    <div class="bg-gray-200 min-h-screen">
        <!-- header -->
         <HeaderPage />

         <!-- hero section (grey) -->
          <section class="">
            <div class="mx-auto relative">
                <img src="/creativity-post.jpg" alt="creativity" class="w-full h-[600px] object-cover rounded-md bg-black/50">
                <!-- dark overlay -->
                 <div class="absolute bg-black inset-0 opacity-80"></div>

                 <!-- hero section overlay -->
                  <div class="absolute inset-0 top-28 container px-4 mx-auto space-y-20">
                    <div class="flex flex-col max-w-2xl gap-4">
                        <h3 class="text-white font-bold text-5xl">Empowering Businesses Through Innovative Technology</h3>
                        <p class="text-white">Trusted global digital solutions partner delivering excellence in software development, impactful branding, 
                            and transformative technology-driven experiences.
                        </p>
                    </div>
                    <!-- Hero CTA -->
                     <div class="mt-5 flex gap-4">
                        <button class="rounded-md px-4 py-2 bg-wilton-blue text-white font-medium">
                            Explore Services
                        </button>
                        <button class="rounded-md text-white font-medium ring-1 ring-white px-4 py-2">
                            Contact Us
                        </button>
                     </div>
                  </div>
            </div>
          </section>

         <!-- services (grey) -->
          <section class="py-8">
            <div class="container mx-auto px-4">
                <!-- title -->
                 <div class="flex flex-col text-center space-y-3">
                    <h3 class="font-bold text-3xl">Our Services</h3>
                    <p class="text-gray-700">Comprehensive digital solutions tailored to drive growth and 
                        efficiency for your business.
                    </p>
                 </div>

                 <!-- service containers -->
                  <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">

                    <!-- software dev -->
                     <div class="bg-white p-4 rounded-md">
                        <!-- icon -->
                         <div class="inline-flex rounded-md bg-wilton-blue p-2">
                            <img src="/iconmonstr-code-thin-240.png" alt="code-icon" width="30" class="invert">
                         </div>

                         <div class="space-y-1 mt-2">
                            <!-- title -->
                            <h3 class="font-semibold">Software Development</h3>
                            <p class="text-gray-500">Custom software, enterprise SaaS solutions, 
                                system integration, and cloud solutions tailored 
                                to your business needs.
                            </p>
                         </div>

                          <!-- CTA -->
                           <div class="flex items-center mt-2 p-2 text-wilton-blue font-medium">
                            <button>Learn More</button>
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                           </div>
                     </div>

                     <!-- mobile and web apps -->
                      <div class="bg-white p-4 rounded-md">
                        <!-- icon -->
                         <div class="inline-flex rounded-md bg-wilton-blue p-2">
                            <img src="/iconmonstr-smartphone-1-240.png" alt="code-icon" width="30" class="invert">
                         </div>

                         <div class="space-y-1 mt-2">
                            <!-- title -->
                            <h3 class="font-semibold">Mobile & Web Apps</h3>
                            <p class="text-gray-500">Anroid/iOS apps, cross-platform solutions, and web applications for business operations and e-commerce.
                            </p>
                         </div>

                          <!-- CTA -->
                           <div class="flex items-center mt-2 p-2 text-wilton-blue font-medium">
                            <button>Learn More</button>
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                           </div>
                     </div>

                      <!-- web design & maintainance -->
                       <div class="bg-white p-4 rounded-md">
                        <!-- icon -->
                         <div class="inline-flex rounded-md bg-wilton-blue p-2">
                            <img src="/iconmonstr-computer-10-240.png" alt="code-icon" width="30" class="invert">
                         </div>

                         <div class="space-y-1 mt-2">
                            <!-- title -->
                            <h3 class="font-semibold">Web Design & Maintainance</h3>
                            <p class="text-gray-500">Professional business websites, e-commerce stores, web portals, and ongoing 
                                maintainance & security.
                            </p>
                         </div>

                          <!-- CTA -->
                           <div class="flex items-center mt-2 p-2 text-wilton-blue font-medium">
                            <button>Learn More</button>
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                           </div>
                     </div>

                       <!-- branding and graphc design -->
                        <div class="bg-white p-4 rounded-md">
                        <!-- icon -->
                         <div class="inline-flex rounded-md bg-wilton-blue p-2">
                            <img src="/iconmonstr-color-fan-1-240.png" alt="code-icon" width="30" class="invert">
                         </div>

                         <div class="space-y-1 mt-2">
                            <!-- title -->
                            <h3 class="font-semibold">Branding & Graphic Design</h3>
                            <p class="text-gray-500">Brand identity creation, corporate materials, UI/UX design, 
                                and marketing visuals that stand out.
                            </p>
                         </div>

                          <!-- CTA -->
                           <div class="flex items-center mt-2 p-2 text-wilton-blue font-medium">
                            <button>Learn More</button>
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                           </div>
                     </div>

                       <!-- Social media management -->
                        <div class="bg-white p-4 rounded-md">
                        <!-- icon -->
                         <div class="inline-flex rounded-md bg-wilton-blue p-2">
                            <img src="/iconmonstr-share-thin-240.png" alt="code-icon" width="30" class="invert">
                         </div>

                         <div class="space-y-1 mt-2">
                            <!-- title -->
                            <h3 class="font-semibold">Social Media Management</h3>
                            <p class="text-gray-500">Account optimization, content creation, engagement analytics, and growth strategies 
                                for your brand.
                            </p>
                         </div>

                          <!-- CTA -->
                           <div class="flex items-center mt-2 p-2 text-wilton-blue font-medium">
                            <button>Learn More</button>
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                           </div>
                     </div>

                       <!-- digital marketing and SEO -->
                        <div class="bg-white p-4 rounded-md">
                        <!-- icon -->
                         <div class="inline-flex rounded-md bg-wilton-blue p-2">
                            <img src="/iconmonstr-chart-20-240.png" alt="code-icon" width="30" class="invert">
                         </div>

                         <div class="space-y-1 mt-2">
                            <!-- title -->
                            <h3 class="font-semibold">Digital Marketing & SEO</h3>
                            <p class="text-gray-500">SEOoptimization, online campaigns, across major platforms, 
                                and analytics tracking for performance improvement.
                            </p>
                         </div>

                          <!-- CTA -->
                           <div class="flex items-center mt-2 p-2 text-wilton-blue font-medium">
                            <button>Learn More</button>
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                           </div>
                     </div>
                  </div>
            </div>
          </section>

         <!-- featured (wilton blue) -->
          <section class="py-12">
            <div class="container mx-auto rounded-md px-4 bg-wilton-blue p-4">
                <!-- title -->
                 <div class="text-center mx-auto max-w-xl space-y-3">
                    <h3 class="text-white font-semibold text-3xl">Why Choose Wilton Technologies?</h3>
                    <p class="text-white">We combine innovation, quality, and integrity to deliver 
                        transformative digital experiences
                    </p>
                 </div>

                 <!-- four features -->
                  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 mb-6">

                    <!-- Innovation -->
                     <div class="flex items-center flex-col">
                        <!-- image -->
                         <div class="rounded-full bg-wilton-navy p-2 inline-flex">
                            <img src="/iconmonstr-light-bulb-thin-240.png" alt="light-bulb" width="30" class="invert">
                         </div>

                         <div class="text-white text-center space-y-2 mt-2">
                            <h3 class="font-semibold">Innovation</h3>
                            <p class="">Forward-thinking technology and creative problem-solving</p>
                         </div>
                     </div>

                     <!-- Quality -->
                      <div class="flex items-center flex-col">
                        <!-- image -->
                         <div class="rounded-full bg-wilton-navy p-2 inline-flex">
                            <img src="/iconmonstr-check-mark-8-240.png" alt="light-bulb" width="30" class="invert">
                         </div>

                         <div class="text-white text-center space-y-2 mt-2">
                            <h3 class="font-semibold">Quality</h3>
                            <p class="">High standards in design, performance, and delivery</p>
                         </div>
                     </div>

                      <!-- Integrity -->
                       <div class="flex items-center flex-col">
                        <!-- image -->
                         <div class="rounded-full bg-wilton-navy p-2 inline-flex">
                            <img src="/iconmonstr-shield-1-thin-240.png" alt="light-bulb" width="30" class="invert">
                         </div>

                         <div class="text-white text-center space-y-2 mt-2">
                            <h3 class="font-semibold">Integrity</h3>
                            <p class="">Honest communication and transparency</p>
                         </div>
                     </div>

                       <!-- Collaboration -->
                        <div class="flex items-center flex-col">
                        <!-- image -->
                         <div class="rounded-full bg-wilton-navy p-2 inline-flex">
                            <img src="/iconmonstr-discord-4-240.png" alt="light-bulb" width="30" class="invert">
                         </div>

                         <div class="text-white text-center space-y-2 mt-2">
                            <h3 class="font-semibold">Collaboration</h3>
                            <p class="">Strong partnerships with clients</p>
                         </div>
                     </div>

                  </div>

                  <!-- cta -->
                   <div class=""></div>
            </div>
          </section>

         <!-- contact (grey) -->
          <section class="py-12">
            <div class="container mx-auto px-4">
                <!-- two containers -->
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- left container -->
                     <div class="bg-white p-4 rounded-md shadow-md">
                        <h2 class="font-semibold mb-2">Let's Connect</h2>
                        <p>Need to talk to us? Reach out and let's discuss how we can bring your vision to life.</p>

                        <!-- contact icons -->
                         <div class="flex flex-col space-y-4 mt-4">

                            <!-- email -->
                             <div class="flex gap-2 items-center">
                                <div class="rounded-full bg-wilton-blue p-2">
                                    <img src="/envelope-solid-full.svg" alt="email" class="w-8 invert">
                                </div>
                                <div class="">
                                    <h3 class="font-medium mb-1">Email</h3>
                                    <p class="text-sm">info@wiltontechnologies.com</p>
                                </div>
                             </div>

                             <div class="flex gap-2 items-center">
                                    <div class="rounded-full bg-wilton-blue p-2">
                                        <img src="/phone.png" alt="phone" class="w-8 invert">
                                    </div>
                                    <div class="">
                                        <h3 class="font-medium mb-1">Phone</h3>
                                        <p class="text-sm">+254 XXX XXX XXX</p>
                                    </div>
                                </div>

                                <div class="flex gap-2 items-center">
                                    <div class="rounded-full bg-wilton-blue p-2">
                                        <img src="/map-pin-house.png" alt="map" class="w-8 invert">
                                    </div>
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