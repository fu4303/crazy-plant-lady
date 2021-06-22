<template>
  <h1 class="fontOne--text header" :class="headerDisplay">
    <slot></slot>
  </h1>
</template>

<script>
import { getHeaderDisplay } from "@/utils/formatter";
export default {
  computed: {
    headerDisplay() {
      return getHeaderDisplay(this.$vuetify.breakpoint.name);
    },
  },
};
</script>

<style>
.header {
  cursor: pointer;
}
</style>
