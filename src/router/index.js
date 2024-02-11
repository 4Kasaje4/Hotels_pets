import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/about.vue'
import RegisterView from '@/views/Register.vue'
import login from '../views/login.vue'
import Homepage from '../views/Homepage.vue'
import packageView from '@/views/package.vue'
import caretakerView from '@/views/caretaker.vue'
import ResetpasswordView from '@/views/Resetpassword.vue'
import searchproView from '../views/searchpro.vue'
import profileView from '@/views/profile.vue'
import servicepageView from '../views/servicepage.vue'
import startpage from '@/views/start.vue'
import confirmationpage from '@/views/confirmationpage.vue'
import newconpage from '@/views/newconpage.vue'
import haircutconView from '@/views/cutcon.vue'
import takeaconView from '@/views/takeacon.vue'
import cancelView from '@/views/cancel.vue'
import hide_cancle_pet from '@/views/hide_cancle_pet.vue'
import bookingView from '@/views/booking.vue'
import hide_logout from '@/views/hide_logout.vue'
import chatView from '@/views/chat.vue'
import package_no_login from '@/views/package_no_login.vue'
import adminpageView from '@/views/adminpage.vue'
import register_admin from '@/views/register_admin.vue'
import register_pet_sitter from '@/views/register_pet_sitter.vue'
import profile_for_ps from '@/views/profile_for_ps.vue'
import profile_for_user from '@/views/profile_for_user.vue'
import profile_for_admin from '@/views/profile_for_admin.vue'
import homemainView from '@/views/homemain.vue'
import caretakernologin from '@/views/caretakernologin.vue'



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
      path:'/Homepage/:role/:id/:login_id',
      name:'Homepage',
      component:Homepage
    },
    {
      path:'/caretaker/:role/:id/:login_id',
      name:'caretaker',
      component:caretakerView
    },
    {
      path:'/Resetpassword/:role/:id/:login_id',
      name:'resetpassword',
      component:ResetpasswordView
    },
    {
      path:'/searchpro',
      name:'searchpro',
      component:searchproView
    },
    { 
      path:'/profile/:role/:id/:login_id',
      name:'profile', 
      component:profileView
    },
    {
      path:'/servicepage/:role/:id/:login_id',
      name:'servicepage',
      component:servicepageView
    },
    {
      path:'/',
      name:'start',
      component: startpage
    },
    {
      path:'/confirmationpage/:role/:id/:login_id',
      name:'confirmationpage',
      component: confirmationpage
    },
    {
      path:'/newconpage',
      name:'newconpage',
      component: newconpage
    },
    {
      path:'/cutcon',
      name: 'cutcon',
      component : haircutconView
    },
    {
      path:'/takacon/:role/:id/:login_id',
      name: 'takeacon',
      component : takeaconView
    },
    {
      path:'/cancel/:role/:id/:login_id',
      name: 'cancel',
      component : cancelView
    },
    {
      path:'/hide_cancle_pet/:role/:id/:login_id/:pet_id/:ps_id',
      name: 'hide_cancle_pet',
      component : hide_cancle_pet
    },
    {
      path:'/booking/:role/:id/:login_id/:pet_id',
      name: 'booking',
      component : bookingView
    },
    {
      path:'/logout/:login_id',
      name: 'logout',
      component : hide_logout
    },
    {
      path:'/chat/:role/:id/:login_id',
      name: 'chat',
      component : chatView
    },
    {
      path:'/packagenolog',
      name: 'package_no_login',
      component : package_no_login
    },
    {
      path:'/adminpage/:role/:id/:login_id',
      name: 'adminpageView',
      component : adminpageView
    },
    {
      path:'/register_admin/:role/:id/:login_id',
      name: 'register_admin',
      component : register_admin
    },
    {
      path:'/register_pet_sitter/:role/:id/:login_id',
      name: 'register_pet_sitter',
      component : register_pet_sitter
    },
    {
      path:'/profile_for_ps/:role/:id/:login_id/:your_role/:your_id',
      name: 'profile_for_ps',
      component : profile_for_ps
    },
    {
      path:'/profile_for_user/:role/:id/:login_id/:your_role/:your_id',
      name: 'profile_for_user',
      component : profile_for_user
    },
    {
      path:'/profile_for_admin/:role/:id/:login_id/:your_role/:your_id',
      name: 'profile_for_admin',
      component : profile_for_admin
    }
    ,
    {
      path:'/Homemain',
      name: 'Homemain',
      component : homemainView
    },
    {
      path:'/caretakernologin',
      name: 'caretakernologin',
      component : caretakernologin
    }









  
 
  ]
})

export default router
