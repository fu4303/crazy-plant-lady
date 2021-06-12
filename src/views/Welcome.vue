<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center pb-5">
          <h1 class="text-h1 headline">CrazyPlantPerson</h1>
        </v-col>
      </v-row>
      <div class="pt-11"></div>
      <v-row>
        <v-col class="d-flex justify-center align-center">
          <div data-aos="fade-in" data-aos-duration="1500">
            <p class="text-h4 mt-2">
              Take the guesswork out of taking care of your plants. <br />Your
              plants will thank you.
            </p>
          </div>
        </v-col>
        <v-col
          ><v-img
            src="@/assets/plant-water-lady.png"
            max-height="600"
            max-width="490"
          ></v-img
        ></v-col>
      </v-row>
      <div class="pt-16"></div>
      <v-row>
        <v-col>
          <h2 class="text-h3 d-flex justify-center align-center">Features</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div data-aos="fade-right" data-aos-duration="2000">
            <v-img
              src="@/assets/plant-lady-2.png"
              max-height="600"
              max-width="460"
            ></v-img>
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-center">
          <div data-aos="fade-left" data-aos-duration="1600">
            <h2>Calendar</h2>
            <p class="body-1 mt-2">
              Easily track your all of your plants with our calendar based
              journal. Each of your plants will have their own calendar where
              you can keep a full history of your plant.
            </p>
          </div>
        </v-col>
      </v-row>
      <div class="pt-16"></div>
      <v-row>
        <v-col class="d-flex justify-center align-center">
          <div data-aos="fade-right" data-aos-duration="1600">
            <h2>Dashboard</h2>
            <p class="body-1 mt-2">
              We give you the tools and insights that you need. Get a snapshot
              of your most recent events, add notes for yourself, view your last
              login date and time, and more.
            </p>
          </div>
        </v-col>
        <v-col>
          <div data-aos="fade-left" data-aos-duration="2000">
            <v-img
              src="@/assets/plant-lady-1.png"
              max-height="600"
              max-width="460"
            ></v-img>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-md="1">
          <div data-aos="fade-right" data-aos-duration="2200">
            <v-img
              src="@/assets/sleeping-cactus.png"
              max-height="600"
              max-width="300"
            ></v-img>
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-center" md="4">
          <div data-aos="fade-left" data-aos-duration="2100">
            <p class="mt-2">
              <strong class="text-h3 red--text text--lighten-1">"</strong>
              <span class="quote-text">
                The lesson I have thoroughly learnt, and wish to pass on to
                others, is to know the enduring happiness that the love of a
                garden gives. </span
              ><span class="text-h3 red--text text--lighten-1">"</span>
              <br />
              Gertrude Jekyll
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="pt-16"></div>
    <v-footer color="primary darken-1">
      <v-row justify="center">
        <v-col class="d-flex justify-center align-center mt-1">
          <p>CrazyPlantPerson</p>
        </v-col>
        <v-col class="primary darken-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} <strong>JasonFritsche</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
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
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@1,500&display=swap");
.headline {
  text-shadow: -2px 5px 6px darken(#d4d4d4, 15);
  transition: 0.3s;
}
.headline:hover {
  cursor: default;
  text-shadow: -2px 7px 7px darken(#d4d4d4, 35);
}
.spacer {
  margin-top: 10rem;
}
.quote-text {
  font-family: "Karla", sans-serif;
  font-size: 1.5rem;
}
</style>
