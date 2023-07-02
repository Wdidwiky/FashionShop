import { createRouter, createWebHistory } from "vue-router";
import login from "../pages/login.vue";
import signup from "../pages/signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/signup",
      name: "sign",
      component: signup,
    },
  ],
});

export default router;
