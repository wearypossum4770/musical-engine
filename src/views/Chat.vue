<template>
  <div>
    <ul id="messages"></ul>
    <form id="form" @submit.prevent>
      <input @keypress.enter="sendMessage()" autocomplete="off" />
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
      websocketError: null,
      messageReceived: "",
      messageArr: ["something", "another thing"],
    },
    mutations:{
      createConnection(state){
        state.websocket = new WebSocket("ws://localhost:7625");
      },
    }
})
export default {
  name: "Chat",
  data() {
    return {
      store,
    };
  },
  mounted: function(){
    this.$nextTick(function(){
      console.log(this.$store)
      this.$store.dispatch('createConnection')
    })
  },
  methods: {
    sendMessage() {},
  },
};
</script>

<style scoped></style>
