import mysql from "mysql2/promise";
import { dbConnectionString } from "../config/database.config";
import { MatchMakingEntry } from "./matchmaking";
import { RowDataPacket } from "mysql2";

export interface MatchMakingEntryRowPacket extends RowDataPacket {
  session_id: number;
  user_id: number;
  game_id: number;
  vibe_weight: number;
  content_weight: number;
  time_entered: string;
  active: number;
}

export const getAllUsersInMatchmakingQueue = async function(){
  let connection = await mysql.createConnection(dbConnectionString!);
  let query = `SELECT * FROM matchmaking_queue WHERE active = 1`;
  const [results] = await connection.query<MatchMakingEntryRowPacket[]>(query);
  await connection.end();
  return results;
}