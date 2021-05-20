<template>
  <v-app>
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
export default {
  name: "App",
  components: {
    TheToolbar,
    TheSideNav,
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
  data: () => ({
    //
  }),
};
</script>
