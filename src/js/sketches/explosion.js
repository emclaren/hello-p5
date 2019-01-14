/*********************
// Explosion
// Description: Draws random exploding circles on the screen. After a set amount of time, the circles grow in size and the p5 logo appears
// Try it: https://editor.p5js.org/emclaren/sketches/B1j0a3f2X
*********************/

const explosion = (p5) => {
  let circle = []
  let frameNumber = 0 // divisor so we can add circles based on framerate
  let strokeThickness = 1
  let logoHidden = true

  p5.setup = () => {
    p5.pixelDensity(1)
    let windowWidth = document.documentElement.clientWidth
    let windowHeight = windowWidth * 0.562
    p5.canvas = p5.createCanvas(windowWidth, windowHeight)
    p5.canvas.parent('video-overlay')
    p5.noFill()
  }

  p5.draw = () => {
    p5.clear()
    // Add a new circle once every 15 frames for a max of 7 circles
    if (frameNumber % 15 === 0 && circle.length < 7) {
      p5.addCircle()
    }
    frameNumber++
    // display the circles that have been created
    for (let i = 0; i < circle.length; i++) {
      circle[i].display()
    }
    // Make logo appear at the end of the sketch
    if (window.videoCurrentTimeGlobal > 134.75) {
      if (logoHidden) {
        let p5SketchLogo = p5.createDiv('<img src="dist/assets/img/p5js.svg" alt="P5.js Logo" id="logo_image" class="p5-sketch-logo "></img>')
        p5SketchLogo.parent('video-overlay')
        p5SketchLogo.addClass('p5-sketch-logo-parent')
        logoHidden = false
      }
    }
  }

  p5.Circle = function (xcoord, ycoord, diam) {
    this.diameter = diam // diameter begins as 0
    this.xPosition = xcoord // random xcoordinate
    this.yPosition = ycoord // random ycoordinate
    this.display = function () {
      // Make the circle outline shrink as the circle grows
      if (window.videoCurrentTimeGlobal < 134.25) {
        this.m = p5.map(this.diameter, 0, 80, 0, 4)
        p5.strokeWeight(4 - this.m)
      } else { // Make the circle increase in size at the end of the sketch
        p5.strokeWeight(strokeThickness)
      }
      // Make circles near center less opaque than those far away
      this.colorgradient = p5.dist(this.xPosition, this.yPosition, p5.width / 2, p5.height / 2)
      this.opacity = p5.map(this.colorgradient, 0, p5.width / 2, -200, 255)
      // change color of circles at different time points
      if (window.videoCurrentTimeGlobal < 125.0) {
        // Blue
        p5.stroke(0, 255, 255, this.opacity)
      } else if (window.videoCurrentTimeGlobal < 130.0) {
        // Pink
        p5.stroke(239, 34, 90, this.opacity)
      } else if (window.videoCurrentTimeGlobal < 132.75) {
        // yellow
        p5.stroke(255, 255, 0, this.opacity)
      } else {
        // pink
        p5.stroke(239, 34, 90, this.opacity)
      }
      // Draw the circle
      p5.ellipse(this.xPosition, this.yPosition, this.diameter, this.diameter)
      this.diameter += 0.5 // grow the circle each frame

      if (window.videoCurrentTimeGlobal < 132.0) {
        // reset the diam to 0, and move circle to a new coordinate once it gets too big
        if (this.diameter > 79) {
          this.diameter = 0
          this.xPosition = p5.random(p5.width)
          this.yPosition = p5.random(p5.height / 3, p5.height) // Random point for Y axis does not iinclude the top 3rd because there are so many faces in that area
        }
      }
    }
  }

  p5.addCircle = function () {
    // Create new Circle
    circle[circle.length] = new p5.Circle(p5.random(p5.width), p5.random(p5.height / 3, p5.height), 0)
  }

  p5.mouseMoved = function () {
    if (p5.dist(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY) > 10) {
      circle[circle.length] = new p5.Circle(p5.mouseX, p5.mouseY, 10)
    }
  }
  p5.mouseDragged = function () {
    if (p5.dist(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY) > 10) {
      circle[circle.length] = new p5.Circle(p5.mouseX, p5.mouseY, 10)
    }
  }
}

module.exports = explosion
