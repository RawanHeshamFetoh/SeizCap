import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'

createApp(App).use(store).use(router).use(VueScrollTo).mount('#app')
