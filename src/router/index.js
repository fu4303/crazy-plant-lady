import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";

Vue.use(VueRouter);

const lazy = (view) => () => import(`@/views/${view}.vue`);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.isUserAuthenticated) {
        next("/signin");
      } else {
        next();
      }
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: lazy("Login"),
  },
  {
    path: "/register",
    name: "register",
    component: lazy("Register"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
