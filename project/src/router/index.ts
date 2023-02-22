import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/login/LoginPage.vue'
import HomePage from '../pages/home/HomePage.vue'

// @ts-ignore
import Error from '../components/Error.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/error',
        name: 'error',
        component: Error
    }
]

const router = createRouter({
    history: createWebHistory(""),
    routes
})

export default router