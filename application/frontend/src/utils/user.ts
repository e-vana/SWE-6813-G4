import axios from "axios";
import { useUserStore } from "../Stores/UserStore";

export async function changeStatus(payload: object) {
  try {
    const token = useUserStore.getState().token;
    const res = await axios.patch(
      "http://localhost:3005/api/users/status",
      payload,
      { headers: { authorization: `Bearer ${token}` } }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
