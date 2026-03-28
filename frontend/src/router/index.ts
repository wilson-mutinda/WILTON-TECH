import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Homepage from '@/pages/Homepage.vue'
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
import ServicePage from '@/pages/ServicePage.vue'
import AboutUsPage from '@/pages/AboutUsPage.vue'
import ContactUsPage from '@/pages/ContactUsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Homepage },
    { path: '/header', name: 'header', component: HeaderPage },
    { path: '/footer', name: 'footer', component: FooterPage },
    { path: '/services', name: 'services', component: ServicePage },
    { path: '/about-us', name: 'about-us', component: AboutUsPage },
    { path: '/contact-us', name: 'contact-us', component: ContactUsPage }
  ],
})

export default router
