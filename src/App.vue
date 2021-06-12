<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-main>
      <TheSideNav></TheSideNav>
      <TheToolbar></TheToolbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheToolbar from "./components/single-instance/TheToolbar";
import TheSideNav from "./components/single-instance/TheSideNav";
import { mapGetters } from "vuex";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "App",
  components: {
    TheToolbar,
    TheSideNav,
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  data: () => ({
    //
  }),
  beforeCreate() {
    AOS.init({
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 220, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  },
};
</script>
