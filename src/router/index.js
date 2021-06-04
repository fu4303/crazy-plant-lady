import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "@/views/user/UserHome.vue";
import Welcome from "../views/Welcome.vue";
import PlantLog from "@/views/user/PlantLog.vue";
import UserDashboard from "@/views/user/UserDashboard.vue";
import PlantDetailsDatePicker from "@/views/user/PlantDetailsDatePicker.vue";

Vue.use(VueRouter);

const lazy = (view) => () => import(`@/views/${view}.vue`);

const routes = [
  {
    path: "/",
    component: Welcome,
  },
  {
    path: "/home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.isUserAuthenticated) {
        next("/signin");
      } else {
        next();
      }
    },
    children: [
      {
        path: "",
        redirect: "dashboard",
      },
      {
        path: "plantlog",
        component: PlantLog,
      },
      {
        path: "dashboard",
        component: UserDashboard,
      },
      {
        path: "plantdetailscalendar/:id",
        name: "plantdetailscalendar",
        component: PlantDetailsDatePicker,
        props: true,
      },
    ],
  },
  {
    path: "/signin",
    component: lazy("Login"),
  },
  {
    path: "/register",
    component: lazy("Register"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
