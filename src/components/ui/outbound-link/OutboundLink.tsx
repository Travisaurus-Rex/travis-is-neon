"use client";

import type { AnchorHTMLAttributes } from "react";
import { useTrackEvent } from "@/lib/analytics/hooks";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function OutboundLink({
  href,
  onClick,
  children,
  ...rest
}: Props) {
  const trackEvent = useTrackEvent();
  const external = /^https?:/.test(href);

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      onClick={(e) => {
        trackEvent({ event_type: "outbound_link", outbound_url: href });
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
