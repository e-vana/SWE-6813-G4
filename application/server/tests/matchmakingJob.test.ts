import { matchmakingJob } from "../utility/matchmakingJob";
import { createLobbyAndInsertPlayersIntoLobby } from "../utility/createLobbyAndInsertPlayersIntoLobby";
import {
  MatchMakingEntryRowPacket,
  getAllUsersInMatchmakingQueue,
} from "../utility/getAllUsersInMatchmakingQueue";
import {
  MatchMakingEntry,
  MatchMakingLobby,
  matchmaking,
} from "../utility/matchmaking";

jest.mock("../utility/createLobbyAndInsertPlayersIntoLobby");
jest.mock("../utility/getAllUsersInMatchmakingQueue");
jest.mock("../utility/matchmaking");

const mockGetAllUsers: MatchMakingEntry[] = [
  {
    session_id: 1,
    user_id: 1,
    game_id: 1,
    vibe_weight: 3,
    content_weight: 3,
    time_entered: "2008-11-11 13:23:44",
    active: 1,
  },
  {
    session_id: 2,
    user_id: 2,
    game_id: 1,
    vibe_weight: 3,
    content_weight: 3,
    time_entered: "2008-11-11 13:23:44",
    active: 1,
  },
  {
    session_id: 3,
    user_id: 3,
    game_id: 1,
    vibe_weight: 3,
    content_weight: 3,
    time_entered: "2008-11-11 13:23:44",
    active: 1,
  },
  {
    session_id: 4,
    user_id: 4,
    game_id: 1,
    vibe_weight: 3,
    content_weight: 3,
    time_entered: "2008-11-11 13:23:44",
    active: 1,
  },
  {
    session_id: 5,
    user_id: 5,
    game_id: 1,
    vibe_weight: 3,
    content_weight: 3,
    time_entered: "2008-11-11 13:23:44",
    active: 1,
  },
];
const mockMatchmakingData: MatchMakingLobby[] = [
  { game_id: 1, lobby: mockGetAllUsers },
];
describe("Test the function matchmakingJob for desired behavior.", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not call any functions if there are less than 5 users in the matchmaking queue", async () => {
    const mockedGetAllUsersInMatchmakingQueue =
      getAllUsersInMatchmakingQueue as jest.MockedFunction<
        typeof getAllUsersInMatchmakingQueue
      >;
    const mockedCreateLobbyAndInsertPlayersIntoLobby =
      createLobbyAndInsertPlayersIntoLobby as jest.MockedFunction<
        typeof createLobbyAndInsertPlayersIntoLobby
      >;
    mockedGetAllUsersInMatchmakingQueue.mockResolvedValueOnce(
      [] as MatchMakingEntryRowPacket[]
    );
    await matchmakingJob();
    expect(mockedGetAllUsersInMatchmakingQueue).toHaveBeenCalled();
    expect(mockedCreateLobbyAndInsertPlayersIntoLobby).not.toHaveBeenCalled();
  });
  it("should call the matchmaking function if there are at least 5 players in the matchmaking queue.", async () => {
    const mockedGetAllUsersInMatchmakingQueue =
      getAllUsersInMatchmakingQueue as jest.MockedFunction<
        typeof getAllUsersInMatchmakingQueue
      >;
    const mockMatchmaking = matchmaking as jest.MockedFunction<
      typeof matchmaking
    >;
    mockedGetAllUsersInMatchmakingQueue.mockResolvedValueOnce(
      mockGetAllUsers as MatchMakingEntryRowPacket[]
    );
    mockMatchmaking.mockReturnValueOnce(mockMatchmakingData);
    await matchmakingJob();
    expect(mockedGetAllUsersInMatchmakingQueue).toHaveBeenCalled();
    expect(mockMatchmaking).toHaveBeenCalled();
  });
  it("should not call the createLobbyAndInsertPlayersIntoLobby function if matchmaking function returns NULL", async () => {
    const mockedGetAllUsersInMatchmakingQueue =
      getAllUsersInMatchmakingQueue as jest.MockedFunction<
        typeof getAllUsersInMatchmakingQueue
      >;
    const mockMatchmaking = matchmaking as jest.MockedFunction<
      typeof matchmaking
    >;
    const mockedCreateLobbyAndInsertPlayersIntoLobby =
      createLobbyAndInsertPlayersIntoLobby as jest.MockedFunction<
        typeof createLobbyAndInsertPlayersIntoLobby
      >;
    mockedGetAllUsersInMatchmakingQueue.mockResolvedValueOnce(
      mockGetAllUsers as MatchMakingEntryRowPacket[]
    );
    mockMatchmaking.mockReturnValueOnce(null);
    await matchmakingJob();
    expect(mockedGetAllUsersInMatchmakingQueue).toHaveBeenCalled();
    expect(mockMatchmaking).toHaveBeenCalled();
    expect(mockedCreateLobbyAndInsertPlayersIntoLobby).not.toHaveBeenCalled();
  });
  it("should call the createLobbyAndInsertPlayersIntoLobby function if matchmaking function returns a value", async () => {
    const mockedGetAllUsersInMatchmakingQueue =
      getAllUsersInMatchmakingQueue as jest.MockedFunction<
        typeof getAllUsersInMatchmakingQueue
      >;
    const mockMatchmaking = matchmaking as jest.MockedFunction<
      typeof matchmaking
    >;
    const mockedCreateLobbyAndInsertPlayersIntoLobby =
      createLobbyAndInsertPlayersIntoLobby as jest.MockedFunction<
        typeof createLobbyAndInsertPlayersIntoLobby
      >;
    mockedGetAllUsersInMatchmakingQueue.mockResolvedValueOnce(
      mockGetAllUsers as MatchMakingEntryRowPacket[]
    );
    mockMatchmaking.mockReturnValueOnce(mockMatchmakingData);
    await matchmakingJob();
    expect(mockedGetAllUsersInMatchmakingQueue).toHaveBeenCalled();
    expect(mockMatchmaking).toHaveBeenCalled();
    expect(mockedCreateLobbyAndInsertPlayersIntoLobby).toHaveBeenCalled();
  });
});
