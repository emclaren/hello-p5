const Plyr = require('plyr'); //works

const p5 = require('p5'); //works; 
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom');//works
const sketchfile = require('./sketches/sketch1.js');
const sketchfile2 = require('./sketches/sketch2.js');
const sketchfile3 = require('./sketches/sketch3.js');





//For targeting html elements o the class of hide can be added on play
let header = document.querySelector('.header');
let container = document.querySelector('.container');

// Sketches - TODO : CLEANUP SKETCHES
let p5test
let myp52
let myp53

// For Keeping track of current video time
let videoCurrentTime;
let videoPreviousTime;




//plyr bare minimum setup code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);

}





///Toggle Language Based on Header Link
var languageArray
document.getElementById('language-link-spanish').onclick=function(){
   languageArray= ["Descargar","Empezar","Referencia","Bibliotecas","Aprender","Comunidad"]
   languageToggle()   
   player.captions.language="es";
   removeCaptions();

};


document.getElementById('language-link-french').onclick=function(){
  languageArray= ["Télécharger","Start-fr","Commencer","Bibliothèques","Apprendre","Communauté"]
  languageToggle()
  player.captions.language="es"
  removeCaptions();
};


document.getElementById('language-link-english').onclick=function(){
  languageArray=["Download", "Start", "Reference", "Libraries", "Learn", "Community"]
  languageToggle()
  player.captions.language="en"
  removeCaptions();
};


function removeCaptions(){
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






var skipped = false;
var sceneChange =[0,  7,  12, 13, 15,17,19];





// Triggered when video start
player.on('playing', event => {
    header.classList.add('hide'); //shrink the header on large screens 
    container.classList.add('hide'); //Move the video so it is spaced correctly on large screens
});



// Triggered when video paused
player.on('pause', event => {
 p5test.frameRate(0); // make p5 sketch pause when video is paused
});


// Triggered when user selects a different time in the video
player.on('seeking', event => {

if(p5test){
   p5test.remove(); //remove old p5 sketch when user selects a different time in the video
}
   skipped = true;
    // p5test.frameRate(0);
});

player.on('seeked', event => {
   //this is what's causing the issue when you move. 

  
    p5test.frameRate(0);
});


  // //Watch time in video and trigger events
  player.on('timeupdate', event => {
    const instance = event.detail.plyr;


    // This part ensures that the counter only looks at seconds instead of milliseconds, this prevents the code from being run multiple times if the currentTime is logged multiple times within a second
    videoPreviousTime=videoCurrentTime;
    videoCurrentTime=Math.round(instance.currentTime)

    console.log(skipped);
    if(skipped){
         skipped=false
        for(var i=0; i< sceneChange.length;i++){
            if(videoCurrentTime>=sceneChange[i]  && videoCurrentTime<sceneChange[i+1]){
            console.log("scene change " + sceneChange[i]);
            console.log("current time in skipped part" + videoCurrentTime)
            console.log("skipped video current time before change" +videoCurrentTime);
            videoCurrentTime= sceneChange[i];
                   console.log("skipped video current time after change1" +videoCurrentTime);
            videoCurrentTime=== videoCurrentTime -1;
            console.log("skipped video current time after change2" +videoCurrentTime);
        }
        }
    }

    if(videoCurrentTime != videoPreviousTime){

        if(p5test){
            p5test.frameRate(60);
        }
        console.log("video current time in switch " + videoCurrentTime);
        console.log("video previous time in switch " + videoPreviousTime);
        skipped=false;
      
        console.log("videoCurrentTime is different than videoPreviousTime");


        switch (videoCurrentTime) {
            case sceneChange[0]:
            p5test = new p5(sketchfile);     
            break; 
            case sceneChange[1]:  
            p5test.remove();
            p5test = new p5(sketchfile3);

            break; 

            case sceneChange[2]:
            p5test.remove();
            p5test = new p5(sketchfile);

            break 

            case      sceneChange[3]:
            p5test.remove();
            p5test = new p5(sketchfile3);

            break

            case sceneChange[4]:
            p5test.remove();
            p5test = new p5(sketchfile);

            break

            case 54:

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






