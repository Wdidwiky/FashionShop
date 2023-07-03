import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomePages from '../pages/HomePages.vue'
import DetailContent from '../pages/DetailContent.vue'
import CategoryPages from '../pages/HomePages.vue'

=======
import HomeFavorite from '../view/HomeFavorite.vue'
import AddFav from '../view/AddFav.vue'
>>>>>>> wildan

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< HEAD
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
    
  ]
=======
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
>>>>>>> wildan
})

export default router