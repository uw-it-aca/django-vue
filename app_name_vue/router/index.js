import { createRouter, createWebHistory } from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";

import Customize from "@/pages/customize.vue";
import Home from "@/pages/home.vue";

// manually added routes (old way)
const manualRoutes = [
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
  routes: [...manualRoutes, ...routes],
});

if (import.meta.hot) {
  handleHotUpdate(router);
}
export default router;
