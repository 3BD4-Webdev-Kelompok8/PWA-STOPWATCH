import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Stopwatch from '../views/Stopwatch.vue'
import Rekap from '../views/Rekap.vue'

// Use router
Vue.use(VueRouter)

/*  The router method takes an Array of objects that takes each component’s properties. */
/*  path : mean the path of the component
    name: name of the component
    component : the view component
*/
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stopwatch',
    name: 'Stopwatch',
    component: Stopwatch
  },
  {
    path: '/rekap',
    name: 'Rekap',
    component: Rekap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
