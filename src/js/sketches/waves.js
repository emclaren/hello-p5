/*********************
// Waves
// Description: Draws interactive waves on the screen
// Credit: @reona396 https:// www.openprocessing.org/sketch/521545
// Try it: https:// editor.p5js.org/emclaren/sketches/rJsL63fhX
*********************/

const waves = (p5) => {
  let waves = [] // array to store the waves
  let waveNumber = 0
  let cutoutSize // size of the hole in the canvas

  p5.setup = () => {
    p5.pixelDensity(1)
    let windowWidth = document.documentElement.clientWidth
    let windowHeight = windowWidth * 0.562
    p5.canvas = p5.createCanvas(windowWidth, windowHeight)
    p5.canvas.parent('video-overlay')
    p5.colorMode(p5.HSB, 360, 100, 100, 100)
    p5.noStroke()
    // create a new bunch of waves
    for (let i = 0; i < 35; i++) {
      waves.push(new p5.Wave())
    }
    // size of the canvas to remove to show the video underneath
    cutoutSize = p5.width / 3.3
  }

  p5.draw = () => {
    p5.clear()
    let mouseDistance = p5.dist(p5.mouseX, p5.mouseY, p5.width / 2, p5.height / 2) // measure distance of the mouse from the center of the page
    // fewer waves on mobile to help performance
    if (p5.width > 900) {
      waveNumber = p5.map(mouseDistance, 0, p5.width / 2, 0, 30)// use the distance to determine the number of waves on the screen
    } else {
      waveNumber = p5.map(mouseDistance, 0, p5.width / 2, 0, 10)// use the distance to determine the number of waves on the screen
    }
    // display the correct number of waves on the screen
    for (let i = 0; i < waveNumber; i++) {
      waves[i].display()
    }
    // increase the size of the cutout at the end of the scene
    if (window.videoCurrentTimeGlobal > 119.75) {
      cutoutSize = cutoutSize + 8
    }
    // run function to cut out part of the canvas
    p5.cutout()
  }

  p5.Wave = function () {
    this.yoffA = p5.random(10)
    this.yoffB = this.yoffA
    this.yRandom = p5.random(-p5.width / 120, p5.width / 120) // randomly change the height of the wave
    this.color = p5.random(360)
    this.display = function () {
      this.xoffA = 0
      this.xoffB = 0
      p5.fill(this.color, 80, 100, 50) // randomize color
      // Draw the shape
      p5.beginShape()
      // Waveshape for the top
      for (let xA = 0; xA <= p5.width; xA += 10) {
        let yA = p5.map(p5.noise(this.xoffA, this.yoffA), 0, 1, 0, p5.height) + this.yRandom
        p5.vertex(xA, yA)
        this.xoffA += 0.05
      }
      // Waveshape for the bottom
      for (let xB = p5.width; xB >= 0; xB -= 10) {
        let yB = p5.map(p5.noise(this.xoffB, this.yoffB), 0, 1, 0, p5.height) + this.yRandom
        p5.vertex(xB, yB)
        this.xoffB += 0.05
      }
      // make the shape move each frame
      this.yoffA += 0.01
      this.yoffB += 0.01
      p5.endShape(p5.CLOSE)
    }
  }
  // Hide part of the canvas to prevent the sketch from overlapping on the video
  p5.cutout = function () {
    var c = document.getElementById('defaultCanvas0')
    var ctx = c.getContext('2d')
    ctx.clearRect((p5.width / 2) - cutoutSize, 0, cutoutSize * 2, p5.height)
  }
}

module.exports = waves
