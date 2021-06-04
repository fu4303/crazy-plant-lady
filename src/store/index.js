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
    theme: "light",
    plantLogEntries: [],
    plantDetails: [],
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
    setCurrentTheme(state, data) {
      state.theme = data;
    },
    addPlantToLog(state, data) {
      state.plantLogEntries = [...state.plantLogEntries, data];
    },
    updatePlantLogEntry(state, data) {
      const plantToUpdate = state.plantLogEntries.find(
        (item) => item.id === data.id
      );
      Object.assign(plantToUpdate, data);
    },
    deletePlantLogEntry(state, data) {
      const filteredPlants = state.plantLogEntries.filter(
        (plant) => plant.id !== data.id
      );
      state.plantLogEntries = filteredPlants;
    },
    addDetailsForDay(state, data) {
      state.plantDetails = data;
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

    async addPlantToLog({ commit }, payload) {
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("plants")
        .add({
          ...payload,
          createdAt: new Date(),
        });
      commit("addPlantToLog", payload);
    },

    async getAllPlants({ commit }) {
      const firebasePlantsRef = await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("plants");

      firebasePlantsRef
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const plant = doc.data();
            plant.id = doc.id;
            plant.dateAcquired = plant.dateAcquired.toDate();
            commit("addPlantToLog", plant);
          });
        })
        .catch((error) => {
          console.warn("Error getting document:", error);
        });
    },
    async updatePlantEntry({ commit }, payload) {
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("plants")
        .doc(payload.id)
        .update({
          dateAcquired: payload.dateAcquired,
          plantName: payload.plantName,
          plantType: payload.plantType,
        });
      commit("updatePlantLogEntry", payload);
    },
    async deletePlantEntry({ commit }, payload) {
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("plants")
        .doc(payload.id)
        .delete();

      commit("deletePlantLogEntry", payload);
    },
    async getPlantDetailsByDate({ commit }, payload) {
      if (payload === null) {
        commit("addDetailsForDay", null);
      } else {
        console.log(payload);
        const plantDetails = await firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .collection("plants")
          .doc(payload.id)
          .collection("plant-details")
          .where("dateText", "==", payload.dateText);

        plantDetails.get().then((querySnapShot) => {
          if (querySnapShot.empty) {
            commit("addDetailsForDay", null);
          } else {
            querySnapShot.forEach((doc) => {
              const details = doc.data();
              details.id = doc.id;
              commit("addDetailsForDay", details);
            });
          }
        });
      }
    },

    async addPlantDetailsEntry({ commit }, payload) {
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("plants")
        .doc(payload.plantDetailsId) // plants id
        .collection("plant-details")
        .add({
          ...payload.form,
          createdAt: new Date(),
        });
      commit("addDetailsForDay", payload);
    },
  },
  modules: {},
  getters: {
    theme: (state) => state.theme,
    drawerState: (state) => state.drawerState,
    getUser: (state) => state.user,
    isUserAuth: (state) => state.isUserAuthenticated,
    getError: (state) => state.error,
    plantLogEntries: (state) => state.plantLogEntries,
    plantDetails: (state) => state.plantDetails,
  },
});
