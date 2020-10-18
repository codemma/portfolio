import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '../views/Home.vue'
import Brezza from '../views/Brezza.vue'
import Kgt from '../views/Kgt.vue'
import Pantad from '../views/Pantad.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/Pantad',
    name: 'Pantad',
    component: Pantad
  },
  {
    path: '/brezza',
    name: 'Brezza',
    component: Brezza
  },
  {
    path: '/kgt',
    name: 'Kgt',
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
