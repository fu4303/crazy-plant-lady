<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <h1 class="display-4">Your Dashboard</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          <span class="text-subtitle-2">Last Sign In:</span>
          {{ this.lastSignIn }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { getCurrentDate } from "@/utils/DateUtil";
export default {
  name: "UserDashboard",
  data() {
    return {
      lastSignIn: null,
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    parseLastSignInTime() {
      const unixTime = Date.parse(this.getUser.metadata.lastSignInTime);
      this.lastSignIn = getCurrentDate(unixTime);
    },
  },
  mounted: function() {
    this.parseLastSignInTime();
  },
};
</script>

<style></style>
