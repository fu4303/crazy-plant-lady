<template>
  <v-navigation-drawer
    app
    v-model="drawerState"
    @mouseout.native="toggleSidenav"
  >
    <v-list-item @click="redirectToLogin()" v-if="!isUserAuth" color="accent">
      <v-list-item-content>
        <v-list-item-title>
          Sign In
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheSideNav",
  computed: {
    ...mapGetters(["isUserAuth"]),
    drawerState: {
      get() {
        return this.$store.getters.drawerState;
      },
      set(toggle) {
        return this.$store.commit("toggleDrawerState", toggle);
      },
    },
  },
  methods: {
    redirectToLogin() {
      this.$router.push({ path: "/signin" });
    },
    toggleSidenav() {
      this.$store.commit("toggleDrawerState", false);
    },
  },
};
</script>

<style></style>
