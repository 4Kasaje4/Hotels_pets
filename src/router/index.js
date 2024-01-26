import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/about.vue'

import login from '../views/login.vue'
import mainpage from '../views/mainpage.vue'
import Register from '../views/Register.vue'
import packageView from '../views/package .vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path:'/about',
      name:'about',
      component:about
    },
    {

      path:'/Register',
      name:'Register',
      component:Register
    },
    {
      path:'/package',
      name:'package',
      component:packageView
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/mainpage',
      name:'mainpage',
      component:mainpage
    }

  
 
  ]
})

export default router
