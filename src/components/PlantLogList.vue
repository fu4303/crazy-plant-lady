<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- list of all plants -->
        <v-list rounded>
          <v-subheader>My Plants</v-subheader>
          <v-list-item-group v-model="selectedPlantIndex" color="primary">
            <v-list-item v-for="(item, i) in plantLogEntries" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="item.plantName"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col>
        <!-- selected plant details -->
        <PlantCard :plant="plantLogEntries[selectedPlantIndex]"></PlantCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PlantCard from "./PlantCard.vue";
export default {
  components: { PlantCard },
  data() {
    return {
      selectedPlantIndex: 0,
    };
  },
  computed: {
    ...mapGetters(["plantLogEntries"]),
  },
  mounted() {
    if (this.plantLogEntries && this.plantLogEntries.length > 0) {
      console.log(this.plantLogEntries);
      return;
    }
    this.$store.dispatch("getAllPlants"); // already fetched.
  },
};
</script>

<style></style>
