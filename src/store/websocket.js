import ReconnectingWebSocket from 'reconnecting-websocket';
import VueNativeSock from 'vue-native-websocket'
const PORT= 7625
let reconnectionOptions = {
    WebSocket: VueNativeSock, // custom WebSocket constructor

}
let url = `ws://localhost:${PORT}`
const websocket = new ReconnectingWebSocket(url,[] ,reconnectionOptions)
Vue.use(websocket,url,{ format: 'json' })


const createSocket = ()=>new WebSocket(`ws://localhost:${PORT}`)
class Socket {
    constructor(){
        if (!this._socket){
            this._socket=createSocket()
        }
        this.socketData;
        this.error;
        this.reader = new FileReader();
        this.websocketConnected=false
        this.websocketClosed = true
        this._socket.onopen = function (){
            this.websocketConnected = true
            this.websocketClosed=false
        }
        this._socket.onclose = function (){
            this.websocketConnected = false
            this.websocketClosed=true
        }
        this._socket.onerror = function (event){
            this.error = event
        }
        this._socket.onmessage = function (event){
            this.socketData = event.data
        }
    }
    close(){
        return this._socket.close(1000,"user closed connection")
    }
    send({contentType,data}){
        switch(contentType){
            default:
                break; 
            case "TEXT":
                this._socket.send(data);
                break;
        }
    }
}
const websocket = new Socket()
export default websocket
export const _websocket = {
    state:{
        socketMessage:'',
        message:'',
        connection:new WebSocket(`ws://localhost:${PORT}`)
    },
    getters:{
    socket:state=>state.connection
    },
    mutations:{
        receiveMessage(){}
    },
    actions:{},
    modules:{}
}

