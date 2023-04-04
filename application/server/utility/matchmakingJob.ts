import mysql from "mysql2/promise";
import { dbConnectionString } from "../config/database.config";
import { RowDataPacket, ResultSetHeader } from "mysql2";
import { matchmaking, MatchMakingEntry, MatchMakingLobby } from "./matchmaking";

interface MatchmakingLobbyEntry extends ResultSetHeader{
  id: number,
  game_id: number,
  created_at: Date
}


export const getAllUsersInMatchmakingQueue = async function(){
  let query = `SELECT * FROM matchmaking_queue WHERE active = 1`;
  let connection = await mysql.createConnection(dbConnectionString!);
  const [results] = await connection.query<MatchMakingEntry[]>(query);
  await connection.end();
  return results;
}

export const createLobbyAndInserPlayersIntoLobby = async function(lobbies: MatchMakingLobby[]){
  let connection = await mysql.createConnection({uri: dbConnectionString!, dateStrings: true});
  try {
    for (const lobby of lobbies) {
      await connection.beginTransaction();
      let d = new Date().toISOString().slice(0, 19).replace('T', ' ');
      let createLobbyQuery = `INSERT INTO matchmaking_lobby (game_id, created_at) VALUES (?, ?)`
      const [results] = await connection.query<MatchmakingLobbyEntry>(createLobbyQuery, [lobby.game_id, d]);
      let insertId = results.insertId;
      for (const user of lobby.lobby) {
        let addUserToLobbyQuery = `INSERT INTO matchmaking_lobby_matchmaking_queue (lobby_id, matchmaking_queue_id) VALUES (?, ?)`;
        await connection.query(addUserToLobbyQuery, [insertId, user.session_id])
      }
      await connection.commit();
    }
  } catch (error) {
    console.log(error)
    await connection.rollback();
    throw { message: "There was a problem with these transactions." };
  }
  await connection.end();
}

export const matchmakingJob = async function(){
  try {
    let u = await getAllUsersInMatchmakingQueue();
    if(u.length < 5){
      //emit players in queue
      return;
    }
    let lobbies = matchmaking(u);
    if(!lobbies){
      return;
    }
    await createLobbyAndInserPlayersIntoLobby(lobbies);

    //query matchmaking table for participants inside of the matchmaking pool
    //pass query results into matchmaking function
    //create matchmaking lobbies based on the algo results
  } catch (error) {
    console.log(error);
  }
}

matchmakingJob();