import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/auth/LoginPage.vue';
import Overview from '../views/dashboard/Overview.vue';

const routes = [
  { path: '/', name: 'home', component: LoginPage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/dashboard', name: 'dashboard', component: Overview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;