import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
  userId: number;
  email: string;
  token: string;
  loggedIn: boolean;
  status: number;
  currentGame: string;
  vibe: number;
  content: number;
}

interface UserActions {
  setUserId: (id: number) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  setStatus: (status: number) => void;
  setCurrentGame: (game: string) => void;
  setVibe: (vibe: number) => void;
  setContent: (content: number) => void;
  reset: () => void;
}

const initialState: UserState = {
  userId: 0,
  email: "",
  token: "",
  loggedIn: false,
  status: 0,
  currentGame: "",
  vibe: 0,
  content: 0,
};

export const useUserStore = create<UserState & UserActions>()(
  devtools((set) => ({
    ...initialState,
    setUserId: (id) => set((state) => ({ userId: id })),
    setEmail: (email) => set((state) => ({ email: email })),
    setToken: (token) => set((state) => ({ token: token })),
    setLoggedIn: (loggedIn) => set((state) => ({ loggedIn: loggedIn })),
    setStatus: (status) => set((state) => ({ status: status })),
    setCurrentGame: (game) => set((state) => ({ currentGame: game })),
    setVibe: (vibe) => set((state) => ({ vibe: vibe })),
    setContent: (content) => set((state) => ({ content: content })),
    reset: () => set(initialState),
  }))
);
