import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/about.vue'
import RegisterView from '@/views/Register.vue'
import login from '../views/login.vue'
import Homepage from '../views/Homepage.vue'
import packageView from '@/views/package.vue'
import caretakerView from '@/views/caretaker.vue'

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
      component:RegisterView
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
      path:'/Homepage',
      name:'Homepage',
      component:Homepage
    },
    {
      path:'/caretaker',
      name:'caretaker',
      component:caretakerView
    }


  
 
  ]
})

export default router