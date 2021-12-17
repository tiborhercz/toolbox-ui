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
    path: '/cidr',
    name: 'Cidr',
    component: () => import(/* webpackChunkName: "Cidr" */ '../views/Cidr'),
  },
  {
    path: '/base64',
    name: 'Base64',
    component: {
      render: (c) => c('router-view'),
    },
    children: [
      {
        path: 'encode',
        component: () => import(/* webpackChunkName: "Base64" */ '../views/Base64'),
        props: {
          type: 'encode',
        },
      },
      {
        path: 'decode',
        component: () => import(/* webpackChunkName: "Base64" */ '../views/Base64'),
        props: {
          type: 'decode',
        },
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
