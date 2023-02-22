import { createApp } from 'vue'
// import './style.css'
import './design/index.less'
import App from './App.vue'
import pinia from './store'
import router from './router'

createApp(App).use(pinia).use(router).mount('#app')
