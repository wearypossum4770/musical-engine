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
      websocket:null,
      reconnectError: false,
      websocketClosed: true,
      websocketConnected: false,
      message: '',
      messageReceived: '',
      messageList: ['something', 'another thing'],
    };
  },
  created:function(){
    this.websocket = new WebSocket('ws://localhost:7625')
  },
  computed:{
    receiveMessage(){
      return false
    }
  },
methods:{
    sendMessage(){
      console.log(this.message)
      //  this.$socket.sendObj({message: this.message})
    }
  }
  
};
</script>

<style scoped></style>
