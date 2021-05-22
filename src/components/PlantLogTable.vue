<template>
  <v-data-table
    dense
    :headers="headers"
    :items="plantLogEntries"
    item-key="name"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PlantLogTable",
  data() {
    return {
      headers: [
        {
          text: "Plant Name",
          align: "start",
          sortable: false,
          value: "plantName",
        },
        {
          text: "Plant Type",
          align: "start",
          sortable: false,
          value: "plantType",
        },
        {
          text: "Date Acquired",
          align: "start",
          sortable: false,
          value: "dateAcquired",
        },
      ],
      plants: [],
    };
  },
  computed: {
    ...mapGetters(["plantLogEntries"]),
  },
};
</script>

<style></style>
