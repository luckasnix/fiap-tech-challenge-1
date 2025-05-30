import { create } from "zustand";

type User = Readonly<{
  name: string;
  accountBalance: number;
}>;

type Store = {
  user: User | null;
  setUser: (user: User) => void;
};

const useUserStore = create<Store>((set) => ({
  user: null,
  setUser: (user: User) => set({ user: user }),
}));

export default useUserStore;
