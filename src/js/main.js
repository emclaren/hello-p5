//Target html elements so the class of hide can be added on play
let header = document.querySelector('.header');
let container = document.querySelector('.container');
let myp5
let myp52
let myp53

var videoCurrentTime;

var videoPreviousTime;


//plyr bare minimum setup code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

//plyr triggered when video starts
player.on('playing', event => {
    header.classList.add('hide'); //shrink the header on large screens 
    container.classList.add('hide'); //Move the video so it is spaced correctly on large screens
  });



    // //Watch time in video and trigger events
    player.on('timeupdate', event => {
      const instance = event.detail.plyr;
      // console.log(instance.currentTime);
      videoPreviousTime=videoCurrentTime;
      videoCurrentTime=Math.round(instance.currentTime)
      console.log(videoCurrentTime + ","+ videoPreviousTime);
      console.log("math round" +Math.round(instance.currentTime))
      if(videoCurrentTime != videoPreviousTime){
        console.log("it's different");

        if(videoCurrentTime == 2){
          myp5 = new p5(sketch);


        }
        if(videoCurrentTime == 5 ){
        // myp5.background(255,0, 123);
        myp5.remove();
        console.log("more than 5");
        myp52 = new p5(sketch2);
      }

      if(videoCurrentTime== 7){
        myp52.remove();
        myp53 = new p5(sketch3);
      }
    }

  });
});



