/*********************
// Rectangles
// Description: Fading Rectangles into the center of the screen
// Credit: Based on sketch by awaiting confirmation
// Link: Insert Link
*********************/

const rectangles = (s) => {
  let distance=1
  let fade=0;
  let fadeSpeed=1;
  let opacity=255
  let rectangle = [];
  let rectangleCount = 0;

  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    s.frameRate(30);
  }


  s.draw  = () => {
    s.clear();
    for(let i = 0; i<rectangle.length; i++){
      rectangle[i].display();
    }
    if(rectangleCount<150){
      s.addRectangle();

    }

    s.noFill();
    s.strokeWeight(3);
    if(window.videoCurrentTimeGlobal<123.5){

      fade=fade+fadeSpeed;
    }

    if(window.videoCurrentTimeGlobal>123.5){
     fade=fade-fadeSpeed;
   }


   distance +=s.random(10,25);
}



s.Rectangle = function(xcoord, ycoord, wide, tall, colorOpacity){
  this.x = xcoord;
  this.y = ycoord;
  this.strokecolor = colorOpacity;
  this.display = function() {
    this.strokecolor-= 10;
    s.stroke(237,30,90, this.strokecolor)
    s.rect(this.x, this.y, wide, tall);
  };
}
s.addRectangle= function(){
  rectangle[rectangleCount] = new s.Rectangle(distance, distance, s.width-(distance*2) , s.height-(distance*2), opacity);
  rectangleCount++;
}


}

module.exports= rectangles;

