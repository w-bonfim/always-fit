import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Layout from './views/Layout.vue';
import router from './router';

const app = createApp(Layout);
app.use(createPinia());
app.use(router);
app.mount('#app');
