<template>
  <v-app>
    <v-main>
      <TheToolbar></TheToolbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheToolbar from './components/TheToolbar';
export default {
  name: 'App',
  components: {
    TheToolbar,
  },

  data: () => ({
    //
  }),
};
</script>
