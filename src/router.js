// router.js
import { createRouter, createWebHistory } from 'vue-router';

import Login from './views/LoginPage.vue';
import Dashboard from './views/DashBoard.vue';
// import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
//   { path: '/:catchAll(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
