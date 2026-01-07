import { createRouter, createWebHistory } from "vue-router";

// vue-gtag-next track routing
// import { trackRouter } from "vue-gtag-next";

import Customize from "@/pages/customize.vue";
// page components
import Home from "@/pages/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/customize",
    name: "Customize",
    component: Customize,
    pathToRegexpOptions: { strict: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// add router tracking to vue-gtag-next
// trackRouter(router);

export default router;
