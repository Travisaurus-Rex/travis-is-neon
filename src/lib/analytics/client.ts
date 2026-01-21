import { createClient } from "@supabase/supabase-js";
import { AnalyticsEvent } from "./types";
import { env } from "@/config/env";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const getSessionId = (): string | null => {
  if (typeof window === "undefined") return null;

  let sessionId = sessionStorage.getItem("analytics_session");
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem("analytics_session", sessionId);
  }
  return sessionId;
};

const getUserFingerprint = (): string | null => {
  if (typeof window === "undefined") return null;

  let fingerprint = localStorage.getItem("user_fingerprint");
  if (!fingerprint) {
    fingerprint = crypto.randomUUID();
    localStorage.setItem("user_fingerprint", fingerprint);
  }
  return fingerprint;
};

export const trackEvent = async (event: AnalyticsEvent): Promise<void> => {
  if (typeof window === "undefined" || !supabase || !env.environment.prod)
    return;

  const sessionId = getSessionId();
  if (!sessionId) return;

  try {
    const { error } = await supabase.from("analytics_events").insert({
      ...event,
      session_id: sessionId,
      user_fingerprint: getUserFingerprint(),
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
    });

    if (error) {
      console.error("Analytics error:", error);
    }
  } catch (error) {
    console.error("Analytics error:", error);
  }
};
