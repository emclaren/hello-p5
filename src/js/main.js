/** Loading CSS Animation turns off when page is ready **/
window.addEventListener('load', function (event) {
  setTimeout(function () {
    document.getElementById('body').classList.add('loaded')
    setTimeout(function () {
      document.getElementsByClassName('plyr__controls')[0].setAttribute('style', 'z-index: 2147483647 !important')
    }, 500)
  }, 50)
})

/** Required JS libraries **/
const Plyr = require('plyr') // Plyr Video Player Source Code
const p5 = require('p5') // P5 Source Code, note it breaks if you try to use the minified version of the file.
const p5dom = require('../../node_modules/p5/lib/addons/p5.dom.min') // P5 Dom Source Code

/** Variables **/
let videoCurrentTime = 0 // For keeping track of current time from plyr video playback
let videoTimeSeeked = false // For adjusting the sketch if user jumps to different time in the video
let videoPlaying = false // For toggling plyr playback by clicking on the canvas overlay
const header = document.querySelector('.header') // For changing header styling on "play", and language change
let languageArray // For toggling the text in the header on language change
let scene // Name of current p5 sketch
let noSketch // Placeholder variable when no p5 sketch required
let wrapper // Wrapper for Credits Div on last scene

/** Import P5 Sketch Files **/
const laMonster = require('./sketches/la-monster')
const visualizer = require('./sketches/visualizer.js')
const helloP5Title = require('./sketches/hello-p5-title.js')
const heartAnimation = require('./sketches/heart-animation.js')
const leaves = require('./sketches/leaves.js')
const pointillismLogo = require('./sketches/pointillism-logo.js')
const wavemaker = require('./sketches/wavemaker.js')
const stars = require('./sketches/stars.js')
const target = require('./sketches/target')
const rainbow = require('./sketches/rainbow.js')
const singleCircle = require('./sketches/single-circle.js')
const manyDots = require('./sketches/many-dots.js')
const sinLines = require('./sketches/sin-lines.js')
const rectangles = require('./sketches/rectangles.js')
const lerpColor = require('./sketches/lerpColor.js')
const waves = require('./sketches/waves.js')
const forumLink = require('./sketches/forum-link.js')
const webEditorLink = require('./sketches/webeditor-link.js')
const circleExplosion = require('./sketches/circle-explosion.js')
const credits = require('./sketches/credits.js')

/** Timing for starting each p5 sketch **/
let sceneChangeMap = [
  { time: -0.25, sketchfile: laMonster },
  { time: 2.75, sketchfile: noSketch },
  { time: 5.00, sketchfile: visualizer },
  { time: 7.75, sketchfile: noSketch },
  { time: 8.00, sketchfile: helloP5Title },
  { time: 9.75, sketchfile: noSketch },
  { time: 10.75, sketchfile: heartAnimation },
  { time: 17.50, sketchfile: leaves },
  { time: 24.50, sketchfile: noSketch },
  { time: 24.75, sketchfile: pointillismLogo },
  { time: 32.75, sketchfile: noSketch },
  { time: 33.00, sketchfile: wavemaker },
  { time: 38.25, sketchfile: stars },
  { time: 50.50, sketchfile: target },
  { time: 53.75, sketchfile: rainbow },
  { time: 56.00, sketchfile: noSketch },
  { time: 56.5, sketchfile: singleCircle },
  { time: 63.25, sketchfile: manyDots },
  { time: 75.25, sketchfile: noSketch },
  { time: 78.50, sketchfile: sinLines },
  { time: 85.25, sketchfile: noSketch },
  { time: 89.50, sketchfile: rectangles },
  { time: 93, sketchfile: noSketch },
  { time: 94.5, sketchfile: webEditorLink },
  { time: 103.25, sketchfile: lerpColor },
  { time: 109, sketchfile: forumLink },
  { time: 116.25, sketchfile: waves },
  { time: 121.75, sketchfile: circleExplosion },
  { time: 136.5, sketchfile: noSketch },
  { time: 142, sketchfile: credits },
  { time: 168, sketchfile: noSketch }
]

/** Dynamically adjust video size to download  **/
/* did not use Plyr code, as the size/quality f eature was under active development */
let source = document.getElementById('mp4')
if (document.documentElement.clientWidth <= 480) {
  source.setAttribute('src', 'dist/assets/video/p5video_480.mp4')
} else if (document.documentElement.clientWidth <= 720) {
  source.setAttribute('src', 'dist/assets/video/p5video_720.mp4')
} else if (document.documentElement.clientWidth <= 720) {
  source.setAttribute('src', 'dist/assets/video/p5video_1080.mp4')
} else {
  source.setAttribute('src', 'dist/assets/video/p5video_1440.mp4')
}

