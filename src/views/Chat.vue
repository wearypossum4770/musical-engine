<template>
  <div>
    <ul id="messages">
      <li v-for="msg in messageList" :key="msg.id">{{ msg }}</li>
    </ul>
    <form id="form" @submit.prevent>
      <input
        v-model="message"
        @keypress.enter="sendMessage()"
        autocomplete="off"
      />
      <button @click="sendMessage">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      connection: null,
      websocketClosed: true,
      websocketConnected: false,
      message: "",
      messageReceived: "",
      messageList: ["something", "another thing"],
    };
  },
  beforeDestroy: function () {
    this.connection.onclose = function () {
      this.websocketClosed = true;
    };
  },
  created: function () {
    this.connection = new WebSocket("ws://localhost:7625");
    this.connection.onopen = function () {
      this.websocketClosed = false;
      console.log("Successfully connected to the echo websocket server...");
    };
  },
  updated: function () {
    this.connection.onmessage = function (event) {
      let { data } = event;
      if (data === "connected") {
        this.websocketConnected = false;
      }
      this.receiveMessage(data);
    };
  },
  mounted: function () {},
  methods: {
    receiveMessage(_data) {
      this.messageList.push(_data);
    },
    sendMessage() {
      this.connection.send(this.message);
    },
  },
};
</script>

<style scoped></style>
