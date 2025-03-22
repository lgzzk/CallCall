import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from '@renderer/router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app
  .use(router)
  .use(pinia)
  .mount('#app')
