const Plyr = require('plyr'); //works
const seriously = require('./seriously/seriously'); //works
const chroma = require('./seriously/chroma'); //works
const p5 = require('p5'); //works; 
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom');//works
const sketchfile = require('./sketches/sketch.js');
const names = require('./sketches/sketch.js');


console.log("sketchfile"+sketchfile);
console.log("names"+names)
// console.log("s.s"+sketchfile.sketch);
// console.log("()"+sketchfile(sketch);






findSuperman(names());

function findSuperman(values) {
  
      console.log('It\'s Superman!');
  
    console.log(values[1])
}

// console.log(sketch);


// P5 sketches load fine from here, but don't compile when they are imported from another file
// var sketchfile = require('./sketches/sketch') //doesn't throw error but appears to be empty



// let windowWidth2 = window.innerWidth;

let windowWidth2 = 500;

// console.log("sketchfile");
// //test sketch 1
// var sketch = function(p){
//     p.xpos=100;
//     p.ypos=100;
//     p.setup = function(){
//         this._pixelDensity = 1;

       
//         var canvas = p.createCanvas(windowWidth2, windowWidth2/1.85); //make this mobile friendly
//         canvas.parent('video-overlay');
//         p.fill(0,133,255);
//          p.background(200,200,200);
//             // console.log("setup")
//     }

//     p.draw = function(){
//              p.background(200,200,200);
//              p.createDiv('this is some text');
//         p.strokeWeight(5);
//         p.stroke(255,255,255);
//         p.ellipse(p.xpos, p.ypos, 100, 100);
//         p.textSize(32);
//         // console.log("drawing")
//     }
// }
    




var sketch2 = function(q){

 q.xpos=100;
 q.ypos=100;
 q.setup = function(){
     q.pixelDensity(1);
     q.canvas= q.createCanvas(windowWidth2, windowWidth2/1.755, 'webgl');
     q.canvas.id('newcanvas');
     q.canvas.parent('video-overlay');
     q.seriously, // the main object that holds the entire composition
     q.sourceImage, // a wrapper object for our source image
     q.target; // a wrapper object for our target canvas
     q.reformat;
     q.seriously = new seriously();
     q.reformat = q.seriously.transform('reformat');


     q.sourceImage = q.seriously.source('#player');// Create a source object by passing a CSS query string.
     q.target = q.seriously.target('#newcanvas');// now do the same for the target canvas

        
     q.target.source = q.sourceImage;// connect any node as the source of the target. we only have one.
     q.target.width= window.innerWidth * .92;
     q.target.height=window.innerWidth /2;


     //set up reformat parameters
     q.reformat.width = q.target.width;
     q.reformat.height = q.target.height;
     q.reformat.mode = "cover";

         // connect all our nodes in the right order
         q.reformat.source = '#player';
         q.chroma = q.seriously.effect('chroma');
         q.chroma.source =  q.reformat;
         q.target.source = q.chroma;

         q.r = 76/255;
         q.g = 249/255;
         q.b = 43/255;
         q.chroma.screen = [q.r,q.g,q.b,1];

         q.seriously.go();
     }



     q.draw = function(){

     }



q.resize =  function() {
 q.resizeCanvas(windowWidth2, windowWidth2/1.755, 'webgl');
 q.target.width= window.innerWidth * .92;
 q.target.height=window.innerWidth /2;
 //set up reformat parameters
 q.reformat.width = q.target.width;
 q.reformat.height = q.target.height;
 q.reformat.mode = "cover";

} 

window.onresize = q.resize;

}





// }
// console.log("sketchfile from mainjs" + sketchfile.sketch);
 

//For targeting html elements o the class of hide can be added on play
let header = document.querySelector('.header');
let container = document.querySelector('.container');




// Sketches - TODO : CLEANUP SKETCHES
let myp5
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


// Triggered when video start
player.on('playing', event => {
    header.classList.add('hide'); //shrink the header on large screens 
    container.classList.add('hide'); //Move the video so it is spaced correctly on large screens
  });

// Triggered when video paused
player.on('pause', event => {
 myp5.frameRate(0); //pause the p5 sketch
});


  // //Watch time in video and trigger events
  player.on('timeupdate', event => {
    const instance = event.detail.plyr;

    // This part ensures that the counter only looks at seconds instead of milliseconds, this prevents the code from being run multiple times if the currentTime is logged multiple times within a second
    videoPreviousTime=videoCurrentTime;
    videoCurrentTime=Math.round(instance.currentTime)
    if(videoCurrentTime != videoPreviousTime){
      console.log("videoCurrentTime is different than videoPreviousTime");


      switch (videoCurrentTime) {
        case 0:
        myp5 = new p5(sketchfile);
        // console.log(myp5);//prints something. 
        // console.log(sketchfile);

        // console.log(sketchfile.sketch);
        myp52 = new p5(sketch2);
        // myp52 = new p5(sketchfile.sketch2);
        break;
        
        case 5:
        myp5.remove();
        // myp52.remove();
        // myp5 = new p5(sketch3);
        // myp52 = new p5(sketch2);
        break; 

        case 8:
        //   myp5.remove();
        // myp52.remove();
        // myp52.remove();
        // myp5 = new p5(sketch);
        break 

        case 10:
        // myp5.remove();
        // myp5 = new p5(sketch);
        break

        case 13:
        // myp5.remove();
        // myp5 = new p5(sketch3);
        // myp52 = new p5(sketch2);
        // myp5 = new p5(sketch);
        break

        case 54:
        //   myp5 = new p5(sketch3);
        // myp52 = new p5(sketch2);
  
        break

        case 59:
        // myp5.remove();
        // myp5 = new p5(sketch2);
        break
        case 78:
        // myp5.remove();
        // myp5 = new p5(sketch3);
        break
        case 80:
        // myp5.remove();
        break

        default:


      }

    }

  });
});



