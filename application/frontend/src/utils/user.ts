import api from "../APIs/users"
import { useUserStore } from "../Stores/UserStore";

export async function changeStatus(status: number) {
  try {
    const token = useUserStore.getState().token;
    const res = await api.post(
      "/api/users/status",
      {status: status},
      { headers: { authorization: `Bearer ${token}` } }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
