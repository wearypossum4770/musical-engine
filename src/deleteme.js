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
    mutations: {
      socketOpen(state,payload){
        state.websocketConnected=true
        state.websocketClosed = false
      },
      socketConnect(state) {
        state.websocket = new WebSocket("ws://localhost:7625");
        state.websocket.onopen=function(event){
          console.log(event)
        },
        state.websocket.onmessage=function(event){
          console.log(event)
  
        },
        state.websocket.onerror=function(event){
                  console.log(event)
        },
      }
    },
    actions: {
      socketOpen(context){
        contect.commit('socketOpen')
      },
      socketConnect (context){
        context.commit('socketConnect')
      }
    },
    getters: {
      connection:state=>state.websocket,
      setMessageList: state => state.messageArr,
    },
  });