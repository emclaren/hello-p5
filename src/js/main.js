// required JS libraries
const Plyr = require('plyr'); //Plyr Video Player Source Code
const p5 = require('p5'); // P5 Source Code
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom');//P5 Dom Source Code

// For Keeping track of current video time
let videoCurrentTime;
let videoPreviousTime;
let videoTimeSeeked = false;
let videoPlaying=false;

// For changing header styling on "play", and language change
const header = document.querySelector('.header');

// For toggling the text in the header on language change
let languageArray

let scene
let seriouslyScene
let loadScene
let canvasScene
let none


//Plyr Setup Code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player',{
    "debug":false,
    "fullscreen": {
      "enabled":false
    },
    "keyboard": {
      "global":true,
      "focused":true
    }
  });


  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
  scene = new p5(laMonster);
  seriouslyScene = new p5(seriouslyCanvas);



  document.getElementById('video-overlay').onclick=function(){
    if(videoPlaying){
      player.pause();
    }else{
      player.play();
    }
  }


// Triggered when video start
player.on('playing', event => {
    //Adds the class of hide on play, makes the header dissappear
    let header = document.querySelector('.header');
    let container = document.querySelector('.container');
    header.classList.add('hide'); 
    container.classList.add('hide'); 
    videoPlaying=true;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });

  });


// Triggered when video paused
player.on('pause', event => {
 scene.frameRate(0); // make p5 sketch pause when video is paused
 videoPlaying=false;
});





// Sketch Files- Cleaned up
const seriouslyCanvas = require('./sketches/seriously-canvas.js');
const helloP5Title = require('./sketches/hello-p5-title.js');
const heartAnimation = require('./sketches/heart-animation.js');
const pointillismLogo = require('./sketches/pointillism-logo.js');
const targetSketch = require('./sketches/target-sketch.js');
const singleCircle= require('./sketches/single-circle.js');

// Sketch Files- TODO : CLEANUP SKETCHES
const laMonster = require('./sketches/laMonster.js');
const leaves = require('./sketches/leaves.js');
const forum = require('./sketches/forum.js');
const flock2 = require('./sketches/flock2.js');
const lerpColor = require('./sketches/lerpColor.js');
const webEditor = require('./sketches/webeditor.js');
const waves = require('./sketches/waves.js');
const target2 = require('./sketches/targeted2.js');
const wave2 = require('./sketches/wave2.js');
const visualizer = require('./sketches/visualizer.js');
const stars = require('./sketches/stars.js');
const rainbow = require('./sketches/rainbow.js');
const manyDots = require('./sketches/manyDots.js');
const sinLines = require('./sketches/sinlines.js');
const circleExplosion = require('./sketches/circleExplosion.js');
const helloP5 = require('./sketches/helloP5.js');


var sceneChangeMap = [
{id: 0, time : 3, sketchfile: none},
{id: 1, time : 5.25, sketchfile: visualizer, seriously:true },
{id: 2, time : 7.75, sketchfile: none},
{id: 3, time : 8.00, sketchfile: helloP5Title},
{id: 4, time : 9.75, sketchfile: none},
{id: 5, time : 10.75, sketchfile: heartAnimation},
{id: 6, time : 17.50, sketchfile: leaves},
{id: 7, time : 24.50, sketchfile: none},
{id: 8, time : 24.75, sketchfile: pointillismLogo},
{id: 9, time : 33.00, sketchfile: wave2},
{id: 10, time : 38.25, sketchfile: stars},
{id: 11, time : 50.50, sketchfile: targetSketch},
{id: 12, time : 53.50, sketchfile: rainbow},
{id: 13, time : 56, sketchfile: none},
{id: 14, time : 56.5, sketchfile: singleCircle},
{id: 15, time : 63.25, sketchfile: manyDots},
{id: 16, time : 75.25, sketchfile: none},
{id: 17, time : 78.50, sketchfile: sinLines},
{id: 18, time : 85.25, sketchfile: none},
{id: 19, time : 89, sketchfile: target2},
{id: 20, time : 91, sketchfile: none},
{id: 21, time : 94.5, sketchfile: webEditor},
{id: 22, time : 104, sketchfile:lerpColor},
{id: 23, time : 103, sketchfile: none},
{id: 24, time : 109, sketchfile: forum},
{id: 25, time : 116.25, sketchfile: waves},
{id: 26, time : 121.75, sketchfile: none},
{id: 27, time : 122, sketchfile: circleExplosion},
{id: 28, time : 135, sketchfile: flock2},
];



