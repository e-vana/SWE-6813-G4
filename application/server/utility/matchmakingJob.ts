import { io } from "..";
import { createLobbyAndInsertPlayersIntoLobby } from "./createLobbyAndInsertPlayersIntoLobby";
import { getAllUsersInMatchmakingQueue } from "./getAllUsersInMatchmakingQueue";
import { matchmaking } from "./matchmaking";

export const matchmakingJob = async function () {
  try {
    let d = new Date();
    // console.log(
    //   `Running matchmaking @ ${d.toLocaleDateString()} - ${d.toTimeString()}`
    // );
    let u = await getAllUsersInMatchmakingQueue();
    io.emit("players-in-queue", { playersInQueue: u.length });
    if (u.length < 5) {
      //emit players in queue
      return;
    }
    let lobbies = matchmaking(u);
    if (!lobbies) {
      return;
    }
    await createLobbyAndInsertPlayersIntoLobby(lobbies);

    //query matchmaking table for participants inside of the matchmaking pool
    //pass query results into matchmaking function
    //create matchmaking lobbies based on the algo results
  } catch (error) {
    console.log(error);
  }
};

matchmakingJob();
