import { createRouter, createWebHistory } from 'vue-router'
import HomePages from '../pages/HomePages.vue'
import DetailContent from '../pages/DetailContent.vue'
import CategoryPages from '../pages/HomePages.vue'
import HomeFavorite from '../pages/HomeFavorite.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePages
    },
    
    {
      path: '/category/',
      name: 'category',
      component: CategoryPages,
      // props: true
    },
    
    {
        path: '/detail',
        name: 'detail',
        component: DetailContent
    },
    {

        path: '/favorite',
        name: 'Favorite',
        component: HomeFavorite  
    },
  ]
})

export default router