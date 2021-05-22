<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">
          Plant Name
        </th>
        <th class="text-left">
          Plant Type
        </th>
        <th class="text-left">
          Date Acquired
        </th>
        <th class="text-left">
          Edit
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in plantLogEntries" :key="item.plantName">
        <td>{{ item.plantName }}</td>
        <td>{{ item.plantType }}</td>
        <td>{{ item.dateAcquired }}</td>
        <td>edit</td>
      </tr>
    </tbody>
  </v-simple-table>
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
  methods: {
    editItem(item) {
      console.log(item);
    },
    deleteItem(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="scss" scoped>
table,
th,
td {
  border: 0.5px solid lighten($dark-gray, 20);
  border-collapse: collapse;
}
</style>
