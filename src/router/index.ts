import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import isLog from "@/plugins/loginCheck";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/consultations",
      name: "consultations",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/APIConsultationsView.vue"),
    },
    {
      path: "/consultation/:id",
      name: "show_consultation",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/APIShowConsultationView.vue"),
    },
    {
      path: "/logout",
      name: "logout",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LogoutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !isLog()) {
    next({ name: "login" });
  } else {
    if (to.name === "login" && isLog()) {
      next({ name: "consultations" });
    }

    next();
  }
});

export default router;
