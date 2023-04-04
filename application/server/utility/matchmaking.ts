import data from "../data/matchmaking_sample_data.json";
import { RowDataPacket, ResultSetHeader } from "mysql2";
// let mmData = data as MatchMakingEntry[];

export interface MatchMakingEntry extends RowDataPacket {
  session_id: number;
  user_id: number;
  game_id: number;
  vibe_weight: number;
  content_weight: number;
  time_entered: number;
  active: number;
}
export interface MatchMakingLobby {
  game_id: number;
  lobby: MatchMakingEntry[]
}

export const matchmaking = function(matchMakingQueue: MatchMakingEntry[]): MatchMakingLobby[] | null {
  if(matchMakingQueue.length == 0){
    return null;
  }
  let unique: any = {};
  matchMakingQueue.forEach((mmEntry) => {
    if (unique[mmEntry.game_id]) {
      unique[mmEntry.game_id] = unique[mmEntry.game_id] + 1;
    }
    if (!unique[mmEntry.game_id]) {
      unique[mmEntry.game_id] = 1;
    }
  });
  let individualGames = Object.keys(unique);
  let lobbyBlocks: MatchMakingLobby[] = [];
  individualGames.forEach((game) => {
    let gameId = parseInt(game);
    let playersInGame = matchMakingQueue.filter((player) => {
      return player.game_id == gameId;
    });
    playersInGame.sort((a, b) => {
      return (
        a.vibe_weight - b.vibe_weight || a.content_weight - b.content_weight
      );
    });
    while (playersInGame.length > 5) {
      let lobby = playersInGame.splice(playersInGame.length - 5, 5);
      let lobbyPayload: MatchMakingLobby = {
        game_id: gameId,
        lobby: lobby,
      };
      lobbyBlocks.push(lobbyPayload);
    }
    //create database entry for each matchmaking lobby
    //delete each player in a lobby from matchmaking queue
    //emit to each player the matchmaking ID
  });
  if(lobbyBlocks.length > 0){
    return lobbyBlocks;
  }
  return null;
}
