import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Coursework from "@/views/Coursework.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/projects",
        name: "projects",
        component: Projects,
    },
    {
        path: "/coursework",
        name: "coursework",
        component: Coursework,
    },
];

const router = new VueRouter({ routes });

export default router;
