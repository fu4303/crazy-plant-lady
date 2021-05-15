import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";

Vue.use(Vuex);

const initialState = () => {
  return {
    drawerState: false,
    user: null,
    error: null,
    isUserAuthenticated: false,
  };
};
export default new Vuex.Store({
  state: initialState(),
  mutations: {
    toggleDrawerState(state, payload) {
      state.drawerState = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setUserAuth(state, payload) {
      state.isUserAuthenticated = payload;
    },
  },
  actions: {
    signUpAction({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          commit("setUser", response.user);
        })
        .catch((error) => {
          commit("setError", error.message);
        });
    },
    signInAction({ commit }, payload) {
      return firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          commit("setUser", response.user);
        })
        .catch((error) => {
          commit("setError", error.message);
        });
    },
    async signOutAction({ commit }) {
      try {
        await firebase.auth().signOut();
        commit("setUser", null);
        commit("setUserAuth", false);
      } catch (err) {
        commit("setError", err.message);
      }
    },
  },
  modules: {},
  getters: {
    drawerState: (state) => state.drawerState,
    getUser: (state) => state.user,
    isUserAuth: (state) => state.isUserAuthenticated,
    getError: (state) => state.error,
  },
});
