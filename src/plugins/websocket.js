let socket = undefined;
const localIP = "localhost";
const networkIP = "0.0.0.0";
const port = 7625;
const networkConnection = false;
// https://a2i2.deakin.edu.au/2020/04/23/real-time-data-transfer-using-vue-and-socket-io-part-1-of-3/
const connectSocket = () => {
  const url = networkConnection
    ? `http://${networkIP}:${port}`
    : `http://${localIP}:${port}`;

  socket = new WebSocket(url);
};
export function addEventListener(event) {
  if (!socket) {
    connectSocket();
  }
  socket.on(event.type, event.callback);
}
export function sendEvent(event) {
  socket.emit(event.type, event.data);
}
export default socket;