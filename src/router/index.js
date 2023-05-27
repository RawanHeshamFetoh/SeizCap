import { createRouter, createWebHistory } from 'vue-router'
import BlogBlot from '../views/BlogPost.vue'
import nav from '../views/NavBar.vue'
import features from '../views/Features.vue'
import blogs from '../views/BlogPost.vue'
import aboutseiz from '../views/AboutSeiz.vue'
import team from '../views/OurTeam.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: nav
  },
  {
    path: '/features',
    name: 'features',
    component: features
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: blogs
  },
  {
    path: '/aboutseiz',
    name: 'aboutseiz',
    component: aboutseiz
  },
  {
    path: '/team',
    name: 'team',
    component:team
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AppScreen.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
