import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homemain from '../views/Homemain.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

import Admin from '../views/Admin.vue'
import Adminhome from '../components/Gulladminhome.vue'
import Adminaddproduct from '../components/GullAdminAddProduct.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path: '', name: 'homemain', component: Homemain },
      {path: 'about', name: 'about', component: About },
      {path: 'contact', name: 'contact', component: Contact }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children:[
      { path: '', name: 'adminhome', component: Adminhome },
      { path: 'addproducts', name: 'addproducts', component: Adminaddproduct},

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



// N/B: When using nested routes, DO NOT preceed the path of the nested route with / 
// Always ensure to add a / before the parent component 
//