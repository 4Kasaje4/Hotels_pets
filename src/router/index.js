import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/about.vue'
import Homepage from '../views/Homepage.vue'
import packageView from '@/views/package.vue'
import caretakerView from '@/views/caretaker.vue'
import searchproView from '../views/searchpro.vue'
import startpageView from '../views/start.vue'
import newconpageView from '@/views/newconpage.vue'
import cutconView from '@/views/cutcon.vue'
import takeaconView from '@/views/takeacon.vue'
import cancelView from '@/views/cancel.vue'




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
      path:'/package',
      name:'package',
      component:packageView
    },
    {
      path:'/Homepage/:role/:id/:login_id',
      name:'Homepage',
      component:Homepage
    },
    {
      path:'/caretaker',
      name:'caretaker',
      component:caretakerView
    },
    {
      path:'/searchpro',
      name:'searchpro',
      component:searchproView
    },
    {
      path:'/start',
      name:'start',
      component: startpageView
    },
    {
      path:'/newconpage',
      name:'newconpage',
      component: newconpageView
    },
    {
      path:'/cutcon',
      name:'cutcon',
      component: cutconView
    },
    {
      path:'/takeacon',
      name:'takeacon',
      component: takeaconView
    },
    {
      path:'/cancel',
      name:'cancel',
      component: cancelView
    }
   



  
 
  ]
})

export default router
