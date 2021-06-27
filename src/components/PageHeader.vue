<template>
  <div class="header-container">
    <v-btn icon color="secondaryOne" @click="goBack()">
      <v-icon>mdi-chevron-left-circle</v-icon>
    </v-btn>
    <h1 class="fontOne--text header" :class="headerDisplay">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
import { getHeaderDisplay } from "@/utils/formatter";
export default {
  computed: {
    headerDisplay() {
      return getHeaderDisplay(this.$vuetify.breakpoint.name);
    },
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  v-btn {
    justify-self: flex-start;
  }
  .header {
    align-self: center;
    cursor: pointer;
  }
}
</style>
