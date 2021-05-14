<template>
  <v-toolbar color="primary">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-img src="@/assets/cpp.png" max-height="110" max-width="227"></v-img>

    <v-spacer></v-spacer>
    <v-btn @click="redirectToLogin()" v-if="!isUserAuth" color="accent"
      >Sign In</v-btn
    >
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TheToolbar",
  methods: {
    redirectToLogin() {
      this.$router.push({ path: "/signin" });
    },
  },
  computed: {
    ...mapGetters(["isUserAuth"]),
  },
};
</script>
