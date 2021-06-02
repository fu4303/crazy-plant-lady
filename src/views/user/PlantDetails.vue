<template>
  <div>
    <div class="plant-deets-heading">
      <h1>{{ plantData.plantName }} Details</h1>
    </div>
    <v-container>
      <v-row>
        <v-col cols="7">
          <vc-date-picker
            v-model="selectedDate"
            is-expanded
            @dayclick="onDayClick"
          />
        </v-col>
        <v-col cols="5">
          <template v-if="plantDetails">
            <div>Did Feed: {{ plantDetails.didFeed }}</div>
            <div>Did Prune: {{ plantDetails.didPrune }}</div>
            <div>Did Water: {{ plantDetails.didWater }}</div>
            <div>Misc Notes: {{ plantDetails.miscNotes }}</div>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getDateTextFormat } from "@/utils/DateUtil.js";
export default {
  name: "PlantDetails",
  props: ["plantData"],
  data() {
    return {
      selectedDate: new Date(),
    };
  },
  computed: {
    ...mapGetters(["plantDetails"]),
  },
  mounted() {
    this.$store.dispatch("getPlantDetailsByDate", {
      id: this.plantData.id,
      dateText: getDateTextFormat(this.selectedDate),
    });
  },
  methods: {
    onDayClick: function () {
      console.log(this.selectedDate);
      this.$store.dispatch("getPlantDetailsByDate", {
        id: this.plantData.id,
        dateText:
          this.selectedDate !== null
            ? getDateTextFormat(this.selectedDate)
            : null,
      });
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
