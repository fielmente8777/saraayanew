"use client";
import { useEffect, useRef } from "react";
export default function WinterTracking() {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "winter_landing_view",
      page_path: window.location.pathname,
    });
  }, []);
  return null;
}
