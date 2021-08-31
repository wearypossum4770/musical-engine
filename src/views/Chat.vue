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
import ReconnectingWebSocket from 'reconnecting-websocket';
export default {
  name: "Chat",
  data() {
    return {
      connection: new ReconnectingWebSocket('ws://localhost:7625'),
      websocketClosed: true,
      websocketConnected: false,
      message: '',
      messageReceived: '',
      messageList: ['something', 'another thing'],
    };
  },
  mounted:function(){
    this.connection.onmessage = function(event){
      this.messageReceived = event.data
    }

  },
  watch:{
    connection:function(){
      

    }
  },
  computed:{
    receiveMessage(){
return "HAYYYYY"
    }
  },
methods:{
    sendMessage(){
      this.connection.send(this.message)
    }
  }
  
};
</script>

<style scoped></style>
