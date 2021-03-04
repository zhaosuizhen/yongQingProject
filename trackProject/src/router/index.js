import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/realTimeMonitoring'
  },
  {
    path: '/realTimeMonitoring',
    name: 'realTimeMonitoring',
    component: () => import('../views/PC/realTimeMonitoring')
  },
  {
    path: '/equipmentLog',
    name: 'equipmentLog',
    component: () => import('../views/PC/equipmentLog')
  },
  {
    path: '/dataSubmit',
    name: 'dataSubmit',
    component: () => import('@/views/mobile/dataSubmit')
  },
  {
    path: '/afterTransport',
    name: 'afterTransport',
    component: () => import('@/views/mobile/afterTransport')
  }
]

const router = new VueRouter({
  routes
})

export default router