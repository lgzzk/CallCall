import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../pages/login/index.vue'
import Main from '../pages/main/index.vue'

const routes = [
    {path: '/login', component: Login },
    {path: '/main', component: () => Main},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
