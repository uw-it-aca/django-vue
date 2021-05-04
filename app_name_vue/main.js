// These insert the polyfills to support older browsers (ie 11)
// should be only included once for each entrypoint
import "core-js";
import "regenerator-runtime/runtime";

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from "vue-gtag";
import VueMq from 'vue-mq';
import BootstrapVue from 'bootstrap-vue';

import App from "./App.vue";
import Home from './pages/home.vue';
import About from './pages/about.vue';

// custom theming and global styles
import './css/custom.scss';
import './css/global.scss';

// MARK: google analytics data stream measurement_id
const gaCode = document.body.getAttribute('google-analytics');
const debugMode = document.body.getAttribute('django-debug');

Vue.use(VueRouter);
Vue.use(BootstrapVue);

var router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    { path: '/about/', component: About },
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
