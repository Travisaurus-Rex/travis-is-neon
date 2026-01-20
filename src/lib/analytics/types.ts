export type AnalyticsEventType =
  | "page_view"
  | "project_click"
  | "outbound_link"
  | "theme_toggle"
  | "form_interaction";

export interface AnalyticsEvent {
  event_type: AnalyticsEventType;
  page_path?: string;
  project_slug?: string;
  outbound_url?: string;
  theme_value?: "dark" | "light";
  form_action?: string;
}

export interface AnalyticsEventRow extends AnalyticsEvent {
  id: string;
  created_at: string;
  session_id: string;
  user_fingerprint: string | null;
  referrer: string | null;
  user_agent: string | null;
  viewport_width: number | null;
  viewport_height: number | null;
}
