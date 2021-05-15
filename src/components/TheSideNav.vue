<template>
  <v-navigation-drawer
    app
    height="100vh"
    color="secondaryOne"
    temporary
    v-model="drawerState"
    @mouseleave.native="toggleSidenav"
  >
    <v-list-item @click="redirectToLogin()" v-if="!isUserAuth" color="accent">
      <v-list-item-content>
        <v-list-item-title>
          Sign In
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item @click="signOut()" v-if="isUserAuth" color="error">
      <v-list-item-content>
        <v-list-item-title>
          Sign Out
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
    ...mapActions(["signOutAction"]),
    redirectToLogin() {
      this.$router.push({ path: "/signin" });
    },
    toggleSidenav() {
      setTimeout(() => {
        this.$store.commit("toggleDrawerState", false);
      }, 500);
    },
    async signOut() {
      await this.signOutAction();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
