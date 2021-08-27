import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { Server } from "socket.io";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 7625;
const options = {
  cors: {
    origin: [`http://localhost:${7625}`],
    methods: ["GET", "POST"]
  }};
const httpServer = createServer(app);
const io = new Server(httpServer, options);
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/src/assets/chat_index.html`);
});
io.emit("some event", {
  someProperty: "some value",
  otherProperty: "other value",
}); // This will emit the event to all connected sockets

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
    console.log(`message: ${msg}`);
  });
});
httpServer.listen(PORT, () => {
  console.log(`WEBSOCKET listening on port: ${PORT}`);
});
// consi  der using http2 server http2
// serverOptions = {  allowHTTP1: true}
// serverOptions{
//   key: fs.readFileSync("/tmp/key.pem"),
//   cert: fs.readFileSync("/tmp/cert.pem")
// }