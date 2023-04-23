import mysql from "mysql2/promise";
import { dbConnectionString } from "../config/database.config";
import { ResultSetHeader } from "mysql2";
import { MatchMakingLobby } from "./matchmaking";
import { RowDataPacket } from "mysql2";
import { io } from "..";

interface MatchmakingLobbyEntry extends ResultSetHeader {
  id: number;
  game_id: number;
  created_at: Date;
}

interface UserInMatchmaking extends RowDataPacket {
  lobby_id: number;
  matchmaking_queue_id: number;
  session_id: number;
  user_id: number;
  game_id: number;
  vibe_weight: number;
  content_weight: number;
  time_entered: string;
  active: number;
  socket_id: string;
  email: string;
}

export const createLobbyAndInsertPlayersIntoLobby = async function (
  lobbies: MatchMakingLobby[]
) {
  let connection = await mysql.createConnection({
    uri: dbConnectionString!,
    dateStrings: true,
  });
  try {
    for (const lobby of lobbies) {
      await connection.beginTransaction();
      let d = new Date().toISOString().slice(0, 19).replace("T", " ");
      let createLobbyQuery = `INSERT INTO matchmaking_lobby (game_id, created_at) VALUES (?, ?)`;
      const [results] = await connection.query<MatchmakingLobbyEntry>(
        createLobbyQuery,
        [lobby.game_id, d]
      );
      let insertId = results.insertId;
      for (const user of lobby.lobby) {
        let addUserToLobbyQuery = `INSERT INTO matchmaking_lobby_matchmaking_queue (lobby_id, matchmaking_queue_id) VALUES (?, ?)`;
        await connection.query(addUserToLobbyQuery, [
          insertId,
          user.session_id,
        ]);
        let setUserToInactive = `UPDATE matchmaking_queue SET active = 0 WHERE session_id = ?`;
        await connection.query(setUserToInactive, [user.session_id]);
      }
      await connection.commit();
      let lobbyIdCreated = results.insertId;
      let usersToEmitToAfterLobbyWasCreatedQuery = `SELECT mlmq.*, mq.*, u.email FROM matchmaking_lobby_matchmaking_queue mlmq JOIN matchmaking_queue mq ON mlmq.matchmaking_queue_id = mq.session_id JOIN users u ON mq.user_id = u.id WHERE lobby_id = ?`;
      const [users, fields] = await connection.query<UserInMatchmaking[]>(
        usersToEmitToAfterLobbyWasCreatedQuery,
        [lobbyIdCreated]
      );
      let usersEmails = users.map((u) => {
        return u.email;
      });
      users.forEach((user) => {
        io.to(user.socket_id).emit("match-found", {
          message: "Match found.",
          lobby_id: lobbyIdCreated,
          players: usersEmails,
        });
      });
    }
  } catch (error) {
    console.log(error);
    await connection.rollback();
    throw { message: "There was a problem with these transactions." };
  }
  await connection.end();
};
