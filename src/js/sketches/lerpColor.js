/*********************
// Lerp Color
// Description: Random shapes in four colors, MouseX and MouseY affect the number of shapes and the size
// Credit: Based on the P5 Lerp Color example sketch, available here: https://p5js.org/examples/color-lerp-color.html
// Try it: https://editor.p5js.org/emclaren/sketches/BkEgChzn7
*********************/

const lerpColor = (p5) => {
  let fadeIn = 0 // Fade in the shapes
  let offset // Variable that determines the size of the random shape
  let outerColor1 // Color variable for the outside left side of the screen
  let outerColor2 // Color variable for  the outside right side of the screen
  let blendColor1 // Color variable for the middle left side of the scren
  let blendColor2 // Color variable for the middle right side of the screen
  let cutoutSize // size of the hole in the canvas
  let numShapes

  p5.setup = () => {
    p5.pixelDensity(1)
    let windowWidth = document.documentElement.clientWidth
    let windowHeight = windowWidth * 0.562
    p5.canvas = p5.createCanvas(windowWidth, windowHeight)
    p5.canvas.parent('video-overlay')
    p5.noStroke()
    numShapes = 10 // give numShape a value, in case mouseX doesn't exist
    offset = 40 // give offset a value, in case mouseY doesn't exist
    cutoutSize = p5.width / 6.35 // size of the canvas to remove to show the video underneath
  }

  p5.draw = () => {
    p5.frameRate(7) // Slow down the sketch
    p5.clear()
    outerColor1 = p5.color(255, 0, 0, fadeIn * 255) // Color on the outside left side of the screen
    outerColor2 = p5.color(0, 0, 255, fadeIn * 255) // Color on the outside right side of the screen
    blendColor1 = p5.lerpColor(outerColor1, outerColor2, 0.33) // Color in the middle left side of the scren
    blendColor2 = p5.lerpColor(outerColor2, outerColor2, 0.66) // Color in the middle right side of the screen
    for (let i = 0; i < numShapes; i++) {
      p5.fill(outerColor1) // Draw randomshapes on the outside
      offset = p5.map(p5.mouseY, 0, p5.width, 0, p5.width / 1.2) // Determines the size of the random shape
      p5.quad(p5.random(-p5.width / 20 - offset, p5.width / 4.5), p5.random(p5.height),
        p5.random(-p5.width / 20 - offset, p5.width / 4.5), p5.random(p5.height),
        p5.random(-p5.width / 20 - offset, p5.width / 4.5), p5.random(p5.height),
        p5.random(-p5.width / 20 - offset, p5.width / 4.5), p5.random(p5.height))
      p5.fill(blendColor1)
      p5.quad(p5.random(p5.width / 6 - offset, p5.width / 2 + offset), p5.random(p5.height),
        p5.random(p5.width / 6 - offset, p5.width / 2 + offset), p5.random(p5.height),
        p5.random(p5.width / 6 - offset, p5.width / 2 + offset), p5.random(p5.height),
        p5.random(p5.width / 6 - offset, p5.width / 2 + offset), p5.random(p5.height))
      p5.fill(blendColor2)
      p5.quad(p5.random(p5.width - p5.width / 6 + offset, p5.width - p5.width / 2 - offset), p5.random(p5.height),
        p5.random(p5.width - p5.width / 6 + offset, p5.width - p5.width / 2 - offset), p5.random(p5.height),
        p5.random(p5.width - p5.width / 6 + offset, p5.width - p5.width / 2 - offset), p5.random(p5.height),
        p5.random(p5.width - p5.width / 6 + offset, p5.width - p5.width / 2 - offset), p5.random(p5.height))
      p5.fill(outerColor2)
      p5.quad(p5.random(p5.width - p5.width / 4.5, p5.width + p5.width / 20 + offset), p5.random(p5.height),
        p5.random(p5.width - p5.width / 4.5, p5.width + p5.width / 20 + offset), p5.random(p5.height),
        p5.random(p5.width - p5.width / 4.5, p5.width + p5.width / 20 + offset), p5.random(p5.height),
        p5.random(p5.width - p5.width / 45, p5.width + p5.width / 20 + offset), p5.random(p5.height))
    }
    // Fade in the shapes at start
    if (window.videoCurrentTimeGlobal < 106) {
      if (fadeIn < 0.2) {
        fadeIn += 0.02
      }
    }
    // Fade out the shapes at the end
    if (window.videoCurrentTimeGlobal > 107.25) {
      fadeIn -= 0.02
    }
    p5.cutout()
  }
  // Change number of shapes printed to the sccreen based on mouse value
  p5.mouseMoved = function () {
    numShapes = p5.map(p5.mouseX, 0, p5.width, 5, 40)
  }
  p5.mouseDragged = function () {
    numShapes = p5.map(p5.mouseX, 0, p5.width, 5, 40)
  }
  // Hide part of the canvas to prevent the sketch from overlapping on the video
  p5.cutout = function () {
    var c = document.getElementById('defaultCanvas0')
    var ctx = c.getContext('2d')
    ctx.clearRect((p5.width / 2) - cutoutSize, 0, cutoutSize * 2, p5.height)
  }
}

module.exports = lerpColor
