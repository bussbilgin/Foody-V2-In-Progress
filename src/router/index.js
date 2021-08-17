import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BusinesDetail from '../views/BusinesDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/detail',
    name: 'Busines Detail',
    component: BusinesDetail
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
