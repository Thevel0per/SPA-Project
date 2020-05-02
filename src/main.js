import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import database from "./database";
import axios from "axios";
import "./registerServiceWorker";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  data: {
    db: database,
    loggedUser: null
  },
  render: h => h(App)
}).$mount("#app");
