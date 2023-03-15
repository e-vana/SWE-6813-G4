import axios from "axios";
import { useUserStore } from "../Stores/UserStore";

const token = useUserStore.getState().token;

export default axios.create({
    baseURL: 'http://localhost:3005',
    // headers: {
    //     authorization: `Bearer ${token}`,
    // }
})