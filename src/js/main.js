
//Target html elements so the class of hide can be added on play
var header = document.querySelector('.header');
var container = document.querySelector('.container');

var sketch ; //I currently have a variable named sketch that changes the contents of the draw function in p5. Is this the best strategy? or should I be using namespacing to create multiple sketches and then importing them. 

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

//Watch time in video and trigger events
  player.on('timeupdate', event => {
    const instance = event.detail.plyr;
    if(instance.currentTime>2){
      console.log("more than three, less than 5");
      sketch = "sketch1";
    }
    if(instance.currentTime>5){
      console.log("more than 5");
      sketch = "sketch2";
    }
  });
});











// //timeupdate demo - logs time of video being played
// var video = document.getElementById('player');
// if(typeof(window.MediaController) === 'function')
// {
//   var controller = new MediaController();
//   video.controller = controller;

// } 
// else
// {
//   controller = null;
// }

// video.addEventListener('play', function() 
// {

//   console.log("Video started playing");

// }, false);

// video.addEventListener('pause', function()
// {
//    // header.classList.remove('hide');
//    container.classList.remove('hide');
//  console.log("Video paused ");
// }, false);

// video.addEventListener('playing', function()
// {
//     header.classList.add('hide');
//     container.classList.add('hide');

//  console.log("testing playing");
// }, false);
// video.addEventListener('ended', function()
// {

//  if(controller)
//  {

//   controller.pause();
// }
// else
// {
//   video.pause();

// }
// }, false);

// video.addEventListener('timeupdate', function()
// {
//   // console.log(video.currentTime)

//   // if (video.currentTime>1){
//   //   console.log("GREATER THAN 2");
//   //  ypos=mouseY;
//   //  xpos=mouseX;

//   // }
//   // else if(video.currentTime<1){
//   //   console.log("greater than 1");


//   // }

// }, false);


