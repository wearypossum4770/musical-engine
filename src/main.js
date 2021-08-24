import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import "./assets/css/w3_version_4.css";
// import { createProvider } from "./vue-apollo";
import "./assets/reset.css";

import "./registerServiceWorker";
import i18n from "./i18n";
import store from "./store";
// import '@/assets/js/websocket'
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,

  // apolloProvider: createProvider(),
  render: h => h(App),
}).$mount("#app");
