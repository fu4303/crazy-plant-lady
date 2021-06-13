import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";
import VCalendar from "./plugins/VCalendar";
import "@/plugins/firebase";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  VCalendar,
  render: (h) => h(App),
}).$mount("#app");
