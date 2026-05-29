// ── MOBILE NAV JS ──

// ═══════════════════════════════════════
//  MOBILE NAV — complete logic
// ═══════════════════════════════════════

var _hamBtn = null; // reference to hamburger button

function openMobNav() {
  document.getElementById('mob-nav').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('mob-open');
  if (_hamBtn) _hamBtn.setAttribute('aria-label', 'Close menu');
  if (_hamBtn) _hamBtn.classList.add('is-open');
}

function closeMobNav() {
  document.getElementById('mob-nav').classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('mob-open');
  if (_hamBtn) _hamBtn.setAttribute('aria-label', 'Open menu');
  if (_hamBtn) _hamBtn.classList.remove('is-open');
  // also close all open accordion sections on close
  document.querySelectorAll('.mob-nav-children').forEach(function(c) { c.classList.remove('open'); });
  document.querySelectorAll('.mob-nav-arrow').forEach(function(a) { a.classList.remove('open'); });
}

// Accordion: toggle children list open/closed
// Only toggles — does NOT navigate. Navigation is separate.
function mobToggle(id) {
  var el    = document.getElementById(id);
  var arrow = document.getElementById(id + '-arrow');
  if (!el) return;
  var isOpen = el.classList.contains('open');
  // close all sections first
  document.querySelectorAll('.mob-nav-children').forEach(function(c) { c.classList.remove('open'); });
  document.querySelectorAll('.mob-nav-arrow').forEach(function(a) { a.classList.remove('open'); });
  // if it was closed, open it
  if (!isOpen) {
    el.classList.add('open');
    if (arrow) arrow.classList.add('open');
  }
}

// Parent tap: 
//   First tap  → open children (accordion), navigate to parent index, menu stays open
//   Arrow tap  → just toggle accordion (handled via data-toggle-only on the arrow span)
function mobNavParent(route, toggleId) {
  var childList = document.getElementById(toggleId);
  if (!childList) return;

  // Toggle the accordion open/closed
  mobToggle(toggleId);

  // Navigate to the parent index page — pass keepNavOpen=true
  // so menu stays open and children remain visible
  if (typeof window.eosNavigate === 'function') {
    window.eosNavigate(route, true);
  }
}

// Child tap: navigate to child page and close menu
function mobRoute(el) {
  var route = el.getAttribute('data-route');
  if (!route) return;
  if (typeof window.eosNavigate === 'function') {
    window.eosNavigate(route); // keepNavOpen defaults to false — closes menu
  }
}

// ── INJECT HAMBURGER + CLOSE button into existing nav ──
(function() {
  var navEl = document.querySelector('nav');
  if (!navEl) return;

  var hamBtn = document.createElement('button');
  hamBtn.className = 'ham-btn';
  hamBtn.setAttribute('aria-label', 'Open menu');
  // Three bars = open / X = close — CSS handles the visual swap
  hamBtn.innerHTML =
    '<span class="bar b1"></span>' +
    '<span class="bar b2"></span>' +
    '<span class="bar b3"></span>';

  hamBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (hamBtn.classList.contains('is-open')) {
      closeMobNav();
    } else {
      openMobNav();
    }
  });

  navEl.appendChild(hamBtn);
  _hamBtn = hamBtn; // store reference for open/close state swap
})();

// ── SWIPE DOWN TO CLOSE ──
(function() {
  var nav = document.getElementById('mob-nav');
  if (!nav) return;
  var startY = 0;
  nav.addEventListener('touchstart', function(e) { startY = e.touches[0].clientY; }, { passive: true });
  nav.addEventListener('touchend', function(e) {
    var dy = e.changedTouches[0].clientY - startY;
    if (dy > 60) closeMobNav();
  }, { passive: true });
})();