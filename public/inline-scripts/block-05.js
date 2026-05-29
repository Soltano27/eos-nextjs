(function(){
    var qs=[
      {q:"How many hours of sleep do you get on average each night?",opts:["Less than 5 hours","5–6 hours","7–8 hours","More than 9 hours"],scores:[3,2,0,1]},
      {q:"How often do you exercise in a week?",opts:["Never","Once or twice","3–4 times","5 or more times"],scores:[3,2,1,0]},
      {q:"How would you describe your daily stress level?",opts:["Constantly overwhelmed","Often stressed","Sometimes stressed","Rarely stressed"],scores:[3,2,1,0]},
      {q:"How many glasses of water do you drink daily?",opts:["Less than 2","2–4 glasses","5–7 glasses","8 or more glasses"],scores:[3,2,1,0]},
      {q:"How often do you consume alcohol?",opts:["Daily","Several times a week","Occasionally","Rarely or never"],scores:[3,2,1,0]},
      {q:"How would you rate your diet quality?",opts:["Mostly fast food and processed meals","Mixed — some healthy some not","Mostly balanced with occasional treats","Very healthy — whole foods, vegetables, fish"],scores:[3,2,1,0]},
      {q:"How often do you smoke or use tobacco products?",opts:["Daily","Occasionally","Rarely","Never"],scores:[3,2,1,0]},
      {q:"How often do you engage in mentally stimulating activities (reading, puzzles, learning)?",opts:["Rarely or never","Once a month or less","Weekly","Daily"],scores:[3,2,1,0]},
      {q:"When did you last check your blood pressure?",opts:["Never","More than a year ago","6–12 months ago","Within the last 6 months"],scores:[3,2,1,0]},
      {q:"How would you describe your social connections?",opts:["Isolated — I rarely connect with others","Limited — a few interactions","Moderate — regular social contact","Strong — connected and supported"]  ,scores:[3,2,1,0]}
    ];
    var cur=0,tot=0;
    function render(){
      var q=qs[cur];
      document.getElementById('baq-q-count').textContent='Question '+(cur+1)+' of '+qs.length;
      document.getElementById('baq-pct').textContent=Math.round((cur/qs.length)*100)+'%';
      document.getElementById('baq-bar').style.width=Math.max(10,Math.round((cur/qs.length)*100))+'%';
      document.getElementById('baq-question').textContent=q.q;
      var op=document.getElementById('baq-options');
      op.innerHTML='';
      q.opts.forEach(function(o,i){
        var b=document.createElement('button');
        b.textContent=o;
        b.style.cssText='width:100%;padding:14px 18px;border:1px solid rgba(10,58,110,0.12);border-radius:10px;font-size:14px;color:var(--ink);font-family:var(--sans);cursor:pointer;text-align:left;background:var(--bg);transition:all 0.15s;';
        b.onmouseenter=function(){this.style.borderColor='var(--blue)';this.style.background='rgba(10,132,200,0.04)';};
        b.onmouseleave=function(){this.style.borderColor='rgba(10,58,110,0.12)';this.style.background='var(--bg)';};
        b.onclick=function(){tot+=q.scores[i];cur++;if(cur>=qs.length){showResult();}else{render();}};
        op.appendChild(b);
      });
    }
    function showResult(){
      document.getElementById('baq-progress-wrap').style.display='none';
      document.getElementById('baq-question').style.display='none';
      document.getElementById('baq-options').style.display='none';
      document.getElementById('baq-result').style.display='block';
      var age=parseInt(document.getElementById('baq-score-display').textContent)||0;
      var realAge=new Date().getFullYear()-2000;
      var brainAge=realAge+Math.round((tot/30)*15);
      document.getElementById('baq-score-display').textContent=brainAge;
      var v,a;
      if(tot<=8){v='Your brain is in good shape.';a='Your lifestyle habits are supporting your neurological health well. Keep prioritising sleep, movement, and stress management. Stay connected to EOS for tips on going even further.';}
      else if(tot<=18){v='There is room to strengthen your brain health.';a='Some of your habits may be placing unnecessary strain on your brain. Small consistent changes — better sleep, more water, less stress — make a significant difference over time.';}
      else{v='Your brain needs attention now.';a='Several of your current habits are high-risk for neurological health. This is not a diagnosis — but it is a signal to act. Start with one change this week and reach out to us for support.';}
      document.getElementById('baq-verdict').textContent=v;
      document.getElementById('baq-advice').textContent=a;
    }
    window.baqReset=function(){cur=0;tot=0;document.getElementById('baq-progress-wrap').style.display='';document.getElementById('baq-question').style.display='';document.getElementById('baq-options').style.display='';document.getElementById('baq-result').style.display='none';render();};
    render();
  })();