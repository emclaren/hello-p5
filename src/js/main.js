
// required JS libraries
const Plyr = require('plyr'); //Plyr Video Player Source Code
const p5 = require('p5'); // P5 Source Code
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom');//P5 Dom Source Code



// For Keeping track of current video time
let videoCurrentTime;
let videoPreviousTime;
let videoTimeSeeked = false;


// For changing header styling on "play", and language change
const header = document.querySelector('.header');

// For toggling the text in the header on language change
let languageArray



// Sketch Files- TODO : CLEANUP SKETCHES
const laMonster = require('./sketches/laMonster.js');
const leaves = require('./sketches/leaves.js');
const logo = require('./sketches/logo.js');
const heart = require('./sketches/heart.js');
const fez = require('./sketches/fez.js');
const flock = require('./sketches/flock.js');
const pointillism = require('./sketches/pointillism.js');
const onLoad = require('./sketches/onLoad.js');
const lerpColor = require('./sketches/lerpColor.js');

const helloP5 = require('./sketches/helloP5.js');
const waves = require('./sketches/waves.js');
const linkSketch = require('./sketches/linkSketch.js');

const stars = require('./sketches/stars.js');
const sketchfile = require('./sketches/circleOnScreen.js');

const circleOnScreen = require('./sketches/circleOnScreen.js');
const p5isAJavascriptLibrary = require('./sketches/p5isAJavascriptLibrary.js');

const seriouslyCanvas = require('./sketches/seriouslyCanvas.js');
const rainbow = require('./sketches/rainbow.js');
const manyDots = require('./sketches/manyDots.js');
const sinLines = require('./sketches/sinLines.js');
const parabolicLines = require('./sketches/parabolicLines.js');
const circleExplosion = require('./sketches/circleExplosion.js');

let scene
let seriouslyScene
let loadScene
let canvasScene
let none





//Plyr Setup Code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
  scene = new p5(laMonster); 
  seriouslyScene = new p5(seriouslyCanvas);





///Toggle Language of Header & Captions Based on Selection
document.getElementById('language-link-english').onclick=function(){
  languageArray=["Download", "Start", "Reference", "Libraries", "Learn", "Community"]
  player.captions.language="en"
  languageToggle()
  removeOldCaptions();
  header.classList.remove('french'); //"french" class name is used to decrease header font size when French is selected
};

document.getElementById('language-link-spanish').onclick=function(){
 languageArray= ["Descargar","Empezar","Referencia","Bibliotecas","Aprender","Comunidad"]
 player.captions.language="es";
 languageToggle()   
 removeOldCaptions();
 header.classList.remove('french'); //"french" class name is used to decrease header font size when French is selected
};

document.getElementById('language-link-french').onclick=function(){
  languageArray= ["Télécharger","Start-fr","Commencer","Bibliothèques","Apprendre","Communauté"]
  player.captions.language="fr"
  languageToggle()
  removeOldCaptions();
  header.classList.add('french'); //"french" class name is used to decrease header font size when French is selected
};

// Remove Old Captions When you select a new language
function removeOldCaptions(){
 var  parentElement = document.getElementsByClassName('plyr__captions')[0];
 while (parentElement.hasChildNodes()) {
   parentElement.removeChild(parentElement.firstChild);
 }
}
// Change the text in the header
function languageToggle(){
  document.getElementById("nav-download").innerHTML = languageArray[0];
  document.getElementById("nav-start").innerHTML = languageArray[1];
  document.getElementById("nav-reference").innerHTML = languageArray[2]
  document.getElementById("nav-libraries").innerHTML = languageArray[3]
  document.getElementById("nav-learn").innerHTML = languageArray[4]
  document.getElementById("nav-community").innerHTML = languageArray[5]
}










// Triggered when video start
player.on('playing', event => {
    //Adds the class of hide on play, makes the header dissappear
    let header = document.querySelector('.header');
    let container = document.querySelector('.container');
    header.classList.add('hide'); 
    container.classList.add('hide');  
  });



// Triggered when video paused
player.on('pause', event => {
 scene.frameRate(0); // make p5 sketch pause when video is paused
});



var sceneChangeMap = [
{id: 0, time : 3.25, sketchfile: none},
{id: 1, time : 5.50, sketchfile: helloP5},
{id: 2, time : 8.25, sketchfile: logo},
{id: 3, time : 9.75, sketchfile: none},
{id: 4, time : 10.75, sketchfile: heart},
{id: 5, time : 17.50, sketchfile: leaves},
{id: 6, time : 24.25, sketchfile: pointillism},
{id: 7, time : 33.00, sketchfile: none},
{id: 8, time : 33.25, sketchfile: lerpColor},
{id: 9, time : 38, sketchfile: stars},
{id: 10, time : 46.25, sketchfile: leaves},
{id: 11, time : 50.50, sketchfile: circleExplosion},
{id: 12, time : 53.25, sketchfile: rainbow},
{id: 13, time : 56.00, sketchfile: none},
{id: 14, time : 56.5, sketchfile: circleOnScreen},
{id: 15, time : 65, sketchfile: manyDots},
{id: 16, time : 77, sketchfile: none},
{id: 17, time : 104.5, sketchfile:lerpColor},
{id: 17, time : 109.75, sketchfile:none},
{id: 18, time : 83.25, sketchfile: sinLines},
{id: 19, time : 88, sketchfile: none},
{id: 21, time : 100, sketchfile: linkSketch},
];





