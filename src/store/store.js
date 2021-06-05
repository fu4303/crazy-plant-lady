import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import auth from "./modules/auth";
import plant from "./modules/plant";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    app,
    plant,
  },
});
