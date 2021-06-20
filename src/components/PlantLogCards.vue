<template>
  <div class="cards-container">
    <template v-for="item in plantLogEntries">
      <v-card
        max-width="385"
        :key="item.id"
        class="ma-2"
        :class="{ flipIn: isEditMode(item), flipOut: !isEditMode(item) }"
      >
        <!-- start display card -->
        <template v-if="!isEditMode(item)">
          <v-img height="250" src="@/assets/plant-cartoon-img.png"></v-img>
          <v-card-actions class="center card-actions">
            <v-btn icon @click="editItem(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="goToDetails(item)">
              <v-icon>mdi-notebook</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title class="center card-title py-4">
            {{ item.plantName }}
          </v-card-title>
          <v-card-text>
            <v-row justify="center" class="py-4">
              <div class="text-subtitle-1">
                {{ item.plantType }}
              </div>
            </v-row>
            <v-row justify="center" class="py-5">
              <div class="text-subtitle-1">
                {{ item.dateAcquired | formatDate }}
              </div>
            </v-row>
          </v-card-text>
        </template>
        <!-- end display card -->
        <!-- start editable card -->
        <template v-if="isEditMode(item)">
          <v-img height="250" src="@/assets/plant-cartoon-img.png"></v-img>
          <v-card-actions class="center card-actions">
            <v-btn icon @click="saveItem(item)">
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
            <v-btn icon @click="deleteItem(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-title>
            <v-text-field
              v-model="item.plantName"
              :rules="rules"
              hide-details="auto"
              label="Plant Name"
              clearable
              dense
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="item.plantType"
              :rules="rules"
              hide-details="auto"
              label="Plant Type"
              clearable
              dense
            ></v-text-field>
            <div>
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
          </v-card-text>
        </template>
        <!-- end editable card -->
      </v-card>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatFirebaseDate } from "@/utils/DateUtil.js";
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
  filters: {
    formatDate: function (date) {
      if (!date) return "";
      return formatFirebaseDate(date);
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

.flipIn {
  animation: flipInY 1s;
}

.flipOut {
  animation: flipInX 1s;
}

@keyframes flipIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