// Triggered when user selects a different time in the video
player.on('seeking', event => {

  if(scene){
       scene.remove(); //remove old p5 sketch when user selects a different time in the video
     }
     if(seriouslyScene){
      seriouslyScene.remove();
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
    var timeInVideo = instance.currentTime 
    var doubleTimeInVideo = timeInVideo *4
    var roundTimeInVideo = Math.round(doubleTimeInVideo)
    videoCurrentTime=roundTimeInVideo/4;
    console.log("video current time" + videoCurrentTime)



    // This part makes it so that the sketch will play even if you jumped to it
    if(videoTimeSeeked){
     videoTimeSeeked =false; //reset this variable to false so it doesn't run again
     for(var i=0; i< sceneChangeMap.length;i++){
      if(videoCurrentTime>=sceneChangeMap[i].time  && videoCurrentTime<sceneChangeMap[i+1].time){
        videoCurrentTime= sceneChangeMap[i].time;
        videoCurrentTime=== videoCurrentTime -1;
      }
      else if(videoCurrentTime<sceneChangeMap[0].time){
        scene = new p5(laMonster); 
        seriouslyScene= new p5(seriouslyCanvas);
      }
    }
  }

  if(videoCurrentTime != videoPreviousTime){
    if(scene){
        scene.frameRate(60); //sets the framerate back to normal after adjusting the time if the video is playing
     // scene1.frameRate(60); 
   }

   videoTimeSeeked =false;

   switch (videoCurrentTime) {
     case sceneChangeMap[0].time:
     scene.remove(); 
     seriouslyScene.remove();
     break; 
     case sceneChangeMap[1].time:
     scene = new p5(sceneChangeMap[1].sketchfile);  
     break;

     case sceneChangeMap[2].time:
     scene.remove();
     scene = new p5(sceneChangeMap[2].sketchfile);          
     break; 


     case sceneChangeMap[3].time:
     scene.remove();
     break;  


     case sceneChangeMap[4].time:
     scene.remove();
     scene = new p5(sceneChangeMap[4].sketchfile);  

     break; 

     case sceneChangeMap[5].time:
     scene.remove();
     scene = new p5(sceneChangeMap[5].sketchfile);  
     break; 

     case sceneChangeMap[6].time:
     scene.remove();
     scene = new p5(sceneChangeMap[6].sketchfile);  
     break; 

     case sceneChangeMap[7].time:
     scene.remove();
     scene = new p5(sceneChangeMap[7].sketchfile);  
     break; 

     case sceneChangeMap[8].time:
     scene.remove();
     scene = new p5(sceneChangeMap[8].sketchfile);  
     break; 

     case sceneChangeMap[9].time:
     scene.remove();
     scene = new p5(sceneChangeMap[9].sketchfile);  
     break; 

     case sceneChangeMap[10].time:
     scene.remove();
     scene = new p5(sceneChangeMap[10].sketchfile);  
     break; 

     case sceneChangeMap[11].time:
     scene.remove();
     scene = new p5(sceneChangeMap[11].sketchfile);  
     break; 

     case sceneChangeMap[12].time:
     scene.remove();
     scene = new p5(sceneChangeMap[12].sketchfile);  
     break; 

     case sceneChangeMap[13].time:
     scene.remove();
     scene = new p5(sceneChangeMap[13].sketchfile);  
     break; 

     case sceneChangeMap[14].time:
     scene.remove();
        scene = new p5(sceneChangeMap[14].sketchfile);  
        break; 


        case sceneChangeMap[15].time:
        scene.remove();
        scene = new p5(sceneChangeMap[15].sketchfile);  
        break; 


        case sceneChangeMap[16].time:
        scene.remove();
        scene = new p5(sceneChangeMap[16].sketchfile);  
        break; 

        case sceneChangeMap[17].time:
        scene.remove();
        scene = new p5(sceneChangeMap[17].sketchfile);  
        break; 

        case sceneChangeMap[18].time:
        scene.remove();
        scene = new p5(sceneChangeMap[18].sketchfile);  
        break; 

        case sceneChangeMap[19].time:
        scene.remove();
        scene = new p5(sceneChangeMap[19].sketchfile);  
        break; 

        case sceneChangeMap[20].time:
        scene.remove();
        scene = new p5(sceneChangeMap[20].sketchfile);  
        break; 







        scene.remove();
        break
        case 80:

        break

        default:
      }

    }

  });
});






