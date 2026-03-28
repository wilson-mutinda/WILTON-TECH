<template>
  <div class="bg-gray-200 min-h-screen">
    <HeaderPage />

    <!-- Hero Section -->
    <section class="relative">
      <div class="mx-auto relative">
        <img src="/creativity-post.jpg" alt="Contact Us" class="w-full h-[350px] object-cover" />
        <div class="absolute inset-0 bg-black opacity-60"></div>
        <div class="absolute inset-0 container mx-auto px-4 flex items-center">
          <div class="max-w-2xl text-white">
            <h1 class="text-5xl font-bold mb-4">Contact Us</h1>
            <p class="text-xl">We’re here to help. Reach out and let’s start a conversation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p class="text-gray-600 mb-8">
              Have a question, a project idea, or just want to say hello? We'd love to hear from you.
              Fill out the form or use any of the contact methods below.
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="rounded-full bg-wilton-blue p-3 flex-shrink-0">
                  <img src="/envelope-solid-full.svg" alt="Email" class="w-6 invert" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Email</h3>
                  <p class="text-gray-600">info@wiltontechnologies.com</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="rounded-full bg-wilton-blue p-3 flex-shrink-0">
                  <img src="/phone.png" alt="Phone" class="w-6 invert" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Phone</h3>
                  <p class="text-gray-600">+254 XXX XXX XXX</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="rounded-full bg-wilton-blue p-3 flex-shrink-0">
                  <img src="/map-pin-house.png" alt="Address" class="w-6 invert" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Office</h3>
                  <p class="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <!-- Optional: Google Maps embed -->
            <div class="mt-8 rounded-md overflow-hidden shadow-md">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818790012154!2d36.821580!3d-1.286390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7b8b8b8b8b8b8b8!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1647600000000!5m2!1sen!2ske"
                width="100%"
                height="250"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-6 rounded-md shadow-md">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block font-medium mb-1 text-gray-700" for="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    class="w-full rounded-md outline-none ring-1 ring-wilton-blue p-2 focus:ring-2"
                    required
                  />
                </div>
                <div>
                  <label class="block font-medium mb-1 text-gray-700" for="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    class="w-full rounded-md outline-none ring-1 ring-wilton-blue p-2 focus:ring-2"
                    required
                  />
                </div>
              </div>

              <div class="mb-4">
                <label class="block font-medium mb-1 text-gray-700" for="service">Service of Interest</label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full rounded-md outline-none ring-1 ring-wilton-blue p-2"
                >
                  <option value="">Select a service (optional)</option>
                  <option value="software-dev">Software Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="web-app">Web App Development</option>
                  <option value="web-design">Website Design</option>
                  <option value="branding">Branding & Design</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="digital-marketing">Digital Marketing & SEO</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="block font-medium mb-1 text-gray-700" for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  class="w-full rounded-md outline-none ring-1 ring-wilton-blue p-2 focus:ring-2"
                  required
                ></textarea>
              </div>

              <div class="flex justify-between items-center">
                <button
                  type="submit"
                  class="bg-wilton-blue text-white px-6 py-2 rounded-md font-semibold hover:bg-wilton-navy transition-colors"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
                <div v-if="submitSuccess" class="text-green-600 text-sm">✓ Message sent successfully!</div>
                <div v-if="submitError" class="text-red-600 text-sm">❌ {{ submitError }}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section (optional) -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-12">Find quick answers to common questions.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index">
            <h3 class="font-semibold text-wilton-blue mb-1">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action (optional) -->
    <!-- <section class="py-12 bg-wilton-blue text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-2">Let’s Work Together</h2>
        <p class="mb-4">We’re excited to hear about your project.</p>
        <a href="#contact-form" class="inline-block bg-white text-wilton-blue px-6 py-2 rounded-md font-semibold hover:bg-gray-100">Get in Touch</a>
      </div>
    </section> -->

    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  components: { HeaderPage, FooterPage },
  data() {
    return {
      form: {
        name: '',
        email: '',
        service: '',
        message: ''
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: '',
      faqs: [
        { question: 'How long does it take to develop a website?', answer: 'Typical timelines range from 2–6 weeks depending on complexity and requirements.' },
        { question: 'Do you offer ongoing support after launch?', answer: 'Yes, we provide maintenance and support packages tailored to your needs.' },
        { question: 'What is your pricing model?', answer: 'We offer project‑based and retainer options. Contact us for a custom quote.' },
        { question: 'Can you help with digital marketing?', answer: 'Absolutely. Our digital marketing services include SEO, social media, and paid ads.' }
      ]
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = '';

      try {
        // Replace with your actual endpoint
        const response = await fetch('https://your-api-endpoint.com/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });

        if (response.ok) {
          this.submitSuccess = true;
          this.form = { name: '', email: '', service: '', message: '' };
        } else {
          throw new Error('Failed to send message.');
        }
      } catch (error) {
        this.submitError = 'Something went wrong. Please try again later.';
        console.error(error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>