<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <PageHeader>{{ plantData.plantName }} Details</PageHeader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="7">
        <vc-date-picker
          v-if="!$vuetify.theme.dark"
          v-model="selectedDate"
          is-expanded
          @dayclick="onDayClick"
        />
        <vc-date-picker
          v-if="$vuetify.theme.dark"
          v-model="selectedDate"
          is-expanded
          @dayclick="onDayClick"
          is-dark
        />
      </v-col>
      <v-col cols="12" md="5">
        <template v-if="formReady">
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="4" md="4">
                  <v-checkbox
                    v-model="detailsForm.didPrune"
                    :label="`Did You Prune Today?`"
                  ></v-checkbox>
                </v-col>
                <v-col cols="4" md="4">
                  <v-checkbox
                    v-model="detailsForm.didFeed"
                    :label="`Did You Feed Today?`"
                  ></v-checkbox>
                </v-col>
                <v-col cols="4" md="4">
                  <v-checkbox
                    v-model="detailsForm.didWater"
                    :label="`Did You Water Today?`"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    name="miscnotes"
                    v-model="detailsForm.miscNotes"
                    filled
                    no-resize
                    rows="3"
                    label="Misc. Notes"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <v-btn class="mt-2" @click="submitPlantDetails()" color="accent">{{
              submitButtonText
            }}</v-btn>
          </v-form>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getDateTextFormat } from "@/utils/DateUtil.js";
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "PlantDetailsDatePicker",
  props: ["plantData"],
  components: {
    PageHeader,
  },
  data() {
    return {
      selectedDate: new Date(),
      detailsForm: null,
      formReady: false,
      submitButtonText: "Update",
    };
  },
  computed: {
    ...mapGetters(["plantDetails"]),
  },
  mounted() {
    this.$store.dispatch("getPlantDetailsByDate", {
      id: this.plantData.id,
      dateText: getDateTextFormat(this.selectedDate),
    });
  },
  watch: {
    plantDetails: function () {
      if (this.plantDetails) {
        this.detailsForm = this.plantDetails;
        this.formReady = true;
      } else {
        this.detailsForm = {
          didFeed: false,
          didPrune: false,
          didWater: false,
          miscNotes: "",
        };
        this.formReady = true;
      }
    },
  },
  methods: {
    ...mapActions(["addPlantDetailsEntry"]),
    onDayClick: function () {
      this.$store.dispatch("getPlantDetailsByDate", {
        id: this.plantData.id,
        dateText:
          this.selectedDate !== null
            ? getDateTextFormat(this.selectedDate)
            : null,
      });
    },
    submitPlantDetails: function () {
      this.addPlantDetailsEntry({
        ...this.detailsForm,
        dateText: getDateTextFormat(this.selectedDate),
        id: this.plantData.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
