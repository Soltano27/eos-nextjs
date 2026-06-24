(function () {
  // ── ALIAS MAP: all route shorthands → full page IDs ──
  var ALIAS = {
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
    "cortex-article-1": "cortex-article-1",
    "cortex-article-2": "cortex-article-2",
    "cortex-article-3": "cortex-article-3",
    "cortex-article-4": "cortex-article-4",
    "cortex-article-5": "cortex-article-5",
    "cortex-article-6": "cortex-article-6",
    "cortex-article-7": "cortex-article-7",
    home: "home",
    "neuroed-fellowship": "neuroed-fellowship",
  };

  // ── NAV TOP-LEVEL GROUPS for active state ──
  var NAV_GROUPS = {
    about: "about",
    "about-legacy": "about",
    "about-mission": "about",
    "about-pillars": "about",
    "about-team": "about",
    programs: "programs",
    "programs-culture": "programs",
    "programs-guild": "programs",
    "programs-cbhi": "programs",
    neuroed: "neuroed",
    "neuroed-elearning": "neuroed",
    "neuroed-fellowship": "neuroed",
    "neuroed-alumni": "neuroed",
    innovation: "innovation",
    "innovation-mima": "innovation",
    resources: "resources",
    "resources-brain-age": "resources",
    "resources-healthy": "resources",
    "resources-firstaid": "resources",
    "resources-receipts": "resources",
    media: "media",
    "media-impact": "media",
    "media-research": "media",
    "media-gallery": "media",
    "media-news": "media",
    cortex: "cortex",
    "cortex-article-1": "cortex",
    "cortex-article-2": "cortex",
    "cortex-article-3": "cortex",
    "cortex-article-4": "cortex",
    "cortex-article-5": "cortex",
    "cortex-article-6": "cortex",
    "cortex-article-7": "cortex",
    contact: "contact",
  };

  // ── CORE NAVIGATE ──
  // keepNavOpen: true = called from mobNavParent (parent tap) — keep menu open to show children
  // pushHistory: false = called from popstate (back/forward) — don't push a new history entry
  window.eosNavigate = function (route, keepNavOpen, pushHistory) {
    if (!route) return;
    var viewId = ALIAS[route] || route;
    var target = document.getElementById("view-" + viewId);
    if (!target) {
      target = document.getElementById(viewId);
    }
    if (!target) return;

    // hide all views, show target
    document.querySelectorAll(".page-view").forEach(function (v) {
      v.classList.remove("active");
    });
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // ── URL / HISTORY ──
    // Write the route into the URL so back button works and links are shareable
    var slug = route === "home" ? "/" : "/" + route;
    if (pushHistory !== false) {
      history.pushState({ route: route }, "", slug);
    }

    // ── DESKTOP NAV ACTIVE ──
    var group = NAV_GROUPS[route] || route.split("-")[0];
    document.querySelectorAll(".nav-item > a").forEach(function (a) {
      a.classList.remove("active");
    });
    document
      .querySelectorAll(".nav-item > a[data-route]")
      .forEach(function (a) {
        var r = a.getAttribute("data-route");
        if (
          r === group ||
          r === route ||
          (NAV_GROUPS[r] && NAV_GROUPS[r] === group)
        ) {
          a.classList.add("active");
        }
      });

    // ── MOBILE NAV ACTIVE ──
    document
      .querySelectorAll(".mob-nav-child, .mob-nav-standalone")
      .forEach(function (el) {
        el.classList.remove("mob-active");
      });
    document
      .querySelectorAll('[data-route="' + route + '"]')
      .forEach(function (el) {
        if (
          el.classList.contains("mob-nav-child") ||
          el.classList.contains("mob-nav-standalone")
        ) {
          el.classList.add("mob-active");
        }
      });

    // Only close mobile nav for child/standalone navigation, not parent taps
    if (!keepNavOpen && typeof closeMobNav === "function") {
      closeMobNav();
    }
  };

  // ── SINGLE CLICK DELEGATE (capture phase — fires first) ──
  document.addEventListener(
    "click",
    function (e) {
      var el = e.target.closest("[data-route]");
      if (!el) return;
      // skip platform-internal buttons that use onclick directly (ps2, platSwitch, etc.)
      if (
        el.getAttribute("onclick") &&
        !el.classList.contains("mob-nav-child") &&
        !el.classList.contains("mob-nav-standalone") &&
        !el.classList.contains("mob-nav-cta")
      ) {
        var oc = el.getAttribute("onclick");
        if (
          oc.indexOf("ps2") !== -1 ||
          oc.indexOf("platSwitch") !== -1 ||
          oc.indexOf("switchPortal") !== -1
        )
          return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
      window.eosNavigate(el.getAttribute("data-route"));
    },
    true,
  );

  // ── HIDE MOBILE NAV ON RESIZE TO DESKTOP ──
  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      if (typeof closeMobNav === "function") closeMobNav();
    }
  });

  // ── BACK / FORWARD BUTTON ──
  // When the browser moves through history, restore the right view without
  // pushing another entry (pushHistory = false)
  window.addEventListener("popstate", function (e) {
    var route = e.state && e.state.route ? e.state.route : "home";
    window.eosNavigate(route, false, false);
  });

  // ── LOAD FROM URL ──
  // If someone lands on /cortex-article-2 directly, show the right view.
  // Replace the initial history entry so the very first back press goes to home.
  (function () {
    var path = window.location.pathname.replace(/^\//, "") || "home";
    // Normalise: strip trailing slash
    path = path.replace(/\/$/, "") || "home";
    if (path !== "home") {
      // Replace (not push) so back from initial deep-link goes to home
      history.replaceState({ route: path }, "", "/" + path);
      window.eosNavigate(path, false, false);
    } else {
      history.replaceState({ route: "home" }, "", "/");
    }
  })();
})();
