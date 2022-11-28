import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'header',
      component: HomeView
    },
    {
      path: '/aboutus',
      name: 'about',
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: () => import('../views/Upcoming.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../views/RulesView.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Workwithus.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/posts',
      name: '/posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/newpost',
      name: 'newpost',
      component: () => import('../views/NewPostView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
