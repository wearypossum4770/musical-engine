import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    unregisterUsers(state) {
      return state.users.filter(user => !user.registered);
    },
  },
  state: {
    registrations: [],
    users: [
      { id: 1, name: "Max", registered: false },
      { id: 2, name: "Anna", registered: false },
      { id: 3, name: "Chris", registered: false },
      { id: 4, name: "Sven", registered: false },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
