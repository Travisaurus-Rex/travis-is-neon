"use client";

import { useEffect } from "react";
import { trackEvent } from "./client";

export const usePageView = (projectSlug?: string) => {
  useEffect(() => {
    trackEvent({
      event_type: "page_view",
      page_path: window.location.pathname,
      project_slug: projectSlug,
    });
  }, [projectSlug]);
};

export const useTrackEvent = () => {
  return trackEvent;
};
