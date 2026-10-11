"use client";

import { usePageView } from "@/lib/analytics/hooks";

export default function PageView() {
  usePageView();
  return null;
}
