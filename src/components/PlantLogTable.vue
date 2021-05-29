<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-center">
          Plant Name
        </th>
        <th class="text-center">
          Plant Type
        </th>
        <th class="text-center">
          Date Acquired
        </th>
        <th class="text-center">
          Edit
        </th>
        <th class="text-center">
          Details
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in plantLogEntries" :key="item.id">
        <template>
          <td>
            <v-text-field
              v-model="item.plantName"
              :rules="rules"
              hide-details="auto"
              dense
              :filled="isEditRowMode(item)"
              :readonly="!isEditRowMode(item)"
              :disabled="!isEditRowMode(item)"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="item.plantType"
              :rules="rules"
              hide-details="auto"
              dense
              :filled="isEditRowMode(item)"
              :readonly="!isEditRowMode(item)"
              :disabled="!isEditRowMode(item)"
            ></v-text-field>
          </td>
          <td>
            <template>
              <vc-date-picker
                class="inline-block h-full"
                v-model="item.dateAcquired"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <div class="flex items-center">
                    <v-btn
                      icon
                      @click="togglePopover()"
                      :disabled="!isEditRowMode(item)"
                      ><v-icon>mdi-calendar-month</v-icon></v-btn
                    >
                    <input
                      :value="inputValue"
                      class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                      readonly
                    />
                  </div>
                </template>
              </vc-date-picker>
            </template>
          </td>
        </template>

        <td>
          <v-btn v-if="!isEditRowMode(item)" icon @click="editItem(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn v-if="isEditRowMode(item)" icon @click="saveItem(item)">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
          <v-btn icon @click="deleteItem(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
        <td>
          <v-btn icon @click="goToDetails(item)">
            <v-icon>mdi-notebook</v-icon>
          </v-btn>
        </td>
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
      date: new Date(),
      showDatePicker: false,
      editRow: {
        editRowId: null,
        isEditRowMode: false,
        plantType: null,
        plantName: null,
        dateAcquired: new Date(),
      },
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
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
    };
  },
  computed: {
    ...mapGetters(["plantLogEntries"]),
  },
  mounted() {
    this.editRowMode = false;
    if (this.plantLogEntries && this.plantLogEntries.length > 0) return;
    this.$store.dispatch("getAllPlants"); // already fetched.
  },
  methods: {
    editItem(item) {
      this.editRow.editRowId = item.id;
      this.editRow.isEditRowMode = true;
    },
    saveItem(item) {
      this.editRow.isEditRowMode = false;
      this.$store.dispatch("updatePlantEntry", item);
    },
    deleteItem(item) {
      this.$store.dispatch("deletePlantEntry", item);
    },
    isEditRowMode(item) {
      if (
        this.editRow.editRowId === item.id &&
        this.editRow.isEditRowMode === true
      ) {
        return true;
      } else {
        return false;
      }
    },
    selectDateAcquired(item) {
      if (this.isEditRowMode(item)) {
        this.showDatePicker = true;
        console.log("is in edit mode");
      }
    },
    goToDetails(item) {
      this.$router.push({
        name: "plantdetails",
        params: { id: item.id, plantData: item },
      });
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
