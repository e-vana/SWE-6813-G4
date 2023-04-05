import mysql from "mysql2/promise";
import { dbConnectionString } from "../config/database.config";
import { ResultSetHeader } from "mysql2";
import { MatchMakingLobby } from "./matchmaking";

interface MatchmakingLobbyEntry extends ResultSetHeader{
  id: number,
  game_id: number,
  created_at: Date
}

export const createLobbyAndInsertPlayersIntoLobby = async function(lobbies: MatchMakingLobby[]){
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