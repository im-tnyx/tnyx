import { create } from "zustand";

export type SubscriptionPlan = "free" | "pro" | "plus";

type SubscriptionState = {
  plan: SubscriptionPlan;
  setPlan: (plan: SubscriptionPlan) => void;
  cyclePlan: () => void;
};

export const useSubscriptionStore = create<SubscriptionState>((set, get) => ({
  plan: "free",
  setPlan: (plan) => set({ plan }),
  cyclePlan: () => {
    const current = get().plan;
    if (current === "free") {
      set({ plan: "pro" });
      return;
    }
    if (current === "pro") {
      set({ plan: "plus" });
      return;
    }
    set({ plan: "free" });
  },
}));
