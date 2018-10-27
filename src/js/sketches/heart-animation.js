/*********************
// Heart Animation Sketch
// Description: Draws randomly coloured, interactive hearts on screen 
// Credit: @reona396, source: https://www.openprocessing.org/sketch/561609
*********************/

const heart = (p5) => {
  let R = 8; 
  let maxVal = 0;
  let rt = 0;
  let alp = 0;
  let stAlp = 255;
  let fillCount = 0;
  let phase = 0;
  let oy = 0;
  let color = p5.random(360);
  let heartSize;
  let xpos;
  let ypos;
  let sizeChange; 
  let x = 0;
  let y = 0;
  let move;
  
  p5.setup  = () => {
    p5.pixelDensity(1);
    let windowWidth = document.documentElement.clientWidth ;
    let windowHeight = windowWidth  * 0.562;
    p5.canvas = p5.createCanvas(windowWidth, windowHeight);
    p5.canvas.parent('video-overlay');
    p5.colorMode(p5.HSB, 360, 100, 100, 255); //use Hue-Saturation-Brightness Color Model
    p5.strokeJoin(p5.ROUND); //round the corners of the line intersections
    p5.strokeWeight(5);
    xpos=p5.width / 5;
    ypos=p5.height / 3 + oy;
  };
  
  p5.draw = () => {
    p5.clear();
    heartSize=p5.width / 1280;
    sizeChange = p5.map(p5.mouseX, 0, p5.width, 0.5, 1);  
    p5.fill(color, 80, 100, alp);
    p5.stroke(color, 80, 100, stAlp);
    p5.push();
    p5.translate(xpos-move, ypos+move);
    p5.beginShape();
    for (let theta = 0; theta < maxVal; theta++) {
      x = R * (16 * p5.sin(p5.radians(theta)) * p5.sin(p5.radians(theta)) * p5.sin(p5.radians(theta)));
      y = (-1) * R * (13 * p5.cos(p5.radians(theta)) - 5 * p5.cos(p5.radians(2 * theta)) -
      2 * p5.cos(p5.radians(3 * theta)) - p5.cos(p5.radians(4 * theta)));
      p5.vertex(x, y);
    }
    
    // make the hearts move depending on location of mouse
    let distancemouse= p5.dist(p5.mouseX, p5.mouseY, p5.width/2, p5.height/2);
    move = p5.map(distancemouse, 0, p5.width, -p5.width/60, p5.width/60);
    p5.scale(heartSize * sizeChange); 
    p5.endShape();
    p5.pop();
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
      R = 8 + p5.abs(p5.sin(p5.radians(rt)));
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
      if (oy < -p5.height) {
        maxVal = 0;
        rt = 0;
        alp = 0;
        stAlp = 255;
        phase = 0;
        oy = 0;
        fillCount = 0;
        p5.reset();
      }
    }
  };
  
  // Move the heart from upper left corner to lower right corner
  p5.reset= () => {
    color = p5.random(360);
    xpos = p5.width - p5.width/8;
    ypos = p5.height - p5.height / 3 + oy;
  };
};

module.exports= heart;






