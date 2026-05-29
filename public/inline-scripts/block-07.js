function nfaToggle(id){
    var el=document.getElementById('nfa-'+id);
    var ar=document.getElementById('nfa-'+id+'-arrow');
    var open=el.style.display!=='none';
    el.style.display=open?'none':'block';
    ar.style.transform=open?'rotate(-90deg)':'rotate(0deg)';
  }