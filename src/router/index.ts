import { createRouter, createWebHistory } from 'vue-router'
import Home  from '@/views/Home.vue'
import Navbar   from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import Select from '@/views/Select.vue'
import Confirm from '@/views/Confirm.vue'
import Succes from '@/views/Succes.vue'

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
      {
    path: '/confirm',
    name: 'confirm',
    components: {
      default: Confirm,   
      navbar: Navbar,
      footer: Footer
    }
  },
        {
    path: '/succes',
    name: 'succes',
    components: {
      default: Succes,   
      navbar: Navbar,
      footer: Footer
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
