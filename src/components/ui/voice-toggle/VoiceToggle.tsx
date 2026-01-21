"use client";

import { useVoiceStore } from "@/stores/useVoiceStore";

export function VoiceToggle() {
  const { voice, toggleVoice } = useVoiceStore();

  return (
    <div className="flex items-center gap-2">
      <span className={voice === "classy" ? "font-bold" : "opacity-50"}>
        Classy
      </span>
      <button
        onClick={toggleVoice}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-700"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-accent transition ${
            voice === "looney" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <span className={voice === "looney" ? "font-bold" : "opacity-50"}>
        Looney
      </span>
    </div>
  );
}
