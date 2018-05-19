'use strict';

//plyr demo

console.log("yoohoo");
document.addEventListener('DOMContentLoaded', function () {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  var player = new Plyr('#player');

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play', 'click', function () {
    player.play();
  });

  // Pause
  on('.js-pause', 'click', function () {
    player.pause();
  });

  // Stop
  on('.js-stop', 'click', function () {
    player.stop();
  });

  // Rewind
  on('.js-rewind', 'click', function () {
    player.rewind();
  });

  // Forward
  on('.js-forward', 'click', function () {
    player.forward();
  });
});

