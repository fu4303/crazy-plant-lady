export default {
  state: {
    drawerState: false,
    theme: "dark",
  },

  mutations: {
    toggleDrawerState(state, payload) {
      state.drawerState = payload;
    },
    setCurrentTheme(state, data) {
      state.theme = data;
    },
  },
  getters: {
    theme: (state) => state.theme,
    drawerState: (state) => state.drawerState,
  },
};
