(function(){
  function setLang(lang){
    document.body.classList.toggle('lang-en', lang === 'en');
    try{ localStorage.setItem('noxatry-lang', lang); }catch(e){}
    document.querySelectorAll('.lang-opt').forEach(function(el){
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
    var saved = 'fr';
    try{ saved = localStorage.getItem('noxatry-lang') || 'fr'; }catch(e){}
    setLang(saved);
    document.querySelectorAll('.lang-opt').forEach(function(el){
      el.addEventListener('click', function(){
        setLang(el.getAttribute('data-lang'));
      });
    });
  });
})();
