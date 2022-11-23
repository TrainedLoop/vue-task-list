import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PublicLayout from '../layouts/PublicLayout.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    alias: ['/'],
    component: LoginView,
    meta: { layout: PublicLayout, transition: 'slide-left' },
  },
  {
    path: '/register',
    component: RegisterView,
    meta: { layout: PublicLayout, transition: 'slide-left' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
