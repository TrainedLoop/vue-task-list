import { createWebHistory, createRouter } from 'vue-router';
import Hello from '@/views/ApiTest.vue';
import Home from '@/views/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/hello',
    name: 'hello',
    component: Hello,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
