import { io } from "..";



export const emitPlayerCount = function(){
  setInterval(()=> {
    let playerCount = Math.random();
    console.log(playerCount);
    io.emit('players-in-queue', {count: playerCount});
  }, 1000)
}