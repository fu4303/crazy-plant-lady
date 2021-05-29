<template>
  <div>
    <div class="plant-deets-heading">
      <h1>{{ plantData.plantName }} Details</h1>
    </div>
    <v-container>
      <v-row>
        <v-col cols="7">
          <vc-calendar
            is-expanded
            :attributes="attributes"
            @dayclick="onDayClick"
          />
        </v-col>
        <v-col cols="5">
          details
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PlantDetails",
  props: ["plantData"],
  data() {
    return {
      days: [],
    };
  },
  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick(day) {
      console.log(day);
      // TODO query firestore to see if we have any data for the clicked day
      // If we have data, we show it in the details form, if we don't, we show a blank details form
    },
  },
};
</script>

<style lang="scss" scoped>
.plant-deets-heading {
  padding: 3rem;
  h1 {
    text-align: center;
  }
}
</style>
