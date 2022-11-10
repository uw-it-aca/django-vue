import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGtag from "vue-gtag-next";
import { Vue3Mq, MqResponsive } from "vue3-mq";
import AxddComponents from "axdd-components";

import App from "./app.vue";
import router from "./router";

// bootstrap js
import "bootstrap";

// custom bootstrap theming
import "./css/custom.scss";

const pinia = createPinia();
const app = createApp(App);

// MARK: google analytics data stream measurement_id
const gaCode = document.body.getAttribute("data-google-analytics");
const debugMode = document.body.getAttribute("data-django-debug");

app.config.productionTip = false;

// vue-gtag-next
app.use(VueGtag, {
  isEnabled: debugMode == "false",
  property: {
    id: gaCode,
    params: {
      anonymize_ip: true,
      // user_id: 'provideSomeHashedId'
    },
  },
});

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

// pinia (vuex) state management
app.use(pinia);

// axdd-components
app.use(AxddComponents);

// vue-router
app.use(router);

app.mount("#app");
