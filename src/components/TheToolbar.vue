<template>
  <v-toolbar dense>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>CrazyPlantPerson</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn @click="redirectToLogin()">Sign In</v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: 'TheToolbar',
  methods: {
    redirectToLogin() {
      this.$router.push({ path: '/signin' });
    },
  },
};
</script>
