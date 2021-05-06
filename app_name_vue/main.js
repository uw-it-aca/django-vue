// These insert the polyfills to support older browsers (ie 11)
// should be only included once for each entrypoint
import "core-js";
import "regenerator-runtime/runtime";

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from "vue-gtag";
import VueMq from 'vue-mq';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import App from "./app.vue";
import Home from './pages/home.vue';
import Customize from './pages/customize.vue';

// custom theming and global styles
import './css/custom.scss';
import './css/global.scss';

// MARK: google analytics data stream measurement_id
const gaCode = document.body.getAttribute('google-analytics');
const debugMode = document.body.getAttribute('django-debug');

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

var router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    { path: '/customize/', component: Customize },
  ]
});

// vue-gtag
Vue.use(VueGtag, {
  config: {
    id: gaCode,
    params: {
      anonymize_ip: true,
    },
  },
  enabled: debugMode == 'true',
});

Vue.use(VueMq, {
  breakpoints: {
    // default mobile is 320px - 767px
    mobile: 767, // tablet begins 768px
    tablet: 991, // desktop begins 992px
    desktop: Infinity,
  }
});

export const dataBus = new Vue();

// vue app will be rendered inside of #main div found in index.html using webpack_loader
new Vue({
  router,
  render: h => h(App)
}).$mount("#main");
