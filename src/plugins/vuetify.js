import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primaryOne: colors.green.lighten4,
        primaryTwo: colors.blue.lighten4,
        secondaryOne: colors.cyan.lighten5,
        secondaryTwo: colors.purple.lighten4,
        accent: colors.blueGrey.darken1,
        error: colors.red.accent3,
        background: colors.green.accent2,
        fontOne: colors.blue.darken4,
        iconOne: colors.teal.darken1,
        iconTwo: colors.blueGrey.darken1,
      },
      dark: {
        primaryOne: colors.teal.darken4,
        primaryTwo: colors.blueGrey.darken4,
        secondaryOne: colors.cyan.darken4,
        secondaryTwo: colors.indigo.darken3,
        accent: colors.blue.darken1,
        error: colors.red.darken1,
        background: colors.grey.darken4,
        fontOne: colors.lightBlue.lighten2,
        iconOne: colors.teal.lighten1,
        iconTwo: colors.purple.lighten2,
      },
    },
  },
});
