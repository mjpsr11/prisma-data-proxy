import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    mode: "light",
    show_panel: true,
    toggleMode: () => set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
    togglePanel: () => set((state) => ({ show_panel: !state.show_panel })),
  }), { anonymousActionType: "useStore" })
)
