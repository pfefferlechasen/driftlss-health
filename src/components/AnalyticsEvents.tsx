"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    // Event 1: Track all Calendly CTA clicks
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest?.("a");
      if (
        target instanceof HTMLAnchorElement &&
        target.href.includes("calendly.com")
      ) {
        window.gtag?.("event", "cta_click", {
          event_category: "engagement",
          event_label: target.textContent?.trim() || "Calendly CTA",
          link_url: target.href,
        });
      }
    }

    // Event 2: Track Calendly booking completion via postMessage
    function handleMessage(e: MessageEvent) {
      if (
        e.origin === "https://calendly.com" &&
        e.data?.event === "calendly.event_scheduled"
      ) {
        window.gtag?.("event", "booking_complete", {
          event_category: "conversion",
          event_label: "Calendly Booking",
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    window.addEventListener("message", handleMessage);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return null;
}
