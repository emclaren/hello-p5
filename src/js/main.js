//plyr bare minimum setup code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  function on(selector, type, callback) {
  document.querySelector(selector).addEventListener(type, callback, false);
  }
});







//timeupdate demo - logs time of video being played
var video = document.getElementById('player');
if(typeof(window.MediaController) === 'function')
{
  var controller = new MediaController();
  video.controller = controller;

} 
else
{
  controller = null;
}

video.addEventListener('play', function() 
{

  console.log("Video started playing");


}, false);

// video.addEventListener('pause', function()
// {

//  console.log("Video paused ");
// }, false);

video.addEventListener('ended', function()
{
  if(controller)
  {
    controller.pause();
  }
  else
  {
    video.pause();

  }
}, false);

video.addEventListener('timeupdate', function()
{
  // console.log(video.currentTime)

  // if (video.currentTime>1){
  //   console.log("GREATER THAN 2");
  //  ypos=mouseY;
  //  xpos=mouseX;

  // }
  // else if(video.currentTime<1){
  //   console.log("greater than 1");
   

  // }
  
}, false);


