<template>
  <v-navigation-drawer
    app
    height="100vh"
    color="secondaryOne"
    temporary
    v-model="drawerState"
    @mouseleave.native="toggleSidenav"
  >
    <v-list v-if="!isUserAuth">
      <v-list-item @click="redirectToLogin()">
        <v-list-item-content>
          <v-list-item-title>
            Sign In
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list v-if="isUserAuth">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            {{ getUser.email }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="signOut()">
        <v-list-item-content>
          <v-list-item-title>
            Sign Out
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheSideNav",
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
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
