import data from "../data/matchmaking_sample_data.json";
let mmData = data as MatchMakingEntry[];

interface MatchMakingEntry {
  session_id: number;
  user_id: number;
  game_id: number;
  vibe_weight: number;
  content_weight: number;
  time_entered: number;
  lobby_size: 5;
}

let unique: any = {};
mmData.forEach((mmEntry) => {
  if (unique[mmEntry.game_id]) {
    unique[mmEntry.game_id] = unique[mmEntry.game_id] + 1;
  }
  if (!unique[mmEntry.game_id]) {
    unique[mmEntry.game_id] = 1;
  }
});
let individualGames = Object.keys(unique);
individualGames.forEach((game) => {
  let gameId = parseInt(game);
  let playersInGame = mmData.filter((player) => {
    return player.game_id == gameId;
  });
  playersInGame.sort((a, b) => {
    return a.vibe_weight - b.vibe_weight || a.content_weight - b.content_weight;
  });
  let lobbyBlocks = [];
  while (playersInGame.length > 5) {
    let lobby = playersInGame.splice(playersInGame.length - 5, 5);
    let lobbyPayload = {
      gameId: gameId,
      lobby: lobby,
    };
    lobbyBlocks.push(lobbyPayload);
  }
  //create database entry for each matchmaking lobby
  //delete each player in a lobby from matchmaking queue
  //emit to each player the matchmaking ID
  console.log(lobbyBlocks);
});
