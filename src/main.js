

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'
const app = createApp(App)

app.use(createPinia(),VueAxios, axios)
app.use(router)

app.mount('#app')
