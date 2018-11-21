/*********************
// Credits Sketch
// Description: Creates movie-credits style text. Text pans up the screen while random interactive circles explode in the background
*********************/

const credits = (p5) => {
  let circle = []
  let frameNumber = 0 // divisor so we can add circles based on framerate
  let creditsHidden = true

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

    // only let the credits div get created once, styling is done using CSS
    if (creditsHidden) {
      let p5SketchCredits = p5.createDiv('<div class=\'credits-wrapper\' id="credits-wrapper"><div class=\'credits-title\'> This project was made possible as part of </div> <div class=\'credits-name\'>Google Summer of Code</div> <div class=\'credits-title\'>Google Summer of Code Mentor</div>  <div class=\'credits-name\'>Evelyn Masso</div> <div class=\'credits-title\'>Google Summer of Code Mentor</div>   <div class=\'credits-name\'>Lauren McCarthy</div> <div class=\'credits-title\'>Google Summer of Code Developer</div>  <div class=\'credits-name\'>Elgin-Skye McLaren</div> <br> <div class=\'credits-title\'> An enormous thank you to all the individuals who generously donated their time, video, and code</div><div class=\'credits-name\'>Uddipana Baishya</div> <div class=\'credits-name\'>Punyashlok Dash</div> <div class=\'credits-name\'>Miguel Elizalde</div>   <div class=\'credits-name\'>Tristan Espinoza</div>   <div class=\'credits-name\'>Max Frischknecht & Philipp Möckli (Début Début)</div>   <div class=\'credits-name\'>Dongqi Han</div>  <div class=\'credits-name\'>Kate Hollenbach</div>   <div class=\'credits-name\'>Vincent Hopkins</div> <div class=\'credits-name\'>Cat Janowitz</div>   <div class=\'credits-name\'>Brennan Jones</div> <div class=\'credits-name\'>Sam Kissee</div><div class=\'credits-name\'>Zach Krall</div>  <div class=\'credits-name\'>Ginger Kretschmer</div> <div class=\'credits-name\'>Gavin Mogan</div> <div class=\'credits-name\'>Seyitan Oke</div> <div class=\'credits-name\'>Suraj Rai</div><div class=\'credits-name\'>@reona396</div>  <div class=\'credits-name\'>Eliza Struthers-jobin</div> <div class=\'credits-name\'>Dan Weiner</div>   <div class=\'credits-name\'>Sailor Winkelman</div>    <div class=\'credits-name\'>Computational Thinkers® of Hawaii</div>   <div class=\'credits-name\'>STEM Coding</div><div class=\'credits-name\'> + more members of the p5 community</div><div class=\'credits-title\'> Music </div> <div class=\'credits-name\'>Ah, Venice</div>  <div class=\'credits-title\'> Video Consulting </div> <div class=\'credits-name\'>Joey Chaos</div> <div class=\'credits-title\'>Translation </div> <div class=\'credits-name\'>Mayra Barrera Machuca</div> <div class=\'credits-title\'> Translation </div> <div class=\'credits-name\'>Peter Manson</div> </div> ')
      p5SketchCredits.parent('sketch-wrapper')
      p5SketchCredits.addClass('p5-sketch-logo-parent')
      creditsHidden = false
    }

    // Make the circles start disappearing near the end of the sketch
    if (window.videoCurrentTimeGlobal > 166.0) {
      circle.splice(circle.length - 1, circle.length)
    }
  }

  p5.Circle = function (xcoord, ycoord, diam) {
    this.diameter = diam // diameter begins as 0
    this.xPosition = xcoord // random xcoordinate
    this.yPosition = ycoord // random ycoordinate
    this.display = function () {
      // Make the circle outline shrink as the circle grows

      this.m = p5.map(this.diameter, 0, 80, 0, 4)
      p5.strokeWeight(4 - this.m)

      // Make circles near center less opaque than those far away
      this.colorgradient = p5.dist(this.xPosition, this.yPosition, p5.width / 2, p5.height / 2)
      this.opacity = p5.map(this.colorgradient, 0, p5.width / 2, -200, 255)

      p5.stroke(239, 34, 90, this.opacity) // pink

      // Draw the circle
      p5.ellipse(this.xPosition, this.yPosition, this.diameter, this.diameter)
      this.diameter += 0.5 // grow the circle each frame

      // reset the diam to 0, and move circle to a new coordinate once it gets too big
      if (this.diameter > 79) {
        this.diameter = 0
        this.xPosition = p5.random(p5.width)
        this.yPosition = p5.random(p5.height) // Random point for Y axis does not iinclude the top 3rd because there are so many faces in that area
      }
    }
  }

  p5.addCircle = function () {
    // Create new Circle
    circle[circle.length] = new p5.Circle(p5.random(p5.width), p5.random(p5.height), 0)
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

module.exports = credits
