<template>
  <v-app>
    <v-main>
      <TheToolbar></TheToolbar>
      <router-view />
      <section v-if="isUserAuth" class="section">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            Welcome {{ getUser.email }}
          </div>
        </div>
      </section>
    </v-main>
  </v-app>
</template>

<script>
import TheToolbar from './components/TheToolbar';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    TheToolbar,
  },
  computed: {
    ...mapGetters(['getUser', 'isUserAuth']),
  },
  data: () => ({
    //
  }),
};
</script>
