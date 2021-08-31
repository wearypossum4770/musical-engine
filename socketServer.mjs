import { WebSocketServer } from "ws";
const PORT = 7625;

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
    let eventData = {}
      eventData.message= msg
    eventData.recieved = Date.now();
    let egg = easterEggs.get(msg.toString().toLowerCase().trim());
    if (egg) {
      eventData.processed = Date.now();
      eventData.message = egg;
      ws.send(egg);
    }
    eventData.processed = Date.now();
    console.log(`Received message ${msg} from user ${client}`);
  });

  ws.send("connected");
});
