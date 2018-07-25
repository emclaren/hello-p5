const Plyr = require('plyr'); //Plyr Video Player Source Code
const p5 = require('p5'); // P5 Source Code
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom');//P5 Dom Source Code

// Sketch Files- TODO : CLEANUP SKETCHES

const sketchfile = require('./sketches/circleOnScreen.js');
const circleOnScreen = require('./sketches/circleOnScreen.js');
const p5isAJavascriptLibrary = require('./sketches/p5isAJavascriptLibrary.js');
const triangles = require('./sketches/triangles.js');
const seriouslyCanvas = require('./sketches/seriouslyCanvas.js');
let scene
let myp52
let myp53




// For Keeping track of current video time
let videoCurrentTime;
let videoPreviousTime;
let videoTimeSeeked = false;



//Plyr Setup Code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
}

// Triggered when video start
player.on('playing', event => {

    //For targeting html elements o the class of hide can be added on play
    let header = document.querySelector('.header');
    let container = document.querySelector('.container');
    header.classList.add('hide'); 
    container.classList.add('hide'); 
});



// Triggered when video paused
player.on('pause', event => {
 scene.frameRate(0); // make p5 sketch pause when video is paused
});


const sceneChange =[0,8,28,50];
// const sketch = []

// Triggered when user selects a different time in the video
player.on('seeking', event => {

    if(scene){
       scene.remove(); //remove old p5 sketch when user selects a different time in the video
    }
    videoTimeSeeked  = true;
    
});

player.on('seeked', event => {
  scene.frameRate(0); //pause the p5 sketch when the user selects a time in the video
});


//Watch time in video and trigger events
player.on('timeupdate', event => {
    const instance = event.detail.plyr;
    // This part ensures that the counter only looks at seconds instead of milliseconds, this prevents the code from being run multiple times if the currentTime is logged multiple times within a second
    videoPreviousTime=videoCurrentTime;
    videoCurrentTime=Math.round(instance.currentTime)
    if(videoTimeSeeked ){
       videoTimeSeeked =false
       for(var i=0; i< sceneChange.length;i++){
        if(videoCurrentTime>=sceneChange[i]  && videoCurrentTime<sceneChange[i+1]){
            videoCurrentTime= sceneChange[i];
            videoCurrentTime=== videoCurrentTime -1;
        }
    }
}

if(videoCurrentTime != videoPreviousTime){
    if(scene){
        scene.frameRate(60); //sets the framerate back to normal after adjusting the time if the video is playing
    }
    console.log("video current time" + videoCurrentTime);
    console.log("video previous time" + videoPreviousTime);
    videoTimeSeeked =false;

    console.log("videoCurrentTime is different than videoPreviousTime");

    switch (videoCurrentTime) {
        case sceneChange[0]:
           scene = new p5(triangles); 
        break; 

        case sceneChange[1]:
        scene1.remove();
        scene = new p5(p5isAJavascriptLibrary); 
          // scene = new p5(sketch[1]);  

        break

        case sceneChange[2]:
        scene = new p5(circleOnScreen);  
        break

        case 59:

        break
        case 78:

        break
        case 80:

        break

        default:
    }

}

});
});




///Toggle Language Based on Header Link
var languageArray
document.getElementById('language-link-spanish').onclick=function(){
 languageArray= ["Descargar","Empezar","Referencia","Bibliotecas","Aprender","Comunidad"]
 player.captions.language="es";
 languageToggle()   
 removeOldCaptions();

};


document.getElementById('language-link-french').onclick=function(){
  languageArray= ["Télécharger","Start-fr","Commencer","Bibliothèques","Apprendre","Communauté"]
  player.captions.language="es"
    languageToggle()
  removeOldCaptions();
};


document.getElementById('language-link-english').onclick=function(){
  languageArray=["Download", "Start", "Reference", "Libraries", "Learn", "Community"]
  
  player.captions.language="en"
  languageToggle()
  removeOldCaptions();
};


// Remove Old Captions When you select a new language
function removeOldCaptions(){
 var  parentElement = document.getElementsByClassName('plyr__captions')[0];
 while (parentElement.hasChildNodes()) {
     parentElement.removeChild(parentElement.firstChild);
 }
}

function languageToggle(){
  document.getElementById("nav-download").innerHTML = languageArray[0];
  document.getElementById("nav-start").innerHTML = languageArray[1];
  document.getElementById("nav-reference").innerHTML = languageArray[2]
  document.getElementById("nav-libraries").innerHTML = languageArray[3]
  document.getElementById("nav-learn").innerHTML = languageArray[4]
  document.getElementById("nav-community").innerHTML = languageArray[5]
}



