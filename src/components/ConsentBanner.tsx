"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "driftlss-consent-v1";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    if (readCookie("needs-consent") === "1") setVisible(true);
  }, []);

  const decide = (granted: boolean) => {
    const value = granted ? "granted" : "denied";
    window.gtag?.("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
    localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:bottom-6 md:max-w-md">
      <div className="bg-charcoal-700 border border-teal-500 rounded-lg shadow-lg p-5">
        <p className="text-cream-200 text-sm leading-relaxed mb-4">
          We use cookies for analytics and advertising to improve your
          experience. You can accept or reject non-essential cookies. See our{" "}
          <a href="/privacy" className="text-teal-300 underline hover:text-teal-200">
            privacy policy
          </a>
          .
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => decide(false)}
            className="px-4 py-2 text-sm text-charcoal-200 hover:text-cream-200 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => decide(true)}
            className="px-4 py-2 text-sm bg-teal-500 hover:bg-teal-400 text-charcoal-800 font-semibold rounded transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
