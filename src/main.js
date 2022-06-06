import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/images/home.jpg'
import './assets/images/completetasks.jpg'
import './assets/images/incompletetasks.jpg'



createApp(App).use(router).use(store).use(router).mount('#app')
