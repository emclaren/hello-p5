/** Language Controls **/
// If local sesison has a language saved already, translate all elements on the page
let lang = localStorage.getItem('myLanguage')
updateLanguage()

// Toggle Language of Header & Captions Based on mouse event
function toggleLanguage (e) {
  e.preventDefault()
  lang = e.target.dataset.language
  localStorage.setItem('myLanguage', lang)
  updateLanguage()
}

// Change the language of all "data" elements text, update heading size for french
function updateLanguage () {
  document.querySelectorAll('[data-' + lang + ']').forEach(function (elm) {
    elm.innerHTML = elm.dataset[lang]
  })

  // "french" class name is used to decrease header font size when French is selected, should be removed from EN & ES, and applied for FR
  document.getElementById('header-wrapper').classList.remove('french')
  if (lang == 'french') {
    document.getElementById('header-wrapper').classList.add('french')
  }
}

// Find all the elements on the page that include "data-language", and trigger the language toggle when they are clicked
document.querySelectorAll('[data-language]').forEach(function (elm) {
  elm.onclick = toggleLanguage
})





// for(let i=0; i< document.querySelectorAll("[data-language]").length; i++) {
//   if(document.querySelectorAll("[data-language]")[i].dataset.language == e.target.dataset.language){
//     player.captions.currentTrack = i
//   }
// }




// // // Creates a global variable so we can access current language in p5 sketches
// // window.videoLanguage = e.target.dataset.language
// // Remove on-screen captions immediately from view when language is toggled
// let parentElement = document.getElementsByClassName('plyr__captions')[0]
// while (parentElement.hasChildNodes()) {
//   parentElement.removeChild(parentElement.firstChild)
// }