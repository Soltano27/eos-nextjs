// Alias routing: map old route IDs to new full-page IDs
(function(){
  var aliases = {
    'neuroed':              'neuroed-full',
    'neuroed-elearning':    'neuroed-elearning-full',
    'innovation':           'innovation-full',
    'innovation-mima':      'innovation-mima-full'
  };
  var orig = window._eosNavigate || null;
  // Patch the existing delegate click handler by intercepting at document level FIRST
  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-route]');
    if(!el) return;
    var r = el.getAttribute('data-route');
    if(aliases[r]){
      e.stopImmediatePropagation();
      e.preventDefault();
      var all = document.querySelectorAll('.page-view');
      all.forEach(function(v){ v.classList.remove('active'); });
      var target = document.getElementById('view-' + aliases[r]);
      if(target){ target.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
    }
  }, true); // capture phase — fires before the existing bubble handler
})();