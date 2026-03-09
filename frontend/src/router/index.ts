import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Homepage from '@/pages/Homepage.vue'
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Homepage },
    { path: '/header', name: 'header', component: HeaderPage },
    { path: '/footer', name: 'footer', component: FooterPage }
  ],
})

export default router
