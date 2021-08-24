import { createServer } from "http";
import { Server } from "socket.io";
const PORT = 7625;
const options = {
  // ...
};
const httpServer = createServer();
const io = new Server(httpServer, options);

io.on("connection", socket => {
  // ...
});

httpServer.listen(PORT);
