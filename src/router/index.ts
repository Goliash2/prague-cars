import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/mhd'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'mhd'
      },
      {
        path: 'mhd',
        component: () => import('@/views/Mhd.vue')
      },
      {
        path: 'bikes',
        component: () => import('@/views/Bikes.vue')
      },
      {
        path: 'cars',
        component: () => import('@/views/Cars.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
