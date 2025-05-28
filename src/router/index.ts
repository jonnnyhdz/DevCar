import { createRouter, createWebHistory } from 'vue-router'
import Home  from '@/views/Home.vue'
import Navbar   from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import Select from '@/views/Select.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,   
      navbar: Navbar,
      footer: Footer
    }
  },
    {
    path: '/select',
    name: 'select',
    components: {
      default: Select,   
      navbar: Navbar,
      footer: Footer
    }
  },
  // si añades más rutas, repite el mismo patrón:
  // {
  //   path: '/about',
  //   components: { default: About, navbar: Navbar }
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
