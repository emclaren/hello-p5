//plyr demo
document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr('#player');

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play', 'click', () => { 
    player.play();
  });

  // Pause
  on('.js-pause', 'click', () => { 
    player.pause();
  });

  // Stop
  on('.js-stop', 'click', () => { 
    player.stop();
  });

  // Rewind
  on('.js-rewind', 'click', () => { 
    player.rewind();
  });

  // Forward
  on('.js-forward', 'click', () => { 
    player.forward();
  });
});






//timeupdate demo

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


  console.log("i played");
  p5js();

}, false);
    
video.addEventListener('pause', function()
{

}, false);
    
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
  console.log(video.currentTime)
  
}, false);





function p5js(){
    console.log("this is the p5js function");
    function setup() {
      console.log("this is the setup function");
                 var canvas = createCanvas(windowWidth, windowWidth/1.85);
           canvas.parent('video-overlay');
           // noStroke();
           background(AAAAAA);
           ellipseMode(RADIUS);
            // Set the starting position of the shape
            xpos = width / 2;
            ypos = height / 2;

    }

    function draw() {
      ellipse(200, 200, 200, 200);
    }
}