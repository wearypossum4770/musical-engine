<template>
  <div>
    <ul id="messages">
      <li v-for="msg in messageList" :key="msg.id">{{ msg }}</li>
    </ul>
    <form id="form" @submit.prevent>
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
      connection:null,
      message: "",
      messageList: [],
    };
  },
  computed:{
    updateList(){
      
    }
  },
  mounted:function(){
    this.$nextTick(function(){
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket("ws://localhost:7625")

    this.connection.onmessage = function({data}) {
      return data
}

    this.connection.onopen = function() {      console.log("Successfully connected to the echo websocket server...")
    }  

    })
  },
  methods: {
    sendMessage() {
      this.connection.send(this.message);
      this.message = "";
    },
  },
  
};
</script>

<style scoped></style>
