import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '../views/Home.vue'
import Brezza from '../views/Brezza.vue'
import Kgt from '../views/Kgt.vue'
import Pantad from '../views/Pantad.vue'
import Powr from '../views/Powr.vue'
import Togather from '../views/Togather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/Togather',
    name: 'Togather',
    component: Togather
  },
  {
    path: '/Pantad',
    name: 'Pantad',
    component: Pantad
  },
  {
    path: '/Powr',
    name: 'Powr',
    component: Powr
  },
  {
    path: '/brezza',
    name: 'Brezza',
    component: Brezza
  },
  {
    path: '/Vårdkällan',
    name: 'Vårdkällan',
    component: Kgt
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
  routes
})

export default router
