import { MatchMakingEntry, matchmaking } from "../utility/matchmaking";
import data from '../data/matchmaking_sample_data.json';
import data_small from '../data/matchmaking_sample_data_small.json';
import data_one from '../data/matchmaking_sample_data_one.json';
//dataset needs to be regenerated to include the active: {INTEGER} key
const testData = data as MatchMakingEntry[];
const testDataSmall = data_small as MatchMakingEntry[];
const testDataOne = data_one as MatchMakingEntry[];

describe('Matchmaking Function test suite', ()=> {
  it('If passed an empty array, return NULL', () => {
    expect(matchmaking([])).toBeNull;
  })
  it('If passed an array of players and there are no games with lobbies of size 5, return NULL', () => {
    expect(matchmaking(testDataSmall)).toBeNull;
  })
  it('If a game with player count > 5, create lobbies for database insertion', () => {
    expect(matchmaking(testData)).toBeTruthy;
  })
  it('Checks small dataset for verifiable result', ()=> {
    //should probably deep compare known good data
    let t = matchmaking(testDataOne);
    expect(t![0].game_id).toEqual(5);
    expect(t![0].lobby.length).toEqual(5);
    expect(t![1]).toBeUndefined;
  })
})

