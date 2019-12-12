import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/faq',
    name: 'FaqPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/FaqPage.vue')
  }
]

const router = new VueRouter({
  routes
})


export default router