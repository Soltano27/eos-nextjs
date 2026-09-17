import Page from "../page";

// This app is a client-routed single page: every view (About, Programmes,
// each Cortex article, etc.) already lives in the DOM rendered by <Page />,
// and public/inline-scripts/block-01.js reads window.location.pathname on
// load to show the right one via eosNavigate(). That only works if the
// server actually renders <Page /> for these paths instead of bouncing the
// request back to "/" before the client script ever runs — which is what
// this route used to do, and why deep links, refreshes, and shared URLs
// always landed on home.
//
// Server HTML always marks Home ("view-home") as the active view (that's
// hardcoded in HomeView.tsx), and block-01.js only swaps to the right view
// after it's fetched and run client-side — ClientScripts.tsx loads 11
// script files one at a time, which in dev mode can take several seconds,
// so without help the browser sits on Home the whole time. To avoid that,
// we work out which view this route should show and ship a tiny inline
// <style> override so the correct view is already visible on first paint.
// block-01.js removes this override itself, the instant it takes over
// (see the top of window.eosNavigate), so there's nothing to reconcile
// and nothing lingers to block later navigation.
//
// Keep this ALIAS map in sync with the one in
// public/inline-scripts/block-01.js if routes ever change.
const ALIAS: Record<string, string> = {
  about: "about-full",
  "about-legacy": "about-legacy-full",
  "about-mission": "about-mission-full",
  "about-pillars": "about-pillars-full",
  "about-team": "about-team-full",
  programs: "programs-full",
  "programs-culture": "programs-culture-full",
  "programs-guild": "programs-guild-full",
  "programs-cbhi": "programs-cbhi-full",
  neuroed: "neuroed-full",
  "neuroed-elearning": "neuroed-elearning-full",
  "neuroed-alumni": "neuroed-alumni-full",
  innovation: "innovation-full",
  "innovation-mima": "innovation-mima-full",
  contact: "contact-full",
  resources: "resources-full",
  "resources-brain-age": "resources-brain-age-full",
  "resources-healthy": "resources-healthy-full",
  "resources-firstaid": "resources-firstaid-full",
  "resources-receipts": "resources-receipts-full",
  media: "media-full",
  "media-impact": "media-impact-full",
  "media-research": "media-research-full",
  "media-gallery": "media-gallery-full",
  "media-news": "media-news-full",
  cortex: "cortex",
  home: "home",
  "neuroed-fellowship": "neuroed-fellowship",
};

export default async function CatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const route = slug?.[0] || "home";
  const viewId = ALIAS[route] || route;

  // Target either id="view-<id>" or id="<id>" — whichever actually exists —
  // same fallback order eosNavigate() uses client-side.
  const css = `
    #view-home { display: none !important; }
    #view-${viewId}, #${viewId} {
      display: block !important;
      animation: fadeUp 0.35s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
  `;

  return (
    <>
      <style
        id="ssr-boot-view-override"
        dangerouslySetInnerHTML={{ __html: css }}
      />
      <Page />
    </>
  );
}
