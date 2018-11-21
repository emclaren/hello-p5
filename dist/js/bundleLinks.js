
  /** Language Controls **/
  // Toggle Language of Header & Captions Based on Selection
  function toggleLanguage(e) {
    e.preventDefault();
    const lang = e.target.dataset.language;
    document.querySelectorAll('[data-' + lang + ']').forEach(function(elm) {
      elm.innerHTML = elm.dataset[lang];
    });

    // "french" class name is used to decrease header font size when French is selected, should be removed from EN & ES, and applied for FR
    document.getElementById('header-wrapper').classList.remove('french')

    if(lang=='french'){
      document.getElementById('header-wrapper').classList.add('french')
    }
  }

  // Find all the elements on the page that include "data-language", and trigger the language toggle when they are clicked
  document.querySelectorAll("[data-language]").forEach(function(elm) {
    elm.onclick = toggleLanguage;
  });