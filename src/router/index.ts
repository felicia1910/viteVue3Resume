import { createRouter, createWebHistory, createWebHashHistory, } from 'vue-router';
import Views from '@/views/About/index.vue';

const routes = [
  {
    path: '/',
    name: 'About',
    component: Views
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('@/views/Profile/index.vue')
  },
  {
    path: '/ProfileDetail',
    name: 'ProfileDetail',
    component: () => import('@/views/Profile/ProfilePage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
