import { WebSocketServer } from "ws";
const PORT = 7625;
const wss = new WebSocketServer({ port: PORT });
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log(`received: ${message}`);
  });

  ws.send("connected");
});
