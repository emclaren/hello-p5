//  zach, still not converted


// initial variables
var i = 10;
var colorZ = 245;

function setup() {

  createCanvas(windowWidth,windowHeight);
  background(10);
  frameRate(30);

  console.log("what time is it?");
  console.log("showtime");

}

// this section loops!
function draw() {

  // style attributes
  noFill();
  strokeWeight(3);
  stroke(colorZ);

  // here she is
  ellipse(windowWidth/2,windowHeight/2,i,i);

  // space between circles
  i+=20;

  // if landscape, then wait until circles reach sides
  if(windowWidth>windowHeight){

    if( i >= windowWidth ){
      resetEffect();
    }

  // if portrait, then wait until circles reach top
  } else {

    if( i > windowHeight ){
      resetEffect();
    }

  }

  function resetEffect(){

    console.log('here we go again');

    // back to the beginning
    i = 10;

                var r1 = round(random(0,255));
                var g1 = round(random(0,255));
                var b1 = round(random(0,255));

                colorB = color(r1,g1,b1);
    console.log("background color: rgb(" + r1 + ", " + g1 + ", " + b1 + ")");

    // clears out canvas with solid color
    background(colorB);

    var r = round(random(0,255));
    var g = round(random(0,255));
    var b = round(random(0,255));

    colorZ = color(r,g,b);
    console.log("line color: rgb(" + r + ", " + g + ", " + b + ")");

  }
}

// if people are weird and resize their screen, then update canvas size

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}