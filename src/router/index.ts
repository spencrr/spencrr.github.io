import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/About.vue"),
      },
      {
        path: "projects",
        name: "projects",
        component: () => import("@/views/Projects.vue"),
      },
      {
        path: "coursework",
        name: "coursework",
        component: () => import("@/views/Coursework.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
