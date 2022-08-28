import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/reset-password',
      name: 'Reset Password',
      component: () => import('../views/ResetPasswordView.vue')
    },
    {
      path: '/create-account',
      name: 'Create Account',
      component: () => import('../views/CreateAccountView.vue')
    }
  ]
})

export default router
