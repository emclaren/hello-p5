const Plyr = require('plyr'); //works
const seriously = require('./seriously/seriously'); //works
const chroma = require('./seriously/chroma'); //works
const p5 = require('p5'); //works; 
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom');//works
const sketchfile = require('./sketches/sketch1.js');
const sketchfile2 = require('./sketches/sketch2.js');
console.log("sketchfile 1"+ sketchfile);
console.log("sketchfile 2"+ sketchfile2);

// console.log("sketchfile 2"+ sketchfile());
// console.log("sketchfile 3"+ sketchfile.sketch);
// console.log("sketchfile 4"+ sketchfile().sketch);

// console.log("s.s"+sketchfile.sketch);
// console.log("()"+sketchfile(sketch);



var p5test = new p5(sketchfile);
var p5test2 = new p5(sketchfile2);

// toy example from https://www.sitepoint.com/getting-started-browserify/
const names = require('./sketches/sketch.js');
console.log("names"+names)
findSuperman(names());
function findSuperman(values) {
    console.log(values[1])
}




// P5 sketches load fine from here, but don't compile when they are imported from another file

// example p5js sketch that works fine

let windowWidth2 = 500;




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
        myp5 = new p5(sketchfile());
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



