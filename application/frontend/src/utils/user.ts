import api from "../APIs/users";
import { useUserStore } from "../Stores/UserStore";

export async function changeStatus(status: number) {
  try {
    const token = useUserStore.getState().token;
    const res = await api.post(
      "/api/users/status",
      { status: status },
      { headers: { authorization: `Bearer ${token}` } }
    );
  } catch (err) {
    console.log(err);
  }
}
export interface MatchMakingQueueInformation {
  session_id?: number;
  user_id: number;
  game_id: number;
  vibe_weight: number;
  content_weight: number;
  time_entered: string;
  active: number;
  socket_id: string;
}
export const connectToMatchmakingQueue = async function (
  queueInformation: MatchMakingQueueInformation
) {
  try {
    const token = useUserStore.getState().token;
    const res = await api.post(
      "/api/users/join-matchmaking",
      queueInformation,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const cancelMatchMakingQueue = async function (userId: number) {
  try {
    const token = useUserStore.getState().token;
    const res = await api.post(
      "/api/users/cancel-matchmaking",
      { userId: userId },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
