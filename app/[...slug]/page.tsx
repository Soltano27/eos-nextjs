/**
 * Catch-all route — serves the same SPA shell for any URL path
 * (e.g. /about, /cortex-article-2, /programs-guild).
 *
 * Next.js would 404 on these because there are no real page files for them.
 * This catch-all intercepts every unmatched path and renders the root SPA,
 * then block-01.js reads window.location.pathname and activates the right view.
 */
export { default } from "@/app/page";
