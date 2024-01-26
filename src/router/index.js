import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/about.vue'
import Rejister from '../views/Rejister.vue'
import packageView from '../views/package.vue'
import login from '../views/login.vue'
import mainpage from '../views/mainpage.vue'

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
      path:'/Rejister',
      name:'Rejister',
      component:Rejister
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
