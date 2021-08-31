import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'
import websocket from '../store/websocket'
const options = {
  format: 'json' 
}
Vue.use(VueNativeSock, `ws://localhost:${PORT}`,options )
