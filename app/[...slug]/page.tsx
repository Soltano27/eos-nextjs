import Page from "../page";

// This app is a client-routed single page: every view (About, Programmes,
// each Cortex article, etc.) already lives in the DOM rendered by <Page />,
// and public/inline-scripts/block-01.js reads window.location.pathname on
// load to show the right one via eosNavigate(). That only works if the
// server actually renders <Page /> for these paths instead of bouncing the
// request back to "/" before the client script ever runs — which is what
// this route used to do, and why deep links, refreshes, and shared URLs
// always landed on home. Rendering the same page here lets the client-side
// router take over as intended.
export default function CatchAll() {
  return <Page />;
}
