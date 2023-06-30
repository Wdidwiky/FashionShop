import { createRouter, createWebHistory } from 'vue-router'
import HomePages from '../pages/HomePages.vue'
import DetailContent from '../pages/DetailContent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePages
    },
    {
        path: '/detail',
        name: 'detail',
        component: DetailContent
      },
    
  ]
})

export default router