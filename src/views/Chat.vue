<template>
  <div>
    <ul id="messages">
      <li v-for="msg in messageList" :key="msg.id">{{ msg }}</li>
    </ul>
    <form id="form" @submit.prevent="handleSubmit">
      <input v-model="message" autocomplete="off" />
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
      websocketClosed:true,
      websocketConnecting:false,
      websocketConnected:false,
      message: "",
      messageList: [],
    };
  },
      created() {
      this.connection = new WebSocket("ws://localhost:7625");
      if (this.connection.readyState in [0,1]){
           this.websocketConnecting=true 
           this.websocketConnected=true
           this.websocketClosed = false 
      }

    this.connection.onmessage = function(event) {
      if (event){
          this.websocketConnected=true
      }
    }
this.connection.onclose = function (){
this.websocketClosed = true
}
    this.connection.onopen = function() {
      console.log("Successfully connected to the echo websocket server...")
    }
    },
  methods: {
    sendMessage(message) {
      console.log(this.connection);
      this.connection.send(message);
    },
    handleSubmit() {},
  },
};
</script>

<style scoped></style>
