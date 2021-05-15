<template>
  <v-app-bar color="primaryOne">
    <v-app-bar-nav-icon
      @click="openNavigation"
      v-if="!drawerState"
    ></v-app-bar-nav-icon>
    <v-img src="@/assets/cpp.png" max-height="110" max-width="227"></v-img>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TheToolbar",
  methods: {
    openNavigation() {
      this.$store.commit("toggleDrawerState", !this.drawerState);
    },
  },
  computed: {
    ...mapGetters(["isUserAuth", "drawerState"]),
  },
};
</script>
