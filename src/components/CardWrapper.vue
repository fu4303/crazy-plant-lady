<template>
  <v-container>
    <v-row class="mb-6" no-gutters>
      <v-col md="6" offset-md="3">
        <v-card elevation="10" class="pa-5 mt-3" color="primaryTwo">
          <v-container>
            <v-row>
              <v-col align-self="center"
                ><span class="title font-weight-light">{{
                  headertext
                }}</span></v-col
              >
              <v-col>
                <v-img
                  v-if="!$vuetify.theme.dark"
                  src="@/assets/cpp-house.png"
                  max-height="110"
                  max-width="227"
                ></v-img>
                <v-img
                  v-else
                  src="@/assets/cpp-house-dark-theme.png"
                  max-height="110"
                  max-width="227"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
          <slot></slot>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "CardWrapper",
  props: {
    headertext: String,
  },
};
</script>
