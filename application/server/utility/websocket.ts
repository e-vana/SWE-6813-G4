import {Server} from 'socket.io'
import {Server as httpServer} from 'http';
import { matchmakingRealTime } from './matchmakingRealTimeUpdates';

const io = new Server();

export const applicationSocket = function(server: httpServer){
  const io = new Server(server);
  io.on('connection', (socket) => {
    console.log(socket.id)
    socket.emit('connected', {message: "Connected to matchmaking services."})
    matchmakingRealTime(socket);
  });
  io.on('disconnect', (socket) => {
    socket.emit('disconnect', {message: "Disconnected from matchmaking services."});
  })
  return io;
}
