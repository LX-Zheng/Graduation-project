import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/paper',
    name: 'paper',
    component: () => import('../components/peper.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
