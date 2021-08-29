<template>
  <div>
    <ul id="messages">
      <li v-for="msg in messageArr" :key="msg.id">{{ msg }}</li>
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
        isConnected: false,
      socketMessage: '',
      message: "",
      messageArr: [],
    };
  },
  methods: {
    sendMessage() {
      this.$socket.send(this.message);
      this.message = "";
    },
  },
};
</script>

<style scoped></style>
