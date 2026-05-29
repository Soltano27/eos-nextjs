"use client";

import { useEffect } from "react";

/**
 * Injects every original inline <script> block (in document order) as a real
 * <script> tag after the React tree has mounted. We use real script tags so
 * function declarations end up on `window` exactly like in the original HTML —
 * this is essential because the markup contains many inline handlers such as
 * onclick="ps2('home')" and onclick="mobRoute(this)" that look up those
 * functions on window at click-time.
 *
 * Scripts are loaded synchronously (in order) by chaining `onload` to preserve
 * dependency order. We fetch them as text first and then inject inline so that
 * IIFEs run in the page's global scope (a deferred external <script> would too,
 * but inline removes a network round-trip and avoids any CSP nonce headaches).
 */
export default function ClientScripts() {
  useEffect(() => {
    let cancelled = false;

    async function run() {
      const total = 11;
      for (let i = 1; i <= total; i++) {
        if (cancelled) return;
        const url = `/inline-scripts/block-${String(i).padStart(2, "0")}.js`;
        try {
          const res = await fetch(url);
          if (!res.ok) {
            console.error(`[ClientScripts] failed to load ${url}: ${res.status}`);
            continue;
          }
          const code = await res.text();
          const s = document.createElement("script");
          s.setAttribute("data-inline-block", String(i));
          s.text = code;
          document.body.appendChild(s);
        } catch (err) {
          console.error(`[ClientScripts] error loading block ${i}:`, err);
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
