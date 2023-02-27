import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
  userId: number;
  email: string;
  token: string;
  loggedIn: boolean;
  setUserId: (id: number) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setLoggedIn: () => void;
}

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    userId: 0,
    email: "",
    token: "",
    loggedIn: false,
    setUserId: (id) => set((state) => ({ userId: id })),
    setEmail: (email) => set((state) => ({ email: email })),
    setToken: (token) => set((state) => ({ token: token })),
    setLoggedIn: () => set((state) => ({ loggedIn: true })),
  }))
);
