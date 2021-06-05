export default {
  state: {
    drawerState: false,
    theme: "light",
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
