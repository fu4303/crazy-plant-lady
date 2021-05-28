<template>
  <div>
    <h1>Your Plant Log</h1>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col>
          {{ plantLogEntries.length ? hasPlantsText : noPlantsText }}
        </v-col>
        <v-col>
          <v-btn elevation="10" fab color="primary" @click="addPlantToLog"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <PlantLogTable></PlantLogTable>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PlantLogTable from "@/components/PlantLogTable.vue";
export default {
  components: { PlantLogTable },
  name: "PlantLog",
  data() {
    return {
      hasPlantsText: "Welcome Back",
      noPlantsText:
        "You have no plants in your log, click the button to add one",
    };
  },
  computed: {
    ...mapGetters(["plantLogEntries"]),
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

<style></style>
