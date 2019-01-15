/*********************
// Circle
// Description: Pulsing Circle & Example Code Block
// Try it: https://editor.p5js.org/hello-p5/sketches/r1niD9cME
*********************/

var circle = function (p5) {
  let fadeIn = 0
  let pulseSpeed = 0.5
  let sizeChange = 0
  let mousePosition
  let xcoord
  let ycoord
  let diam
  let languageText
  let lineThickness

  p5.setup = () => {
    // Create p5 canvas
    p5.pixelDensity(1)
    let windowWidth = document.documentElement.clientWidth
    let windowHeight = windowWidth * 0.562
    p5.canvas = p5.createCanvas(windowWidth, windowHeight)
    p5.canvas.parent('video-overlay')
    // Change visible text based on language chosen
    let currentLanguage = localStorage.getItem('myLanguage')
    if (currentLanguage === 'spanish') {
      languageText = 'haga clic aquí'
    } else if (currentLanguage === 'french') {
      languageText = 'Voir ici'
    } else {
      languageText = 'Click here to try it'
    }
    // Create example html code block, styling can be found in canvas.scss
    p5.div = p5.createDiv('<a href="https://editor.p5js.org/emclaren/sketches/SkO-FKawQ" target="_blank"> <div class="p5-single-circle-code-example"> <code>function setup() { <ul><li>createCanvas(400, 400);</li><li>strokeWeight(4);</li><li> stroke(255,255,255); </li><li>   fill(237,34,93);</li></ul>} </br> function draw(){<ul><li>  ellipse(200, 200, 100, 100);</li></ul>}</code><br> <span>' + languageText + '</span></div></a>')
    p5.div.parent('video-overlay')
    // p5.div.addClass('p5-single-circle-code-example')
    lineThickness = p5.width / 350
  }

  p5.draw = () => {
    // Clear the p5 canvas each frame
    p5.clear()
    // Create pulsing circle
    p5.fill(237, 34, 93, fadeIn)
    p5.stroke(255, 255, 255, fadeIn)
    p5.strokeWeight(lineThickness)
    xcoord = p5.width * 0.25
    ycoord = p5.height * 0.4
    mousePosition = p5.map(p5.mouseX, 0, p5.width, 0, 30)
    diam = p5.width * 0.12 + sizeChange + mousePosition

    p5.ellipse(xcoord, ycoord, diam, diam)
    sizeChange += pulseSpeed
    // Reverse direction of pulse once it reaches limit
    if (sizeChange > 3 || sizeChange < -3) {
      pulseSpeed *= -1
    }
    // Fade in circle when plyr video reaches 57 seconds.
    if (window.videoCurrentTimeGlobal > 57) {
      if (fadeIn < 255) {
        fadeIn += 15
      }
    }
  }
}

module.exports = circle
