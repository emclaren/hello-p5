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
    myp5.frameRate(60);
  });

player.on('pause', event => {
 myp5.frameRate(0);
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


        switch (videoCurrentTime) {
          case 0:
          myp5 = new p5(sketch);
          break;
          
          case 5:
          myp5.remove();
          myp5 = new p5(sketch2);
          break;
          
          case 8:
          myp5.remove();
          myp5 = new p5(sketch3);
          break 

          case 10:
          myp5.remove();
          myp5 = new p5(sketch);
          break

          case 13:
          myp5.remove();
          // myp5 = new p5(sketch);
          break

          case 54:
          myp5.remove();
          myp5 = new p5(sketch);
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
    // console.log('this is the default');

  }

}

});
  });



