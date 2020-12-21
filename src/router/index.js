import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homemain from '../views/Homemain.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

import Admin from '../views/Admin.vue'
import Adminhome from '../components/Gulladminhome.vue'
import Adminaddproduct from '../components/GullAdminAddProduct.vue'
import Profile from '../components/GullProfile.vue'
import Products from '../components/GullProducts.vue'

import {fb} from '../firebase'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path: '', name: 'homemain', component: Homemain },
      {path: 'about', name: 'about', component: About },
      {path: 'contact', name: 'contact', component: Contact },
      
    ]
  },
  
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true },//this ensures that to access any route on the admin route, you must be authenticated. This covers for all child component under the admin route component
    children:[
      { path: '', name: 'adminhome', component: Adminhome },
      { path: 'addproducts', name: 'addproducts', component: Adminaddproduct},
      { path: 'profile', name: 'profile', component: Profile},
      { path: 'products', name: 'products', component: Products},
      // { path: '*', name: 'adminhome', component: Adminhome},

    ]
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//code snippet added below is to filter the route first before export in order to check for routes that needs authentication
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    // this route requires auth, check if logged in
    // if not, redirect to login page.

    const requiresAuth = to.matched.some( x => x.meta.requiresAuth )
    const currentUser = fb.auth().currentUser 
    
    if ( requiresAuth && !currentUser  ) {
      next({
        path: '/',
        // path: '/login',
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router



// N/B: When using nested routes, DO NOT preceed the path of the nested route with / 
// Always ensure to add a / before the parent component 


// router.beforeEach((to, from, next) =>{
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = fb.auth().currentUser

//   if(requiresAuth && !currentUser){
// 	next('/login')
// }else if (requiresAuth && currentUser){
// 	next()
// }else {
// 	next()
// }
// })

