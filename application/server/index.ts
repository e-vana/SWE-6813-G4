import dotenv from "dotenv";
import http from "http";
import { app } from "./app";
import { Socket, Server } from "socket.io";
import { matchmakingJob } from "./utility/matchmakingJob";

dotenv.config();

const port = process.env.PORT;
const server = http.createServer(app);

//Create websocket connections
export const io = new Server(server);

//Create websocket authentication middleware
// io.use((socket, next) => {
//   if(socket.handshake.query && socket.handshake.query.token){
//     //validate token
//     console.log(socket.handshake.query.token)
//     next();
//   }else {
//     next(new Error( 'Cannot authenticate request.'))
//   }
// })
io.on("connection", (socket) => {
  // console.log(socket.handshake.query.token);
  console.log(socket.id);
  socket.emit("connection", { message: "Connected to matchmaking" });
  socket.emit("matchmaking-service-status", {
    message: "Online",
    success: true,
  });
});
io.on("disconnect", (socket) => {
  socket.emit("disconnect", {
    message: "Disconnected from matchmaking services.",
  });
});

setInterval(async () => {
  matchmakingJob();
}, 10000);

// Run the API
server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
