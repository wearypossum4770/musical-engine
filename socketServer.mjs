import { WebSocketServer } from "ws";
const PORT = 7625;
function toJSON(obj = {}) {
  return JSON.stringify(obj);
}
let target = [
  ["room_name", "room_name"],
  ["message", ""],
];
const wss = new WebSocketServer({ port: PORT });
let easterEggs = new Map([
  ["heads", "tails"],
  ["tails", "heads"],
  ["ping", "pong"],
  ["marco", "polo"],
  ["hello", "world"],
  ["testing", "1,2,3"],
  ["1", "Is the loneliest number"],
  ["to be", "or not to be that is the question"],
  ["Avada Kedavra", "Not nice...That's and unforgiveable curse"],
  ["imperio", "Not nice...That's and unforgiveable curse"],
  ["crucio", "Not nice...That's and unforgiveable curse"],
]);
wss.on("connection", (ws, request, client) => {
  ws.on("message", msg => {
    const _msg = JSON.parse(msg);
    let { message } = _msg;
    let eventData = Object.create(target);
    eventData["message"] = message;
    eventData["recieved"] = Date.now();
    let egg = easterEggs.get(message.toString().toLowerCase().trim());
    if (egg) {
      eventData["processed"] = Date.now();
      eventData["message"] = egg;
      let outgoing = toJSON(eventData);
      ws.send(toJSON({ message: egg }));
    }
    eventData["processed"] = Date.now();
    console.log(`Received message ${message} from user ${client}`);
  });

  ws.send(toJSON({ message: "connected" }));
});
