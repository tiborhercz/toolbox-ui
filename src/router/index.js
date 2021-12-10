import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/base64',
    name: 'Base64',
    component: () => import(/* webpackChunkName: "Base64" */ '../views/Base64'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
