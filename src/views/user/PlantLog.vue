<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <PageHeader>Your Plant Log</PageHeader>
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
          <PlantLogList></PlantLogList>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader.vue";
import PlantLogList from "@/components/PlantLogList.vue";
import { v4 as uuidv4 } from "uuid";
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";
export default {
  components: { PageHeader, PlantLogList },
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
  },
  methods: {
    addPlantToLog() {
      const newPlant = {
        plantName: uniqueNamesGenerator({
          dictionaries: [adjectives, animals],
          length: 2,
        }),
        plantType: "plant type",
        watch: false,
        id: uuidv4(),
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
