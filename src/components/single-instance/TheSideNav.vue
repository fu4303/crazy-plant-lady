<template>
  <v-navigation-drawer
    app
    height="100vh"
    color="lighten-4 primaryOne"
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

      <router-link to="/home/dashboard" v-slot="{ isExactActive, navigate }">
        <v-list-item
          class="nav-item"
          :class="{ activeNavItem: isExactActive }"
          @click="navigate"
        >
          <v-list-item-content>
            <v-list-item-title class="nav-item-title">
              <v-icon>mdi-calendar-today</v-icon> User Dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link to="/home/plantlog" v-slot="{ isExactActive, navigate }">
        <v-list-item
          class="nav-item"
          :class="{ activeNavItem: isExactActive }"
          @click="navigate"
        >
          <v-list-item-content>
            <v-list-item-title class="nav-item-title">
              <v-icon>mdi-calendar-today</v-icon> Plant Log
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
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

<style lang="scss">
.nav-item {
  cursor: pointer;
}
.nav-item:hover {
  background-color: $primary;
  .nav-item-title {
    color: darken($dark-gray, 10) !important;
  }
}
.activeNavItem {
  background-color: lighten($primary, 10) !important;
  .nav-item-title {
    color: darken($dark-gray, 5);
  }
}
</style>
