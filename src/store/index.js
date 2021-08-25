import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// navigator.permissions.query({ name: 'geolocation' })
export default new Vuex.Store({
  getters: {
    unregisterUsers(state) {
      return state.users.filter(user => !user.registered);
    },
    async getGeolocationPermission(state) {
      let { appConfig } = state;
      try {
        let perms = await navigator.permissions.query({ name: "geolocation" });
        appConfig.geoLocationDisabled = perms.state === "denied";
        // .then(result=>appConfig.geoLocationEnabled=result.state === 'granted')
      } catch (err) {
        appConfig.geoLocationState = err.message;
      }
    },
    async readFromClipboard() {
      try {
        const text = await navigator.clipboard.readText();
        console.log(text);
      } catch (error) {
        console.error(error);
      }
    },
    async writeToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        console.error(error);
      }
    },
  },
  state: {
    latitude: "",
    longitude: "",
    appConfig: {},
    geoLocationEnabled: "",
    geoLocationState: "",
    geoLocationSupported: true,
    // navigator.geolocation==="Geolocation",
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
