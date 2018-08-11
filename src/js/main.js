const Plyr = require('plyr'); //Plyr Video Player Source Code
const p5 = require('p5'); // P5 Source Code
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom');//P5 Dom Source Code


// Sketch Files- TODO : CLEANUP SKETCHES


const laMonster = require('./sketches/laMonster.js');

const logo = require('./sketches/logo.js');
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
const heart = require('./sketches/heart.js');
const circleOnScreen = require('./sketches/circleOnScreen.js');
const p5isAJavascriptLibrary = require('./sketches/p5isAJavascriptLibrary.js');
const triangles = require('./sketches/triangles.js');
const seriouslyCanvas = require('./sketches/seriouslyCanvas.js');
const rainbow = require('./sketches/rainbow.js');
const manyDots = require('./sketches/manyDots.js');
const sinLines = require('./sketches/sinLines.js');
const parabolicLines = require('./sketches/parabolicLines.js');
const circleExplosion = require('./sketches/circleExplosion.js');
const punch = require('./sketches/punch.js');
let scene
let scene1
let loadScene
let canvasScene
let none


// For Keeping track of current video time
let videoCurrentTime;
let videoPreviousTime;
let videoTimeSeeked = false;


// var hole =function(){
//   // var x;
//     console.log("hole is running");
//     var c=document.getElementById("defaultCanvas0");
//     var ctx=c.getContext("2d");
//     ctx.clearRect(300,100,300,700);
//   // x++
// }


// Probably delete this
var testFunction=function(){
  scene1 = new p5(seriouslyCanvas);
}




p5.Image.prototype.punchOut = function(p5Image) {
 
    if(p5Image === undefined){
        p5Image = this;
    }
    var currBlend = this.drawingContext.globalCompositeOperation;
 
    var scaleFactor = 1;
    if (p5Image instanceof p5.Graphics) {
        scaleFactor = p5Image._pInst._pixelDensity;
    }
 
    var copyArgs = [
        p5Image,
        0,
        0,
        scaleFactor*p5Image.width,
        scaleFactor*p5Image.height,
        0,
        0,
        this.width,
        this.height
    ];
 
    this.drawingContext.globalCompositeOperation = "destination-out";
    this.copy.apply(this, copyArgs);
    this.drawingContext.globalCompositeOperation = currBlend;
};




//Plyr Setup Code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
    scene = new p5(laMonster); 
// scene1 = new p5(seriouslyCanvas);
 
    
   // scene1= new p5(seriouslyCanvas)




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

const sceneChange = 44


var sceneChangeMap = [
    {time : .25, sketchfile: none},
    {time : 3.25, sketchfile: none},
    {time : 5.25, sketchfile: helloP5},
    {time : 8.25, sketchfile: logo},
    {time : 10.75, sketchfile: heart},
    {time : 17.50, sketchfile: circleExplosion},
    {time : 24.25, sketchfile: pointillism},
    {time : 33.25, sketchfile: lerpColor},
    {time : 38, sketchfile: stars},
    // {time : 39, sketchfile: parabolicLines},
    {time : 46.25, sketchfile: helloP5},
     {time : 50.25, sketchfile: helloP5},
    {time : 53, sketchfile: rainbow},
    {time : 56.5, sketchfile: circleOnScreen},
    {time : 65, sketchfile: manyDots},
      {time : 79.25, sketchfile: heart},
    {time : 81},
    {time : 83, sketchfile: helloP5},
    {time : 87, sketchfile: sinLines},
    {time : 83, sketchfile: helloP5},
    {time : 100, sketchfile: linkSketch},
    {time : 110, sketchfile: linkSketch},
    {time : 120, sketchfile: stars},
    {time : 150, sketchfile: stars},
      {time : 120, sketchfile: linkSketch},
    {time : 150, sketchfile: stars},
       {time : 120, sketchfile: linkSketch},
    {time : 150, sketchfile: stars}
];

// var timing = {time: 0 , sketch:"triangles"; time: 9 , sketch:"circleOnScreen" };




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
   var timeInVideo = instance.currentTime 
   var doubleTimeInVideo = timeInVideo *4
   var roundTimeInVideo = Math.round(doubleTimeInVideo)

    videoCurrentTime=roundTimeInVideo/4;
    console.log("video current time" + videoCurrentTime)



    // This part makes it so that the sketch will play even if you jumped to it
    if(videoTimeSeeked){
     videoTimeSeeked =false;
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
     // scene1.frameRate(60); 
      }

      videoTimeSeeked =false;

      // console.log("videoCurrentTime is different than videoPreviousTime");

      switch (videoCurrentTime) {
       case sceneChangeMap[0].time:
        scene1 = new p5(seriouslyCanvas);
       break; 
        
      case sceneChangeMap[1].time:
        scene.remove(); 
        scene1.remove();
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
        scene = new p5(sceneChangeMap[3].sketchfile); 
       // scene1= new p5(seriouslyCanvas)
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
        // scene = new p5(sceneChangeMap[13].sketchfile);  
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


    case sceneChangeMap[21].time:
        scene.remove();
        scene = new p5(sceneChangeMap[21].sketchfile);  
        break; 




   

        // case 61:
        // scene.remove();     
        // scene = new p5(sinLines);    

        // break
        // case 64:
        // scene.remove();  
        //  scene = new p5(parabolicLines);    
        //         // scene = new p5(sinLines);    

        //         break



             scene.remove();
             break
             case 80:

             break

             default:
           }

         }

       });
});






