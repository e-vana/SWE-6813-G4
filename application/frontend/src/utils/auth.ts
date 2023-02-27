import axios from "axios";
import { useUserStore } from "../Stores/UserStore";
import api from '../APIs/users'
import jwtDecode from "jwt-decode";

export async function register(payload: object) {
    try {
       const res = await api.post("/api/users", payload);
       console.log(res);
    } catch (err) {
        console.log(err)
    }
}

export async function login(payload: object) {
    try {
       const res = await api.post("/api/auth/login", payload);
       console.log(res);
       return res;
    } catch (err) {
        console.log(err)
    }
}

export async function getUserId(token: any) {
    try {
        const res = await jwtDecode(token);
        console.log(res)
        return res;
    } catch (err) {
        console.log(err)
    }
}