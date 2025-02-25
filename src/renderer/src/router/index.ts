import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../pages/login/index.vue'
import Main from '../pages/main/index.vue'
import Message from '../pages/main/message/index.vue'
import Contact from '../pages/main/contact/index.vue'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/main',
    component: Main,
    redirect: '/main/message',
    children: [
      {
        path: 'message',
        component: Message
      },
      {
        path: 'contact',
        component: Contact
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
