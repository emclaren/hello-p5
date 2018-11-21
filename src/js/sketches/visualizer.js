/*********************
// Visualizer
// Description: Pulsing visualization of audio track data, modified to bypass audio input so it could be in the background without there being additional noise
// Credit: Sailor Winkelman, Cat Janowitz, Ginger Kretschmer, and Sam Kissee source: https://epi-js-gro.firebaseapp.com
// Try it: https://editor.p5js.org/emclaren/sketches/HyKEF2f2Q
*********************/

const visualizer = function (p5) {
  let cutoutSize
  let strokeFadeIn = 10
  let fadeOut = 0
  let fillFadeIn = 0

  p5.setup = () => {
    p5.pixelDensity(1)
    let windowWidth = window.innerWidth
    let windowHeight = windowWidth * 0.562
    p5.canvas = p5.createCanvas(windowWidth, windowHeight)
    p5.canvas.parent('video-overlay')
    cutoutSize = p5.width / 6
  }

  p5.draw = () => {
    p5.background(75, 121, 161, 25)

    // Fade in the stroke and background
    if (strokeFadeIn < 255) {
      strokeFadeIn++
    }
    if (fillFadeIn < 150) {
      fillFadeIn++
    }

    // Create waveform shape - original code had this based on a music track. We've had to simulate it here because the actual audio track for the video is too quiet and adding another track would play over the existing track
    p5.noFill()
    p5.stroke(255, 255, 255, strokeFadeIn) // waveform is white
    p5.strokeWeight(50)
    let waveform = Array.from({ length: p5.width * 2 }, () => Math.random(-1, 1) / 2) // make a random array of numbers to simulate a waveform
    p5.beginShape()
    for (let i = 0; i < waveform.length; i += 10) {
      let x = p5.map(i, 0, waveform.length, 0, p5.width)
      let y = p5.map(waveform[i] / 8, -1, 1, 0, p5.height)
      p5.vertex(x, y)
    }
    p5.endShape()

    // Draw an ellipse - original code had this based on volume. We've had to sub in random numbers for this example
    p5.strokeWeight(4)
    p5.rms = 1
    p5.fill(50, 50, 100, fillFadeIn)
    p5.strokeWeight(0)
    p5.sizeChange = p5.random(0.5, 1.2) // randomly change the size
    p5.ellipse(p5.width / 2, p5.height / 2, 200 + (p5.height / 2) * p5.sizeChange, 200 + p5.rms * (p5.height / 2) * p5.sizeChange)

    // run function to cut out part of the canvas
    p5.cutout()

    // Fade reduce the size of the cutout and put a rectangular overlay at the end of the sketch
    if (window.videoCurrentTimeGlobal > 7.00) {
      fadeOut += 7
      p5.fill(242, 242, 242, 0 + fadeOut)
      p5.rect(0, 0, p5.width, p5.height)
      cutoutSize -= p5.width / 40
    }
  }

  // Hide part of the canvas to prevent the sketch from overlapping on the video
  p5.cutout = function () {
    var c = document.getElementById('defaultCanvas0')
    var ctx = c.getContext('2d')
    ctx.clearRect((p5.width / 2) - cutoutSize, 0, cutoutSize * 2, p5.height)
  }
}

module.exports = visualizer
