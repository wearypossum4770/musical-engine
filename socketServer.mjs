import { createServer } from "http";
import { Server } from "socket.io";
<<<<<<< HEAD
const PORT = 7625;
const options = {
  // ...
};
const httpServer = createServer();
const io = new Server(httpServer, options);

io.on("connection", socket => {
  // ...
});
=======
const PORT = 7625
const httpServer = createServer();
const options = { /* ... */ };
const io = new Server(httpServer, options);

io.on("connection", (socket) => {});
>>>>>>> 5f0a403d666560d93b7388f77eb6f1c39dfb0a81

httpServer.listen(PORT);
