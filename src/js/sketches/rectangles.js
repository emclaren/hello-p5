/*********************
// Rectangles
// Description: Interactive rectangles coming out of the center of the screen
// Try it: https://editor.p5js.org/hello-p5/sketches/H1j8_c5f4
*********************/

const rectangles = (p5) => {
  let distance = 0 // initial distance between rectangles
  let initialOpacity = 150 // starting opacity for rectangles
  let rectangle = [] // array to store the rectangles
  let strokeThickness = 150 // make stroke thickness interactive

  p5.setup = () => {
    p5.pixelDensity(1)
    let windowWidth = document.documentElement.clientWidth
    let windowHeight = windowWidth * 0.562
    p5.canvas = p5.createCanvas(windowWidth, windowHeight)
    p5.canvas.parent('video-overlay')
    p5.frameRate(30) // slow down the sketch
    p5.noFill()
  }

  p5.draw = () => {
    p5.clear()
    // display existing rectangles
    for (let i = 0; i < rectangle.length; i++) {
      rectangle[i].display()
    }
    // create new rectangles
    if (rectangle.length < 50) {
      p5.addRectangle()
    }

    // random distance between rectangles
    distance += p5.random(2, 50)
  }

  p5.Rectangle = function (xcoord, ycoord, wide, tall, opacity) {
    this.x = xcoord
    this.y = ycoord
    this.strokecolor = opacity // initial opacity
    this.display = function () {
      // make the width of the stroke interactive
      strokeThickness = p5.map(p5.mouseX, 0, p5.width, 40, 300)
      p5.strokeWeight(strokeThickness)
      // reduce the opacity over time
      this.strokecolor -= 10
      p5.stroke(237, 30, 90, this.strokecolor)
      // draw the rectangles
      p5.rect(this.x, this.y, wide, tall)
    }
  }

  // create new rectangles, starting from the center of the page and then growing
  p5.addRectangle = function () {
    rectangle[rectangle.length] = new p5.Rectangle(p5.width / 2 - distance, p5.height / 2 - distance, 0 + distance * 2, 0 + distance * 2, initialOpacity)
  }
}

module.exports = rectangles
