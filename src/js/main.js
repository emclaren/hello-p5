
//For targeting html elements so the class of hide can be added on play
let header = document.querySelector('.header');
let container = document.querySelector('.container');


// Sketches - TODO : CLEANUP SKETCHES
let myp5
let myp52
let myp53

// For Keeping track of current video time
let videoCurrentTime;
let videoPreviousTime;



const Plyr= require('plyr');



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
        myp5 = new p5(sketch4);
        myp52 = new p5(sketch2);
        break;
        
        case 5:
        myp5.remove();
        myp52.remove();
        myp5 = new p5(sketch3);
        myp52 = new p5(sketch2);
        break; 

        case 8:
          myp5.remove();
        myp52.remove();
        // myp52.remove();
        myp5 = new p5(sketch);
        break 

        case 10:
        myp5.remove();
        myp5 = new p5(sketch);
        break

        case 13:
        myp5.remove();
        myp5 = new p5(sketch3);
        myp52 = new p5(sketch2);
        // myp5 = new p5(sketch);
        break

        case 54:
          myp5 = new p5(sketch3);
        myp52 = new p5(sketch2);
  
        break

        case 59:
        myp5.remove();
        myp5 = new p5(sketch2);
        break
        case 78:
        myp5.remove();
        myp5 = new p5(sketch3);
        break
        case 80:
        myp5.remove();
        break

        default:


      }

    }

  });
});



