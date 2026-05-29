"use client";

import { useEffect } from "react";

/**
 * Tags each .photo-placeholder and .eos-photo-slot with a `data-img`
 * attribute identifying the slot ID (e.g. "home-photo-1"). The
 * image-overrides.css then paints the correct background image
 * based on that attribute.
 *
 * Why JS for this? CSS has no text-content matcher, and the
 * original markup distinguishes slots only by the caption text
 * inside them (e.g. "Neuro Champions Fellowship · Cohort 1").
 * Doing this at runtime keeps the markup byte-identical to the
 * original HTML — no JSX edits required.
 *
 * Runs after every navigation / route change too, because this app
 * uses client-side show/hide routing where DOM nodes are static
 * but classes toggle; new nodes never appear, so a single pass is
 * sufficient. We still expose a window hook in case the user wants
 * to re-run it manually.
 */

// Caption text → slot ID. Matching is case-insensitive and tolerates
// extra whitespace. The first matching key wins.
const CAPTION_TO_SLOT: Array<[RegExp, string]> = [
  // — Home grid + Impact report shared subjects —
  [/neuro\s*champions?\s*fellowship/i,           "home-photo-1"],
  [/cohort\s*1\s*training/i,                     "impact-cohort"], // impact-report variant
  [/stroke\s*(outreach|awareness)/i,             "home-photo-2"],
  [/largest\s*event/i,                           "impact-hero"],
  [/neuro\s*smart\s*schools?/i,                  "home-photo-3"],
  [/secondary\s*school\s*visit/i,                "impact-school"],
  [/women['’]s?\s*neuro\s*health/i,              "home-photo-4"],
  [/women['’]s?\s*brain\s*health/i,              "home-photo-4"],
  [/community\s*brain\s*health/i,                "home-photo-5"],
  [/ncf\s*cohort/i,                              "home-photo-6"],
  [/certified\s*neuro\s*champions?/i,            "impact-champions"],
  [/14\s*certified/i,                            "impact-champions"],
  // — Legacy portrait —
  [/photo\s*of\s*prof\.?\s*sanya/i,              "legacy-portrait"],
  [/prof\.?\s*emmanuel\s*olatunde\s*sanya/i,     "legacy-portrait"],
];

function tagOnce() {
  if (typeof document === "undefined") return;
  const nodes = document.querySelectorAll<HTMLElement>(
    ".photo-placeholder, .eos-photo-slot"
  );
  nodes.forEach((el) => {
    if (el.dataset.img) return; // already tagged
    // Gather any caption-ish text inside this slot.
    const text = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (!text) return;
    for (const [re, slot] of CAPTION_TO_SLOT) {
      if (re.test(text)) {
        el.dataset.img = slot;
        // Accessibility: expose subject as the slot's accessible name.
        el.setAttribute("role", "img");
        if (!el.getAttribute("aria-label")) {
          el.setAttribute("aria-label", text.slice(0, 120));
        }
        break;
      }
    }
  });
  // Special case for the legacy-photo wrapper: its placeholder uses a
  // generic "PHOTO OF PROF. SANYA" string, already handled above, but
  // ensure the wrapper itself is tagged too for any styles that key
  // off the outer container.
  document
    .querySelectorAll<HTMLElement>(".legacy-photo .photo-placeholder")
    .forEach((el) => {
      if (!el.dataset.img) el.dataset.img = "legacy-portrait";
    });
}

export default function ImageSlotTagger() {
  useEffect(() => {
    // Run after the inline scripts have had a chance to mount the DOM.
    // A short rAF + timeout chain covers both immediate and post-routing
    // mounts without polling.
    const r1 = requestAnimationFrame(() => {
      tagOnce();
      const t = setTimeout(tagOnce, 250);
      // Expose a manual re-run hook for debugging / future dynamic content.
      (window as unknown as { __tagImageSlots?: () => void }).__tagImageSlots = tagOnce;
      return () => clearTimeout(t);
    });
    return () => cancelAnimationFrame(r1);
  }, []);
  return null;
}
