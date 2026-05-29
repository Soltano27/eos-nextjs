(function(){
  var map = {
    'about':            'about-full',
    'about-legacy':     'about-legacy-full',
    'about-mission':    'about-mission-full',
    'about-pillars':    'about-pillars-full',
    'about-team':       'about-team-full',
    'programs':         'programs-full',
    'programs-culture': 'programs-culture-full',
    'programs-guild':   'programs-guild-full',
    'programs-cbhi':    'programs-cbhi-full'
  };
  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-route]');
    if(!el) return;
    var r = el.getAttribute('data-route');
    if(!map[r]) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    document.querySelectorAll('.page-view').forEach(function(v){ v.classList.remove('active'); });
    var t = document.getElementById('view-' + map[r]);
    if(t){ t.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
  }, true);
})();