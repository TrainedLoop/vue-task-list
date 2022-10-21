import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Hello from "@/views/ApiTest.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/hello",
    name: "hello",
    component: Hello,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
