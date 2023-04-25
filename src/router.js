import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Main",
        props: true,
        component: () => import('./views/main.vue')
    },
    {
        path: "/chat",
        name: "Chat",
        props: true,
        component: () => import('./views/chat.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router