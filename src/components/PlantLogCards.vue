<template>
  <div class="cards-container">
    <template v-for="item in plantLogEntries">
      <v-card class="ma-12" max-width="385" :key="item.id">
        <v-card-actions class="center card-actions">
          <v-btn v-if="!isEditMode(item)" icon @click="editItem(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn v-if="isEditMode(item)" icon @click="saveItem(item)">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
          <v-btn icon @click="deleteItem(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn icon @click="goToDetails(item)">
            <v-icon>mdi-notebook</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-title class="center card-title my-6" v-if="!isEditMode(item)">
          {{ item.plantName }}
        </v-card-title>
        <v-card-title v-if="isEditMode(item)">
          <v-text-field
            v-model="item.plantName"
            :rules="rules"
            hide-details="auto"
            dense
            label="Plant Name"
            clearable
            :filled="isEditMode(item)"
            :readonly="!isEditMode(item)"
            :disabled="!isEditMode(item)"
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-row justify="center" class="my-6">
            <div class="my-4 text-subtitle-1" v-if="!isEditMode(item)">
              {{ item.plantType }}
            </div>
            <div class="text-subtitle-1" v-if="isEditMode(item)">
              <v-text-field
                v-model="item.plantType"
                :rules="rules"
                hide-details="auto"
                dense
                label="Plant Type"
                clearable
                :filled="isEditMode(item)"
                :readonly="!isEditMode(item)"
                :disabled="!isEditMode(item)"
              ></v-text-field>
            </div>
          </v-row>
          <v-row justify="center" class="my-6">
            <div class="my-4">
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
                        :disabled="!isEditMode(item)"
                        ><v-icon>mdi-calendar-month</v-icon></v-btn
                      >
                      <input
                        :value="inputValue"
                        class="
                          bg-white
                          text-gray-700
                          w-full
                          py-1
                          px-2
                          appearance-none
                          border
                          rounded-r
                          focus:outline-none focus:border-blue-500
                        "
                        readonly
                      />
                    </div>
                  </template>
                </vc-date-picker>
              </template>
            </div>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PlantLogCards",
  data() {
    return {
      date: new Date(),
      showDatePicker: false,
      editMode: {
        editModeId: null,
        isEditMode: false,
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
    this.editModeMode = false;
    if (this.plantLogEntries && this.plantLogEntries.length > 0) return;
    this.$store.dispatch("getAllPlants"); // already fetched.
  },
  methods: {
    editItem(item) {
      this.editMode.editModeId = item.id;
      this.editMode.isEditMode = true;
    },
    saveItem(item) {
      console.log(item);
      this.editMode.isEditMode = false;
      this.$store.dispatch("updatePlantEntry", item);
    },
    deleteItem(item) {
      this.$store.dispatch("deletePlantEntry", item);
    },
    isEditMode(item) {
      if (
        this.editMode.editModeId === item.id &&
        this.editMode.isEditMode === true
      ) {
        return true;
      } else {
        return false;
      }
    },
    selectDateAcquired(item) {
      if (this.isEditMode(item)) {
        this.showDatePicker = true;
      }
    },
    goToDetails(item) {
      this.$router.push({
        name: "plantdetailscalendar",
        params: { id: item.id, plantData: item },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.center {
  justify-content: center;
}
</style>
