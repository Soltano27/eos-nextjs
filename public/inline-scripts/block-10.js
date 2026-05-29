// ── MOBILE NAV JS ──

// ═══════════════════════════════════════
//  MOBILE NAV — complete logic
// ═══════════════════════════════════════

var _hamBtn = null;

function openMobNav() {
  document.getElementById("mob-nav").classList.add("open");
  document.body.style.overflow = "hidden";
  document.body.classList.add("mob-open");
  if (_hamBtn) _hamBtn.setAttribute("aria-label", "Close menu");
  if (_hamBtn) _hamBtn.classList.add("is-open");
}

function closeMobNav() {
  document.getElementById("mob-nav").classList.remove("open");
  document.body.style.overflow = "";
  document.body.classList.remove("mob-open");
  if (_hamBtn) _hamBtn.setAttribute("aria-label", "Open menu");
  if (_hamBtn) _hamBtn.classList.remove("is-open");
  document.querySelectorAll(".mob-nav-children").forEach(function (c) {
    c.classList.remove("open");
  });
  document.querySelectorAll(".mob-nav-arrow").forEach(function (a) {
    a.classList.remove("open");
  });
}

function mobToggle(id) {
  var el = document.getElementById(id);
  var arrow = document.getElementById(id + "-arrow");
  if (!el) return;
  var isOpen = el.classList.contains("open");
  document.querySelectorAll(".mob-nav-children").forEach(function (c) {
    c.classList.remove("open");
  });
  document.querySelectorAll(".mob-nav-arrow").forEach(function (a) {
    a.classList.remove("open");
  });
  if (!isOpen) {
    el.classList.add("open");
    if (arrow) arrow.classList.add("open");
  }
}

function mobNavParent(route, toggleId) {
  var childList = document.getElementById(toggleId);
  if (!childList) return;
  mobToggle(toggleId);
  if (typeof window.eosNavigate === "function") {
    window.eosNavigate(route, true);
  }
}

function mobRoute(el) {
  var route = el.getAttribute("data-route");
  if (!route) return;
  if (typeof window.eosNavigate === "function") {
    window.eosNavigate(route);
  }
}

// ── WIRE UP HAMBURGER ──
(function () {
  var navEl = document.querySelector("nav");
  if (!navEl) return;

  var hamBtn = document.getElementById("ham-btn");

  if (!hamBtn) {
    hamBtn = document.createElement("button");
    hamBtn.className = "ham-btn";
    hamBtn.id = "ham-btn";
    hamBtn.setAttribute("aria-label", "Open menu");
    hamBtn.innerHTML =
      '<span class="bar b1"></span>' +
      '<span class="bar b2"></span>' +
      '<span class="bar b3"></span>';
    navEl.appendChild(hamBtn);
  }

  hamBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (hamBtn.classList.contains("is-open")) {
      closeMobNav();
    } else {
      openMobNav();
    }
  });

  _hamBtn = hamBtn;
})();

// ── SWIPE DOWN TO CLOSE ──
(function () {
  var nav = document.getElementById("mob-nav");
  if (!nav) return;
  var startY = 0;
  nav.addEventListener(
    "touchstart",
    function (e) {
      startY = e.touches[0].clientY;
    },
    { passive: true },
  );
  nav.addEventListener(
    "touchend",
    function (e) {
      var dy = e.changedTouches[0].clientY - startY;
      if (dy > 60) closeMobNav();
    },
    { passive: true },
  );
})();
