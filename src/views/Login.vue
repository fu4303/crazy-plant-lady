<template>
  <v-container>
    <v-row class="mb-6" no-gutters>
      <v-col md="6" offset-md="3">
        <v-card elevation="5" class="pa-5">
          <v-card-title class="text-h5">Sign In</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field label="email"></v-text-field>
            <v-text-field label="password"></v-text-field>
            <v-btn>Sign In</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
