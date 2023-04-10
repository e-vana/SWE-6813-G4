import {Server} from 'socket.io'
import {Server as httpServer} from 'http';
import { matchmakingRealTime } from './matchmakingRealTimeUpdates';

export const applicationSocket = function(server: httpServer){
  const io = new Server(server);
  io.on('connection', (socket) => {
    console.log(socket.id)
    socket.emit('connected', {message: "Connected to matchmaking services."})
    // socket.emit('test-con-2', {message: 'This is a test emit!'})
    matchmakingRealTime(socket);
  });
  io.on('disconnect', (socket) => {
    socket.emit('disconnect', {message: "Disconnected from matchmaking services."});
  })
  return io;
}
