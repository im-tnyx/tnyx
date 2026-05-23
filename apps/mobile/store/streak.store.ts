import { create } from "zustand";

type StreakState = {
  count: number;
  setCount: (count: number) => void;
  increment: () => void;
  reset: () => void;
};

export const useStreakStore = create<StreakState>((set, get) => ({
  count: 1,
  setCount: (count) => set({ count: Math.max(0, count) }),
  increment: () => set({ count: get().count + 1 }),
  reset: () => set({ count: 0 }),
}));
