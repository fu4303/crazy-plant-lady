<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <PageHeader>Your Dashboard</PageHeader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-list dense>
          <v-subheader>My Watch List</v-subheader>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in watchlist" :key="i">
              <v-list-item-content @click="routeToPlant(item)">
                <v-list-item-title v-text="item.plantName"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col>
            <v-textarea
              name="my-notes"
              label="My Notes"
              v-model="notesText"
              :loading="!notesLoaded"
              :disabled="!notesLoaded"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="submitNotes">Submit</v-btn>
            <v-btn @click="clearNotes">clear</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "UserDashboard",
  components: { PageHeader },
  data() {
    return {
      notesText: "",
      notesLoaded: false,
      notesId: null,
      selectedItem: 1,
    };
  },
  computed: {
    ...mapGetters(["dashboardNotes", "watchlist"]),
  },
  watch: {
    dashboardNotes: function () {
      this.notesText = this.dashboardNotes.notes;
      this.notesId = this.dashboardNotes.id;
      this.notesLoaded = true;
    },
  },
  methods: {
    ...mapActions(["updateDashboardNotes"]),
    submitNotes() {
      this.updateDashboardNotes({ notes: this.notesText, id: this.notesId });
    },
    clearNotes() {
      this.notesText = "";
    },
    routeToPlant(plant) {
      this.$router.push({
        name: "plantdetailscalendar",
        params: { plantData: plant, id: plant.id },
      });
    },
  },
  mounted: function () {
    this.$store.dispatch("getDashboardNotes");
    if (this.watchlist && this.watchlist.length > 0) return;
    this.$store.dispatch("getWatchlistPlants"); // already fetched.
  },
};
</script>

<style></style>
