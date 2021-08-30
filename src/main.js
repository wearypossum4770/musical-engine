import App from "./App.vue";
import router from "./router";
import Vue from "vue";
import i18n from "./i18n";
import store from "./store";
import socket from "./plugins/websocket";
import "./plugins/axios";
import "./assets/css/w3_version_4.css";
// import { createProvider } from "./vue-apollo";
import "./assets/reset.css";
import "./registerServiceWorker";
// import "@/assets/js/websocket";

Vue.config.productionTip = false;
new Vue({
  router,
  i18n,
  store,
  socket,
  // apolloProvider: createProvider(),
  render: h => h(App),
}).$mount("#app");
