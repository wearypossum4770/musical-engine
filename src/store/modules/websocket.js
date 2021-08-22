import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR,
} from "../mutation-types";

const state = {
  socket: {
    isConnected: false,
    message: {},
    reconnectError: false,
  },
};

const mutations = {
  [SOCKET_ONOPEN](state) {
    state.socket.isConnected = true;
  },
  [SOCKET_ONCLOSE](state) {
    state.socket.isConnected = false;
  },
  [SOCKET_ONERROR](state, event) {
    console.error(state, event);
  },
  // default handler called for all methods
  [SOCKET_ONMESSAGE](state, message) {
    console.log(message);
    state.socket.message = message;
  },
  // mutations for reconnect methods
  [SOCKET_RECONNECT](state, count) {
    console.info(state, count);
  },
  [SOCKET_RECONNECT_ERROR](state) {
    state.socket.reconnectError = true;
  },
};

export default {
  namespaces: true,
  state,
  mutations,
};
