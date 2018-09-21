/*********************
// Heart Animation
// Description: Draws randomly coloured hearts on screen 
// Credit: waiting for release
*********************/

const heart = (s) => {
  let R = 8; 
  let maxVal = 0;
  let rt = 0;
  let alp = 0;
  let stAlp = 255;
  let fillCount = 0;
  let phase = 0;
  let oy = 0;
  let c = s.random(360);
  let heartSize;
  let xpos;
  let ypos;
  let sizeChange; 
  let x = 0;
  let y = 0;
  let move;

  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    s.colorMode(s.HSB, 360, 100, 100, 255); //use Hue-Saturation-Brightness Color Model
    s.strokeJoin(s.ROUND); //round the corners of the line intersections
    s.strokeWeight(5);

  };

  s.draw = () => {
    s.clear();
    heartSize=s.width / 1280;
    xpos=s.width / 5;
    ypos=s.height / 3 + oy;
    sizeChange = s.map(s.mouseX, 0, s.width, 0.5, 1);  
    s.fill(c, 80, 100, alp);
    s.stroke(c, 80, 100, stAlp);
    s.push();
    s.translate(xpos-move, ypos+move);
    s.beginShape();
    for (let theta = 0; theta < maxVal; theta++) {
      x = R * (16 * s.sin(s.radians(theta)) * s.sin(s.radians(theta)) * s.sin(s.radians(theta)));
      y = (-1) * R * (13 * s.cos(s.radians(theta)) - 5 * s.cos(s.radians(2 * theta)) -
        2 * s.cos(s.radians(3 * theta)) - s.cos(s.radians(4 * theta)));
      s.vertex(x, y);
    }

    // make the hearts move depending on location of mouse
    let distancemouse= s.dist(s.mouseX, s.mouseY, s.width/2, s.height/2);
    move = s.map( distancemouse, 0, s.width, -s.width/60, s.width/60);


    s.scale(heartSize * sizeChange); 
    s.endShape();
    s.pop();


    // phase 0: draw heart by increasing maxVal
    if (phase == 0) {
      maxVal += 5;
      if (maxVal > 360) {
        maxVal = 360;
        phase = 1;
      }
    }

    // phase 1: heart wiggle
    if (phase == 1) {
      R = 8 + s.abs(s.sin(s.radians(rt)));
      rt += 20;
      if (rt > 360) {
        rt = 360;
        phase = 2;
      }
    }

     // phase 2 : heart fill fades in
    if (phase == 2) {
      alp += 5;
      fillCount += 5;
      if (alp > 255) {
        alp = 255;
      }
      if (fillCount > 400) {
        phase = 3;
      }
    }

  // / phase  3: heart fly up & fade out
    if (phase == 3) {
      oy -= 10; //move upwards
      alp -= 15; //opacity
      stAlp -= 15; //stroke opacity
      if (oy < -s.height) {
        maxVal = 0;
        rt = 0;
        alp = 0;
        stAlp = 255;
        phase = 0;
        oy = 0;
        fillCount = 0;
        s.reset();
      }
    }
 };


// Move the heart from upper left corner to lower right corner
  s.reset= () => {
    c = s.random(360);
    xpos = s.width - s.width/8;
    ypos = s.height - s.height / 3 + oy;
  };

  };

  module.exports= heart;






