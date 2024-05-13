import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //import.meta.env.BASE_URL
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "HomeView",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "/about",
          name: "AboutMeView",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          name: "NotFound",
          component: () => import("@/views/NotFound.vue"),
          meta: { title: "404 Not Found" },
        },
      ],
    },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("@/views/AuthView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  const currentEmail = localStorage.getItem("email");
  if (currentEmail && to.name === "AuthView") {
    return { name: "HomeView" };
  } else if (!currentEmail && to.name === "HomeView") {
    return { name: "Auth" };
  }
});

export default router;
