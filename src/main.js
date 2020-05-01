import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import database from "./database";
import axios from "axios";


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


new Vue({
  router,
  data: {
    db: database
  },
  render: h => h(App)
}).$mount("#app");
