import './assets/sb/fontawesome-free/css/all.min.css'
import './assets/sb/sb-admin-2.min.css'
import jQuery from 'jquery';
const $ = jQuery;
window.$ = $;


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js';