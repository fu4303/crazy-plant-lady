<template>
  <div class="section-header-container">
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <h1
          class="fontTwo--text header font-weight-regular mt-5 pb-3"
          :style="{ fontSize: getFontSize + 'px' }"
          v-bind="attrs"
          v-on="on"
        >
          <slot name="title"></slot>
        </h1>
      </template>
      <span><slot name="tooltip"></slot></span>
    </v-tooltip>
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  computed: {
    getFontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 18;
        case "sm":
          return 20;
        case "md":
          return 22;
        default:
          return 24;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.section-header-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .section-header {
    cursor: pointer;
  }
}
.section-header-container:hover {
  cursor: default;
}
</style>
