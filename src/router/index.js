import { createRouter, createWebHistory } from 'vue-router'
import HomeFavorite from '../view/HomeFavorite.vue'
import AddFav from '../view/AddFav.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: HomeFavorite  
    },
    {
        path: '/add-fav',
        name: 'fav',
        component: AddFav  
    },
]
})

export default router