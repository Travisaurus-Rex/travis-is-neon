import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ThemeState {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
}

export const useTheme = create<ThemeState>((set) => ({
  theme: "light",
  setTheme: (mode) => set({ theme: mode }),
}));
