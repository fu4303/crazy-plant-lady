<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <SectionHeader>
          <template v-slot:title>My Plants</template>
          <template v-slot:tooltip>All of your plants are listed here</template>
        </SectionHeader>
        <!-- list of all plants -->
        <v-list rounded>
          <v-list-item-group v-model="selectedPlantIndex" color="primary">
            <v-list-item v-for="(item, i) in plantLogEntries" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="item.plantName"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="6">
        <!-- selected plant details -->
        <PlantCard :plant="plantLogEntries[selectedPlantIndex]"></PlantCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import SectionHeader from "@/components/SectionHeader.vue";
import PlantCard from "./PlantCard.vue";
export default {
  components: { PlantCard, SectionHeader },
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
      return;
    }
    this.$store.dispatch("getAllPlants"); // already fetched.
  },
};
</script>

<style></style>
