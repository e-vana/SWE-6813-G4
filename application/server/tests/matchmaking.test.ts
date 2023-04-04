import { MatchMakingEntry, matchmaking } from "../utility/matchmaking";
import data from '../data/matchmaking_sample_data.json';
import data_small from '../data/matchmaking_sample_data_small.json';
import data_one from '../data/matchmaking_sample_data_one.json';
const testData = data as MatchMakingEntry[];
const testDataSmall = data_small as MatchMakingEntry[];
const testDataOne = data_one as MatchMakingEntry[];

describe('Matchmaking Function test suite', ()=> {
  it('Returns null if there are no players in the queue.', () => {
    expect(matchmaking([])).toBeNull;
  })
  it('If game player count < 5 return null ', () => {
    expect(matchmaking(testDataSmall)).toBeNull;
  })
  it('If game player count > 5, create lobbies for database insertion', () => {
    expect(matchmaking(testData)).toBeTruthy;
  })
  it('Checks small dataset for verifiable result', ()=> {
    let t = matchmaking(testDataOne);
    expect(t![0].game_id).toEqual(5);
    expect(t![0].lobby.length).toEqual(5);
    expect(t![1]).toBeUndefined;
  })
})

