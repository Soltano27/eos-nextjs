function ps2(p){
  document.querySelectorAll('#view-neuroed-elearning-full .pp').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('#view-neuroed-elearning-full .psw-b:not(.lk)').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('#view-neuroed-elearning-full .psni').forEach(x=>x.classList.remove('active'));
  var pg=document.getElementById('pp2-'+p);
  if(pg)pg.classList.add('active');
  var bn=document.getElementById('pbtn2-'+p);
  if(bn)bn.classList.add('active');
  document.querySelector('#view-neuroed-elearning-full .pm-main').scrollTop=0;
}
function pt2(el){
  el.closest('.ptabs').querySelectorAll('.ptab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}