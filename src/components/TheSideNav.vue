<template>
  <v-navigation-drawer app v-model="drawerState">
    <v-list-item>
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
export default {
  name: "TheSideNav",
  computed: {
    drawerState: {
      get() {
        return this.$store.getters.drawerState;
      },
      set(v) {
        return this.$store.commit("toggleDrawerState", v);
      },
    },
  },
};
</script>

<style></style>
