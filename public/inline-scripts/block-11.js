// ── EOS SLIDESHOW — Next / Prev ──
(function() {
  var track    = document.getElementById('eosSlideTrack');
  if (!track) return;
  var wrap     = track.parentElement;
  var CARD_W   = 296; // card width (280) + gap (16)
  var current  = 0;
  var TOTAL    = 6;   // number of real cards (not duplicates)
  var offset   = 0;   // manual offset in px
  var autoTimer;

  // Pause CSS animation and take manual control via transform
  function initManual() {
    // Kill CSS animation, switch to JS-driven transform
    track.style.animation = 'none';
    track.style.transform = 'translateX(0px)';
    offset = 0;
  }

  function goTo(idx) {
    // Clamp within real cards range
    if (idx < 0) idx = TOTAL - 1;
    if (idx >= TOTAL) idx = 0;
    current = idx;
    offset  = -(current * CARD_W);
    track.style.transition = 'transform 0.45s cubic-bezier(0.25,1,0.5,1)';
    track.style.transform  = 'translateX(' + offset + 'px)';
    resetAuto();
  }

  window.essStep = function(dir) {
    if (track.style.animation !== 'none') initManual();
    goTo(current + dir);
  };

  // Resume auto-advance after 4s idle
  function resetAuto() {
    clearTimeout(autoTimer);
    autoTimer = setTimeout(function() {
      goTo(current + 1);
    }, 4000);
  }

  // Start auto-advance from beginning
  // Give CSS animation 500ms to render first, then take over
  setTimeout(function() {
    initManual();
    resetAuto();
  }, 500);

  // Touch swipe support
  var touchStartX = 0;
  wrap.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    clearTimeout(autoTimer);
  }, { passive: true });
  wrap.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      essStep(dx < 0 ? 1 : -1);
    } else {
      resetAuto();
    }
  }, { passive: true });

  // Pause on hover
  wrap.addEventListener('mouseenter', function() { clearTimeout(autoTimer); });
  wrap.addEventListener('mouseleave', function() { resetAuto(); });
})();