// required JS libraries
const Plyr = require('plyr'); //Plyr Video Player Source Code
const p5 = require('p5'); // P5 Source Code, note it breaks if you try to use the minified version of the file. 
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom.min');//P5 Dom Source Code
// const p5play = require('./sketches/play.js');

let videoCurrentTime=0; // For keeping track of current time from plyr video playback
let videoTimeSeeked = false; // For adjusting the sketch if user jumps to different time in the video
let videoPlaying=false;  // For toggling plyr playback by clicking on the canvas overlay

const header = document.querySelector('.header'); // For changing header styling on "play", and language change

let languageArray; // For toggling the text in the header on language change

let scene; // Name of current p5 sketch
let noSketch; // Placeholder variable when no p5 sketch required

//Plyr Setup Code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player',{
    "debug":false,
    "fullscreen": {
      "enabled":false
    },
    "captions": {
      "active":true
    },
    "keyboard": {
      "global":true,
      "focused":true
    }
  });
  // updateSketch(); 
  













  
  player.on('ready', event =>{
    
    // const laMonster = require('./sketches/laMonster.js');
    //  scene = new p5(laMonster);  

    //  Freeze the game on load
    // if(scene){
    //   scene.frameRate(0);
    // }
    // lazy load the plyer poster
    let posterClass = document.getElementsByClassName('plyr__poster');
    posterClass[0].classList.add('lazy-load-background')
  });
  
  // Triggered when video start
  player.on('playing', event => {
    
    window.videoPlaying=true; 
    // adds the class of hide on play, to make the header shrink on play
    let header = document.querySelector('.header');
    let container = document.querySelector('.container');
    header.classList.add('shrink'); 
    container.classList.add('shrink'); 
    
    // Scroll to the bottom of the page when the player starts to simulate full-screen
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
    
    // Start P5 Sketch if it is paused 
    if(scene){
      scene.frameRate(60); 
    }
    videoPlaying=true;
    // make the css animation in the credits unpause  when the sketch is unpaused
    if(document.querySelector('.credits-wrapper') !== null){
      wrapper = document.querySelector('.credits-wrapper');
      wrapper.classList.remove('paused'); 
    }
  });
  
  
  // Triggered when video paused
  player.on('pause', event => {
    window.videoPlaying=false; 
    // make the css animation in the credits pause when the sketch is paused
    if(document.querySelector('.credits-wrapper') !== null){
      wrapper = document.querySelector('.credits-wrapper');
      wrapper.classList.add('paused'); 
    }
    // stop p5 sketch when video is paused
    if(scene){
      scene.frameRate(0); 
    }
    videoPlaying=false; 
  });
  
  
  // Import P5 Sketch Files
  // const laMonster = require('./sketches/laMonster.js');
  const visualizer = require('./sketches/visualizer.js');
  const helloP5Title = require('./sketches/hello-p5-title.js');
  const heartAnimation = require('./sketches/heart-animation.js');
  const leaves = require('./sketches/leaves.js');
  const pointillismLogo = require('./sketches/pointillism-logo.js');
  const wavemaker = require('./sketches/wavemaker.js');
  const stars = require('./sketches/stars.js');
  const targetSketch = require('./sketches/target-sketch.js');
  const rainbow = require('./sketches/rainbow.js');
  const singleCircle= require('./sketches/single-circle.js');
  const manyDots = require('./sketches/many-dots.js');
  const sinLines = require('./sketches/sin-lines.js');
  const rectangles = require('./sketches/rectangles.js');
  const lerpColor = require('./sketches/lerpColor.js');
  const waves = require('./sketches/waves.js');
  const forumLink = require('./sketches/forum-link.js');
  const webEditorLink = require('./sketches/webeditor-link.js');
  const circleExplosion = require('./sketches/circle-explosion.js');
  const credits = require('./sketches/credits.js'); 
  
  var sceneChangeMap = [
    // {time : 0, sketchfile: laMonster},
    {time : 2.75, sketchfile: noSketch},
    {time : 5.00, sketchfile: visualizer },
    {time : 7.75, sketchfile: noSketch},
    {time : 8.00, sketchfile: helloP5Title},
    {time : 9.75, sketchfile: noSketch},
    {time : 10.75, sketchfile: heartAnimation},
    {time : 17.50, sketchfile: leaves},
    {time : 24.50, sketchfile: noSketch},
    {time : 24.75, sketchfile: pointillismLogo},
    {time : 33.00, sketchfile: wavemaker},
    {time : 38.25, sketchfile: stars},
    {time : 50.50, sketchfile: targetSketch},
    {time : 53.75, sketchfile: rainbow},
    {time : 56.00, sketchfile: noSketch},
    {time : 56.5, sketchfile: singleCircle},
    {time : 63.25, sketchfile: manyDots},
    {time : 75.25, sketchfile: noSketch},
    {time : 78.50, sketchfile: sinLines},
    {time : 85.25, sketchfile: noSketch},
    {time : 89.50, sketchfile: rectangles},
    {time : 93, sketchfile: noSketch},
    {time : 94.5, sketchfile: webEditorLink},
    {time : 103.25, sketchfile:lerpColor},
    {time : 109, sketchfile: forumLink},
    {time : 116.25, sketchfile: waves},
    {time : 121.75, sketchfile: circleExplosion},
    {time : 136.5, sketchfile: noSketch},
    {time : 142, sketchfile: credits},
    {time : 168, sketchfile: noSketch},
  ];
  
  
  
  //Watch time in video and trigger P5 events 
  player.on('timeupdate', event => {

    let timeInVideo = event.detail.plyr.currentTime  //Receive current time info from plyr
    
    // Plyr's time in miliseconds is not always consistent, this standardizes it to always end with: 0, .25, .50,.75
    let multipleTimeInVideo = timeInVideo * 4
    let roundTimeInVideo = Math.round(multipleTimeInVideo)
    videoCurrentTime=roundTimeInVideo/4;
    
    // Useful for testing
    // console.log("video current time" + videoCurrentTime)
    
    window.videoCurrentTimeGlobal = videoCurrentTime; //create a global variable so that current time can be used within p5 sketches
    updateSketch(); // Function to see if a scene change should occur at the video CurrentTime
    
    // This part plays the correct sketch if a user jumps to a different part of the video 
    if(videoTimeSeeked){
     
      for(let i=0; i< sceneChangeMap.length;i++){
        if(videoCurrentTime >= sceneChangeMap[i].time  && videoCurrentTime < sceneChangeMap[i+1].time){
          videoCurrentTime = sceneChangeMap[i].time ;
          updateSketch();
        }
        videoTimeSeeked = false; //reset this variable to false so this if statement only runs once
      }
    }
    
    // Reload P5 canvas when the window size changes
    window.onresize = function() {
      for(let i=0; i< sceneChangeMap.length;i++){
        if(videoCurrentTime >= sceneChangeMap[i].time  && videoCurrentTime < sceneChangeMap[i+1].time){
          videoCurrentTime = sceneChangeMap[i].time ;
          updateSketch();
      
        } 
        
      }




    } 
    
    
    // Load a sketch if the current time of the video matches the list of sketches above
    function updateSketch(){
      for(var i=0; i<sceneChangeMap.length; i++){
        if(videoCurrentTime==sceneChangeMap[i].time){
          // Remove any p5 sketches currently playing
          if(scene){
            scene.remove();
          }
          // Play the sketch from the Scene change map
          scene = new p5(sceneChangeMap[i].sketchfile); 
        }
      }
    }
    
    // Remove P5 sketch when a new time in video is selected by user
    player.on('seeking', event => {
      if(scene){
        scene.remove(); 
      }
    });
    
    // Pause P5 sketch when a new time in video is selected by user
    player.on('seeked', event => {

      videoTimeSeeked  = true; //trigger an if statement to udpdate the sketch
      
      if(scene){
        scene.frameRate(0); 
      }
      if(document.querySelector('.credits-wrapper') !== null){
        wrapper = document.querySelector('.credits-wrapper');
        wrapper.classList.add('paused'); 
      }
    });
    
    player.on('ended', event => {
      if(scene){
        scene.frameRate(60); 
      }
      if(document.querySelector('.credits-wrapper') !== null){
        wrapper = document.querySelector('.credits-wrapper');
        wrapper.classList.remove('paused'); 
      }
    });
  });
  
  
  // Enable video pause by clicking on a sketch:
  // required because the video by clicking on video to pause is obstructed by P5 cavas overlay
  document.getElementById('video-overlay').onclick=function(){
    if(videoPlaying){
      player.pause();
      
    }else{
      player.play();
    }
  }
  
  
  
  
  
  //*** Language Controls ***/
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
