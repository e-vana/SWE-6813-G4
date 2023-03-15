import axios from "axios";
import api from "../APIs/users";
import { useUserStore } from "../Stores/UserStore";

const token = useUserStore.getState().token;

export async function changeStatus(payload: object){
    try {
        console.log(token)
        const res = await axios.patch("/api/users/status", payload, {baseURL: 'http://localhost:3005', headers: {authorization: `Bearer ${token}`}})
        console.log(res);
    } catch (err) {
        console.log(err)
    }
}