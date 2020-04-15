import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import database from "./database";

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    db: database
  },
  render: h => h(App)
}).$mount("#app");
