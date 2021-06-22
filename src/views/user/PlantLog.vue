<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <h1 class="fontOne--text header" :class="headerDisplay">
            Your Plant Log
          </h1>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col>
          {{ plantLogEntries.length ? hasPlantsText : noPlantsText }}
        </v-col>
        <v-col align="right" class="pr-5">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                elevation="10"
                fab
                color="primary"
                @click="addPlantToLog"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </template>
            <span>Add A Plant</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <PlantLogCards></PlantLogCards>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PlantLogCards from "@/components/PlantLogCards.vue";
import { getHeaderDisplay } from "@/utils/formatter";
export default {
  components: { PlantLogCards },
  name: "PlantLog",
  data() {
    return {
      hasPlantsText: "",
      noPlantsText:
        "You have no plants in your log, click the button to add one",
    };
  },
  computed: {
    ...mapGetters(["plantLogEntries"]),
    headerDisplay() {
      return getHeaderDisplay(this.$vuetify.breakpoint.name);
    },
  },
  methods: {
    addPlantToLog() {
      const newPlant = {
        plantName: "-",
        plantType: "-",
        dateAcquired: new Date(),
      };
      this.$store.dispatch("addPlantToLog", newPlant);
    },
  },
};
</script>

<style lang="scss" scoped>
.plantLogHeader {
  margin: auto;
  width: 50%;
}

.header:hover {
  cursor: default;
}
</style>
