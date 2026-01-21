// store/useVoiceStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Voice = "classy" | "looney";

interface VoiceStore {
  voice: Voice;
  setVoice: (voice: Voice) => void;
  toggleVoice: () => void;
}

export const useVoiceStore = create<VoiceStore>()(
  persist(
    (set) => ({
      voice: "classy",
      setVoice: (voice) => set({ voice }),
      toggleVoice: () =>
        set((state) => ({
          voice: state.voice === "classy" ? "looney" : "classy",
        })),
    }),
    { name: "voice-mode" },
  ),
);
