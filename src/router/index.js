import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ShoppingCard from '../views/ShoppingCard.vue'
import Succes from '../views/Succes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCard
  },
  {
    path: '/Succes',
    name: 'Succes',
    component: Succes
  },
]

const router = new VueRouter({
  routes
})

export default router
