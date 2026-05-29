var hccDietScore=1;
  function hccDiet(v,el){hccDietScore=v;document.querySelectorAll('#hcc-diet-opts button').forEach(function(b){b.style.background='var(--bg)';b.style.color='var(--dim)';b.style.borderColor='rgba(10,58,110,0.15)';});el.style.background='var(--blue)';el.style.color='#fff';el.style.borderColor='var(--blue)';hccUpdate();}
  function hccUpdate(){
    var sl=parseInt(document.getElementById('hcc-sleep').value);
    var ex=parseInt(document.getElementById('hcc-exercise').value);
    var wa=parseInt(document.getElementById('hcc-water').value);
    var st=parseInt(document.getElementById('hcc-stress').value);
    document.getElementById('hcc-sleep-val').textContent=sl+' hrs';
    document.getElementById('hcc-exercise-val').textContent=ex+' days';
    document.getElementById('hcc-water-val').textContent=wa+' glasses';
    document.getElementById('hcc-stress-val').textContent=st+'/10';
    var score=Math.round(((sl/10)*20)+((ex/7)*25)+((wa/12)*20)+((1-st/10)*20)+(hccDietScore/3*15));
    score=Math.min(100,Math.max(0,score));
    document.getElementById('hcc-score').textContent=score+'/100';
    document.getElementById('hcc-score-bar').style.width=score+'%';
    var f;
    if(score>=75)f='Strong foundation. Your daily habits are supporting good neurological health. Keep going and stay connected to EOS for the next level.';
    else if(score>=50)f='Moderate. Some habits are working in your favour, others are working against you. Pick one area to improve this week.';
    else f='Your brain needs more support than it is currently getting. Focus on sleep and stress first — they have the highest neurological impact.';
    document.getElementById('hcc-feedback').textContent=f;
  }
  hccUpdate();