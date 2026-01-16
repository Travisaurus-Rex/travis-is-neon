"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Analytics() {
  const pathname = usePathname();
  /*
  useEffect(() => {
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "page_view",
        path: pathname,
        referrer: document.referrer || null,
      }),
    }).catch(() => {});
  }, [pathname]);
  */

  return null;
}
