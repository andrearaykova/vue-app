import Vue from "vue";
import "./plugins/vuetify.js";
import App from "./App.vue";
import router from "./router";
import { auth } from "./db/index";

Vue.config.productionTip = false;
let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
