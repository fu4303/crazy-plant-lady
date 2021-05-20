<template>
  <v-data-table
    dense
    :headers="headers"
    :items="plants"
    item-key="name"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "PlantLogTable",
  data() {
    return {
      headers: [
        {
          text: "Plant Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Plant Type",
          align: "start",
          sortable: false,
          value: "type",
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
};
</script>

<style></style>
