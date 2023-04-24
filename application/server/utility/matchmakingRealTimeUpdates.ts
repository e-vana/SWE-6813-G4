import {Socket, Server} from 'socket.io';

export const matchmakingRealTime = function(socket: Socket){
  let matchFound = socket.emit('match-found', {message: 'Match found.', matchId: '12345'})
  return matchFound;
}