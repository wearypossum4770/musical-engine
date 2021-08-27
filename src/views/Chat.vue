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
        name:"Chat",
        data(){
            return {
                message:'',
                messageList:[]
            }
        },
        methods:{
            handleSubmit(){

            },
            sendMessage(){


        }
        }
    }
</script>

<style scoped>

</style>