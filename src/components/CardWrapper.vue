<template>
  <v-container>
    <v-row class="mb-6" no-gutters>
      <v-col md="6" offset-md="3">
        <v-card elevation="10" class="pa-5 mt-3">
          <slot></slot>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'CardWrapper',
};
</script>
