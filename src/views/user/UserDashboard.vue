<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <PageHeader>Your Dashboard</PageHeader>
      </v-col>
    </v-row>
    <v-row>
      <v-col> Watch List </v-col>
      <v-col>
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
    };
  },
  computed: {
    ...mapGetters(["dashboardNotes"]),
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
  },
  mounted: function () {
    console.log("mounted");
    this.$store.dispatch("getDashboardNotes");
  },
};
</script>

<style></style>
