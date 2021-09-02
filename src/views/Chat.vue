<template>
  <div>
    <ul id="messages">
      <li v-for="(value, name) in messages" :key="name">
        {{ value }}
      </li>
    </ul>
    <form id="form" @submit.prevent>
      <input
        :value="message"
        @input="updateMessage"
        autocomplete="off"
      />
      <button @click="sendMessage">Send</button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    websocket: null,
    reconnectError: false,
    websocketClosed: true,
    websocketConnected: false,
    message: "",
    debug: {errors:null,_console:''},
    websocketError: null,
    messageArr: [],
  },
  mutations: {
    sendMessage({ websocket, message, messageArr }) {
        messageArr.push(message);
      websocket.send(JSON.stringify({ message: message }));
    },
    clearMessage(state) {
state.message=''
    },
    updateMessage(state, message) {
      state.message = message;
    },
    createConnection(state) {
      state.websocket = new WebSocket("ws://localhost:7625");
      state.websocket.onopen = function () {
        state.websocketClosed = false;
        state.websocketConnected = true;
      };
      state.websocket.onerror = function (event) {
        state.debug['errors'] = [...state.debug['errors'],event.message]
        state.websocketError = event.message;
      };
      state.websocket.onclose = function () {
        state.websocketClosed = true;
        state.websocketConnected = false;
      };
      state.websocket.onmessage = function ({ data }) {
        let _message = JSON.parse(data);
        if (_message.message === "connected") {
          state.debug["_console"] = [...state.debug["_console"],"Successfully connected to the echo websocket server..."]
                  } else {
          state.messageArr.push(_message.message);
        }
      };
    },
  },
});
export default {
  name: "Chat",
  data() {
    return {
      store,
      message: "",
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      store.commit("createConnection");
    });
  },
  computed: {
    messages: function () {
      return store.state.messageArr.reduce((total, current, index) => {
        total[index] = current;
        return total;
      }, {});
    },
  },
  methods: {
    sendMessage() {
      store.commit("sendMessage");
      this.message = "";
    },
    updateMessage(e) {
      let { value } = e.target;
      this.message = value;
      store.commit("updateMessage", value);
    },
  },
};
</script>

<style scoped></style>
