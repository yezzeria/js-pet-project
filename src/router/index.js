import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Auth from '../views/Auth.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //import.meta.env.BASE_URL
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true }
    },

    
  ]
})

router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth) {

    const isAuthenticated = !!localStorage.getItem('email')
    if (!isAuthenticated) {
      next({ name: 'auth' })
    } else {

      if (to.name === 'auth' || to.name === 'app') {

        next({ name: 'home' })
      } else {
        next()
      }
    }
  } else {
    const isAuthenticated = !!localStorage.getItem('email')
    if (isAuthenticated) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

export default router