//Watch time in video and trigger P5 events
player.on('timeupdate', event => {
    videoPreviousTime=videoCurrentTime; // XXXX
    let timeInVideo = event.detail.plyr.currentTime  //Receive current time info from plyr
    updateSketch();
    // Plyr's time in miliseconds is not always consistent, this standardizes it to always end with: 0, .25, .50,.75
    let multipleTimeInVideo = timeInVideo *4
    let roundTimeInVideo = Math.round(multipleTimeInVideo)
    videoCurrentTime=roundTimeInVideo/4;

    console.log("video current time" + videoCurrentTime)

    window.videoCurrentTimeGlobal = videoCurrentTime; //create a global variable so that current time can be used within p5 sketches
    
    // updateSketch(); // Function to see if a scene change should occur at the video CurrentTime

console.log("videoTimeSeeked: " + videoTimeSeeked)
    // This part makes it so that the sketch will play even if you jumped to it
    if(videoTimeSeeked){
     videoTimeSeeked = false; //reset this variable to false so it doesn't run again
     for(let i=0; i< sceneChangeMap.length;i++){
      if(videoCurrentTime >= sceneChangeMap[i].time  && videoCurrentTime < sceneChangeMap[i+1].time){
        videoCurrentTime = sceneChangeMap[i].time ;
 console.log(" sceneChangeMap[i].time" +  sceneChangeMap[i].time)
 console.log(" videoCurrentTime #1 " +  videoCurrentTime)
        // videoCurrentTime -= .25;
        console.log(" videoCurrentTime #2 " +  videoCurrentTime)
      }
      // else if(videoCurrentTime<sceneChangeMap[0].time){
      //   scene = new p5(laMonster); 
      //   seriouslyScene= new p5(seriouslyCanvas);
      // }
    }
  }






// Load a sketch if the current time of the video matches the list of sketches above
function updateSketch(){
  for(var i=0; i<sceneChangeMap.length; i++ ){
    if(videoCurrentTime==sceneChangeMap[i].time){
      if(scene){
        scene.remove();
      }
      if(seriouslyScene){
        seriouslyScene.remove()
      }
      scene = new p5(sceneChangeMap[i].sketchfile); 
      if(sceneChangeMap[i].seriously){
       seriouslyScene= new p5(seriouslyCanvas);
     }
   }

 }
}


// Remove P5 sketch when a new time in video is selected by user
player.on('seeking', event => {
  if(scene){
       scene.remove(); 
       if(seriouslyScene){
        seriouslyScene.remove();
      }
    }
    videoTimeSeeked  = true;
  });


// Pause P5 sketch when a new time in video is selected by user
player.on('seeked', event => {
  scene.frameRate(0); //pause the p5 sketch when the user selects a time in the video
});



// Unpause the sketch after adjusting the time if the video is playing
  if(videoCurrentTime != videoPreviousTime){
    if(scene){
        scene.frameRate(60);
      }
      videoTimeSeeked =false; 
    }
  });




// Resize  P5 and Seriously Canvases when the window size changes
window.onresize = function() {
  scene.windowWidth=window.innerWidth;
  scene.windowHeight=window.innerWidth * .562;
  if(scene){
    scene.resizeCanvas(scene.windowWidth, scene.windowHeight); //If there is a p5 Canvas, resize
  }
  if(seriouslyScene){
    seriouslyScene.resizeCanvas(scene.windowWidth, scene.windowHeight);//If there is a seriously Canvas, resize
  }
} 



//*** Language Controls **/
///Toggle Language of Header & Captions Based on Selection
document.getElementById('language-link-english').onclick=function(){
  languageArray=["Download", "Start", "Reference", "Libraries", "Learn", "Community"] //Words that will replace the menu links
  player.captions.language="en"
  languageToggle();
};

document.getElementById('language-link-spanish').onclick=function(){
 languageArray= ["Descargar","Empezar","Referencia","Bibliotecas","Aprender","Comunidad"] //Words that will replace the menu links
 player.captions.language="es";
 languageToggle() ;  
};

document.getElementById('language-link-french').onclick=function(){
  languageArray= ["Télécharger","Commencer","Référence","Bibliothèques","Apprendre","Communauté"] //Words that will replace the menu links
  player.captions.language="fr"
  languageToggle();
  header.classList.add('french'); //"french" class name is used to decrease header font size when French is selected
};


function languageToggle(){
  //"french" class name is used to decrease header font size when French is selected, should be removed from EN & ES, and applied for FR
  header.classList.remove('french'); 
  
  // Swap out menu text
  document.getElementById("nav-download").innerHTML = languageArray[0];
  document.getElementById("nav-start").innerHTML = languageArray[1];
  document.getElementById("nav-reference").innerHTML = languageArray[2]
  document.getElementById("nav-libraries").innerHTML = languageArray[3]
  document.getElementById("nav-learn").innerHTML = languageArray[4]
  document.getElementById("nav-community").innerHTML = languageArray[5]

  //Creates a global variable so we can access current language in p5 sketches
  window.videoLanguage=player.captions.language; 

  //Remove on-screen captions immediately from view when language is toggled
  let  parentElement = document.getElementsByClassName('plyr__captions')[0];
  while (parentElement.hasChildNodes()) {
   parentElement.removeChild(parentElement.firstChild);
 }

}


});


