import './assets/sb/fontawesome-free/css/all.min.css'
import './assets/sb/sb-admin-2.min.css'
import jQuery from 'jquery';
const $ = jQuery;
window.$ = $;


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js';


axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
//axios.defaults.baseURL = 'http://mylar.et/';

//axios.defaults.xsrfCookieName = 'csrftoken'
//axios.defaults.xsrfHeaderName = "X-CSRFToken"