/** Plyr Set-up code **/
document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#player', {
    'debug': false,
    'fullscreen': {
      'enabled': false
    },
    'captions': {
      'active': true,
      'update': true
    },
    'keyboard': {
      'global': true,
      'focused': true
    }
  })

  player.on('ready', event => {
    // Add sketch on load so it will appear when you first press play, fixes glitch caused by slow rendering
    scene = new p5(laMonster)
    // Freeze the sketch on load
    if (scene) {
      scene.frameRate(0)
    }
  })

  /** Plyr - triggered when video starts **/
  player.on('playing', event => {
    if ((document.documentElement.clientWidth / document.documentElement.clientHeight) >= 1.65) {
      window.videoPlaying = true
      // adds the class of hide on play, to make the header shrink on play
      let header = document.querySelector('#header-wrapper')
      let container = document.querySelector('#sketch-wrapper')
      header.classList.add('shrink')
      container.classList.add('shrink')

      // Scroll to the bottom of the page when the player starts to simulate full-screen
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    }
    // Start P5 Sketch if it is paused
    if (scene) {
      scene.frameRate(60)
    }
    videoPlaying = true
    // make the css animation in the credits unpause  when the sketch is unpaused
    if (document.querySelector('#credits-wrapper') !== null) {
      wrapper = document.querySelector('#credits-wrapper')
      wrapper.classList.remove('paused')
    }
  })

  /** Plyr - triggered on video pause **/
  player.on('pause', event => {
    window.videoPlaying = false
    // make the css animation in the credits pause when the sketch is paused
    if (document.querySelector('#credits-wrapper') !== null) {
      wrapper = document.querySelector('#credits-wrapper')
      wrapper.classList.add('paused')
    }
    // stop p5 sketch when video is paused
    if (scene) {
      scene.frameRate(0)
    }
    videoPlaying = false
  })

  /** Plyr - triggered 4 times every second while playing, this is used to trigger p5 events **/
  player.on('timeupdate', event => {
    let timeInVideo = event.detail.plyr.currentTime // Receive current time info from plyr
    // Plyr's time in miliseconds is not always consistent, this standardizes it to always end with: 0, .25, .50,.75
    let multipleTimeInVideo = timeInVideo * 4
    let roundTimeInVideo = Math.round(multipleTimeInVideo)
    videoCurrentTime = roundTimeInVideo / 4
    // // Uncomment this when testing:
    // console.log("video current time" + videoCurrentTime)
    window.videoCurrentTimeGlobal = videoCurrentTime // create a global variable so that current time can be used within p5 sketches
    updateSketch() // Function to see if a scene change should occur at the video CurrentTime
    // This part plays the correct sketch if a user jumps to a different part of the video
    if (videoTimeSeeked) {
      reloadP5()
      videoTimeSeeked = false // reset this variable to false so this if statement only runs once
    }

    // Reload P5 canvas when the window size changes
    window.onresize = function () {
      reloadP5()
    }

    // Load a sketch if the current time of the video matches the timing array (Scene Change Map)
    function updateSketch () {
      for (let i = 0; i < sceneChangeMap.length; i++) {
        if (videoCurrentTime === sceneChangeMap[i].time) {
          // Remove any p5 sketches currently playing
          if (scene) {
            scene.remove()
          }
          // Play the sketch from the Scene change map
          scene = new p5(sceneChangeMap[i].sketchfile)
        }
      }
    }

    // Reload the sketch if the window size changes or scene is skipped
    function reloadP5 (){
      for (let i = 0; i < sceneChangeMap.length; i++) {
        if (videoCurrentTime >= sceneChangeMap[i].time && videoCurrentTime < sceneChangeMap[i + 1].time) {
          videoCurrentTime = sceneChangeMap[i].time
          updateSketch()
        }
      }
    }

    // Remove P5 sketch when a new time in video is selected by user
    player.on('seeking', event => {
      if (scene) {
        scene.remove()
      }
    })
    // Pause P5 sketch when a new time in video is selected by user
    player.on('seeked', event => {
      videoTimeSeeked = true // trigger an if statement to udpdate the sketch
      if (scene) {
        scene.frameRate(0)
      }
      if (document.querySelector('#credits-wrapper') !== null) {
        wrapper = document.querySelector('#credits-wrapper')
        wrapper.classList.add('paused')
      }
    })
    player.on('ended', event => {
      if (scene) {
        scene.frameRate(60)
      }
      if (document.querySelector('#credits-wrapper') !== null) {
        wrapper = document.querySelector('#credits-wrapper')
        wrapper.classList.remove('paused')
      }
    })
  })

  // Enable video pause by clicking on a sketch:
  // required because the video by clicking on video to pause is obstructed by P5 cavas overlay
  document.getElementById('video-overlay').onclick = function () {
    if (videoPlaying) {
      player.pause()
    } else {
      player.play()
    }
  }

  /** Language Controls **/
  // Toggle Language of Header & Captions Based on Selection
  // function toggleLanguage(e) {
    // e.preventDefault();
    // const lang = e.target.dataset.language;
    // document.querySelectorAll('[data-' + lang + ']').forEach(function(elm) {
    //   elm.innerHTML = elm.dataset[lang];
    // });



    // "french" class name is used to decrease header font size when French is selected, should be removed from EN & ES, and applied for FR
    // document.getElementById('header-wrapper').classList.remove('french')
    // if(lang=='french'){
    //   document.getElementById('header-wrapper').classList.add('french')
    // }
  // }


  // // Find all the elements on the page that include "data-language", and trigger the language toggle when they are clicked
  // document.querySelectorAll("[data-language]").forEach(function(elm) {
  //   elm.onclick = toggleLanguage;
  // });
})
