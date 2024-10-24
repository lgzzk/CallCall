import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from '@renderer/router'

createApp(App)
  .use(router)
  .mount('#app')