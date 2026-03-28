<template>
  <div class="bg-gray-200 min-h-screen">
    <HeaderPage />

    <!-- Hero Section -->
    <section class="relative">
      <div class="mx-auto relative">
        <img src="/creativity-post.jpg" alt="Our Services" class="w-full h-[400px] object-cover" />
        <div class="absolute inset-0 bg-black opacity-60"></div>
        <div class="absolute inset-0 container mx-auto px-4 flex items-center">
          <div class="max-w-2xl text-white">
            <h1 class="text-5xl font-bold mb-4">Our Services</h1>
            <p class="text-xl">Comprehensive digital solutions to transform your business.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services List (detailed) -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-gray-800">What We Offer</h2>
          <p class="text-gray-600 mt-4">End-to-end technology and creative services tailored to your goals.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="inline-flex rounded-md bg-wilton-blue p-2">
              <img :src="service.icon" :alt="service.title" width="30" class="invert" />
            </div>
            <h3 class="text-xl font-semibold mt-4">{{ service.title }}</h3>
            <p class="text-gray-500 mt-2">{{ service.description }}</p>
            <ul class="mt-4 space-y-1 text-sm text-gray-600">
              <li v-for="feature in service.features" :key="feature" class="flex items-start">
                <svg class="w-4 h-4 text-wilton-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <button class="mt-4 text-wilton-blue font-medium flex items-center group">
              Learn more
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Process / Approach -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Our Approach</h2>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">We follow a proven methodology to deliver high-quality results, on time and within budget.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="step in process" :key="step.step" class="text-center">
            <div class="bg-wilton-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              {{ step.step }}
            </div>
            <h3 class="font-semibold mt-4 text-gray-800">{{ step.title }}</h3>
            <p class="text-gray-500 mt-2 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us (condensed) -->
    <section class="py-16 bg-wilton-blue">
      <div class="container mx-auto px-4 text-white text-center">
        <h2 class="text-3xl font-bold mb-8">Why Businesses Trust Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="reason in reasons" :key="reason.title">
            <div class="rounded-full bg-wilton-navy p-3 inline-flex">
              <img :src="reason.icon" alt="icon" width="30" class="invert" />
            </div>
            <h3 class="font-semibold mt-4">{{ reason.title }}</h3>
            <p class="text-white/80 mt-2 text-sm">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gray-200">
      <div class="container mx-auto px-4 text-center space-y-3">
        <h2 class="text-3xl font-bold text-gray-800">Ready to Start Your Project?</h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">Let&apos;s discuss how our services can help you achieve your goals.</p>
        <div class="">
          <a href="/contact-us" class="mt-6 bg-wilton-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-wilton-navy transition-colors">
          Contact Us Today
        </a>
        </div>
      </div>
    </section>

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
      services: [
        {
          title: 'Software Development',
          icon: '/iconmonstr-code-thin-240.png',
          description: 'Custom software, enterprise SaaS, system integration, and cloud solutions.',
          features: [
            'Custom software development',
            'SaaS applications',
            'System integration',
            'Cloud solutions (AWS, Azure, GCP)',
            'API development & management'
          ]
        },
        {
          title: 'Mobile & Web Apps',
          icon: '/iconmonstr-smartphone-1-240.png',
          description: 'Android/iOS apps, cross-platform solutions, and web applications for business operations.',
          features: [
            'Native Android & iOS apps',
            'Cross-platform (React Native, Flutter)',
            'Progressive Web Apps (PWA)',
            'E-commerce platforms',
            'Enterprise web portals'
          ]
        },
        {
          title: 'Web Design & Maintenance',
          icon: '/iconmonstr-computer-10-240.png',
          description: 'Professional business websites, e-commerce stores, and ongoing maintenance.',
          features: [
            'Responsive website design',
            'E-commerce development (WooCommerce, Shopify)',
            'CMS integration (WordPress, Contentful)',
            'Performance optimization',
            'Security updates & backups'
          ]
        },
        {
          title: 'Branding & Graphic Design',
          icon: '/iconmonstr-color-fan-1-240.png',
          description: 'Brand identity, corporate materials, UI/UX design, and marketing visuals.',
          features: [
            'Logo & brand identity',
            'UI/UX design for web & mobile',
            'Brochures & marketing collateral',
            'Social media graphics',
            'Packaging design'
          ]
        },
        {
          title: 'Social Media Management',
          icon: '/iconmonstr-share-thin-240.png',
          description: 'Account optimization, content creation, engagement analytics, and growth strategies.',
          features: [
            'Content calendars & strategy',
            'Graphic & video content creation',
            'Community engagement',
            'Paid ad campaigns',
            'Performance reporting'
          ]
        },
        {
          title: 'Digital Marketing & SEO',
          icon: '/iconmonstr-chart-20-240.png',
          description: 'SEO, online campaigns, and analytics to drive targeted traffic.',
          features: [
            'Search Engine Optimization (SEO)',
            'Pay-per-click advertising (Google Ads, Meta Ads)',
            'Email marketing campaigns',
            'Conversion rate optimization',
            'Analytics & tracking setup'
          ]
        }
      ],
      process: [
        { step: 1, title: 'Discovery', description: 'We learn about your business, goals, and audience.' },
        { step: 2, title: 'Strategy', description: 'We map out a clear plan, timeline, and deliverables.' },
        { step: 3, title: 'Execution', description: 'We build, test, and iterate with transparent communication.' },
        { step: 4, title: 'Delivery & Support', description: 'We launch your project and provide ongoing support.' }
      ],
      reasons: [
        { title: 'Innovation', description: 'Forward-thinking technology and creative problem-solving.', icon: '/iconmonstr-light-bulb-thin-240.png' },
        { title: 'Quality', description: 'High standards in design, performance, and delivery.', icon: '/iconmonstr-check-mark-8-240.png' },
        { title: 'Integrity', description: 'Honest communication and transparency throughout.', icon: '/iconmonstr-shield-1-thin-240.png' },
        { title: 'Collaboration', description: 'Strong partnerships with clients, treating your success as our own.', icon: '/iconmonstr-discord-4-240.png' }
      ]
    };
  }
};
</script>

<style scoped>
</style>