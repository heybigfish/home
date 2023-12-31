import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
// import Layout from '@/layout/Index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/',
    component: () => import('@/layout/layout-index.vue'),
    // 重定向
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/app-home.vue') // component: import('../views/reg.vue')
      }
    ]
  },
  {
    path: '/start',
    component: () => import('@/views/start/start-index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory('/home/'),
  routes
})

export default router
