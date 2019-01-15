/*********************
// Target Sketch
// Description: Randomly colored ellipses increasing in size
// Credit:  Zach Krall
// Try it: https://editor.p5js.org/hello-p5/sketches/HJ2ZdcqzV
*********************/

const targetSketch = (p5) => {
  let speed = 0

  p5.setup = () => {
    p5.pixelDensity(1)
    let windowWidth = document.documentElement.clientWidth
    let windowHeight = windowWidth * 0.562
    p5.canvas = p5.createCanvas(windowWidth, windowHeight)
    p5.canvas.parent('video-overlay')
    p5.frameRate(30)
  }

  p5.draw = () => {
    p5.clear()
    // style attributes
    p5.noFill()
    p5.strokeWeight(3)
    p5.stroke(p5.random(255), p5.random(255), p5.random(255))
    // Draw 3 circles 20 pixels apart
    for (let i = 0; i < 60; i += 20) {
      p5.ellipse(p5.width / 2, p5.height / 2, speed + i, speed + i)
    }
    // Increase the size of the circle over time
    speed += 30
  }
}

module.exports = targetSketch
