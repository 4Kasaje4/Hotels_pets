import { createRouter, createWebHistory } from 'vue-router'
import packageView from '@/views/package.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/package',
      name:'package',
      component:packageView
    }
   
   



  
 
  ]
})

export default router
