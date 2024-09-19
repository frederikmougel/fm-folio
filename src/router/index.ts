import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoryView from '@/views/StoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')  // Lazy loaded
    },
    {
      path: '/story',
      name: 'story',
      component: () => import('../views/StoryView.vue')  // Lazy loaded
    },

  ]
})

export default router
