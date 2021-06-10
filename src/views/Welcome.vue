<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <h1 class="text-h1 headline">CrazyPlantPerson</h1>
      </v-col>
      <v-col>
        <v-row>
          <v-col md="10" offset-md="3">
            <p class="body-1 mt-2">
              The simplest way to keep up with your plants. Sign up and start
              logging your plants activities today for free. Take the guesswork
              out of taking care of your plants. Your plants will thank you.
              What are you waiting for?
            </p>
            <v-row>
              <v-col>
                <v-btn @click="register()" color="accent"
                  >Create Account</v-btn
                ></v-col
              >
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <v-img
          src="@/assets/monstera.png"
          max-height="450"
          max-width="200"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {};
  },
  methods: {
    register() {
      this.$router.push({
        name: "register",
      });
    },
  },
};
</script>

<style lang="scss">
.headline {
  text-shadow: -2px 5px 6px rgba(150, 150, 150, 1);
}
</style>
