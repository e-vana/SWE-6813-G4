import {Socket} from 'socket.io';

export const matchmakingRealTime = function(socket: Socket){
  socket.emit('test-con-2', {message: 'This is a test emit!'})
}