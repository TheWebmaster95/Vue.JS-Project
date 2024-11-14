import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../components/about-section.vue'
import Portfolio from '../components/portfolio-section.vue'
import Testimonials from '../components/testomonials-section.vue'
import Contact from '../components/contact-section.vue'
import Footer from '../components/footer-item.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        about: About,
        portfolio: Portfolio,
        testimonials: Testimonials,
        contact: Contact,
        footer: Footer,
      },
    },
  ],
})

export default router
