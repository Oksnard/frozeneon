import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packages: [],
  },
  actions: {
    GET_PACKAGES(context, payload) {
      context.commit("SET_PACKAGES", payload);
    },
  },
  mutations: {
    SET_PACKAGES(state, payload) {
      state.packages = payload;
    },
  },
  getters: {
    PACKAGES: (state) => {
      return state.packages;
    },
  },
});
