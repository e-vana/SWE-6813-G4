import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
  userId: number;
  email: string;
  setUserId: (id: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    userId: 0,
    email: "",
    setUserId: (id) => set((state) => ({ userId: id })),
    setEmail: (email) => set((state) => ({ email: email })),
  }))
);
