import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/about.vue'
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
    }
   
  
 
  ]
})

export default router
