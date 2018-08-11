
var logo= function(s){
  s.mapped;


  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504;
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
  }

  s.draw = function(){
  

    s.mapped = s.map(10,0,s.windowWidth,-7,7);

    if(s.mouseIsPressed){
      s.mapped+=5;
    }

    s.background(0);

    s.push();
    s.blendMode(s.MULTIPLY);

    s.textAlign(s.CENTER, s.CENTER);
    s.textSize(s.height/5);
    s.textStyle(s.BOLD);

  // cyan
  s.fill(s.color('rgba(0, 0, 255, 1)'));
  s.text('hello', s.width/2+s.mapped, s.height/2);

  // magenta
  s.fill(255,0,255);
  s.text('hello', s.width/2, s.height/2);

  //yellow
  s.fill(255, 255, 0);
  s.text('hello', s.width/2-s.mapped, s.height/2 );


   // cyan
  s.fill(0,255,255);
  s.text('p5*js', s.width/2+s.mapped, s.height/2);

  // magenta
  s.fill(255,0,255);
  s.text('p5.js', s.width/2, s.height/2);

  //yellow
  s.fill(255, 255, 0);
  s.text('p5.js', s.width/2-s.mapped, s.height/2 );

  s.pop();
}






s.resize =  function() {
  s.windowWidth = window.innerWidth ;
  s.windowHeight = s.windowWidth * .5504
  s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
  console.log(s.windowWidth)

} 

window.onresize = s.resize;

}

module.exports= logo;












// var logo= function(s){
  
// s.img;
// s.smallPoint; s.largePoint;

// s.preload=function() {
//   s.img = s.loadImage("../dist/assets/img/p5.png");

// }

//   s.setup = function(){
//     s.background(255);
//     s.pixelDensity(1);
//     s.windowWidth = window.innerWidth;
//     s.windowHeight = s.windowWidth * .5504
//     s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
//     s.canvas.parent('video-overlay');
//         s.smallPoint = 5;
//   s.largePoint = 40;
//   // s.imageMode(s.CENTER);
//   s.noStroke();
  
//   s.fill(0,255, 0)
//   s.img.loadPixels();
 
//   }





// s.draw=function() {
//   s.translate(80,100);
//   // s.ellipse(50,50,50,50)
//   for (s.i =0; s.i<200; s.i++){
//   s.pointillize = s.map(s.mouseX, 0, s.width, s.smallPoint, s.largePoint);
//   s.x = s.floor(s.random(s.img.width));
//   s.y = s.floor(s.random(s.img.height));
//   s.pix = s.img.get(s.x, s.y);
//   s.fill(s.pix, 128);
//   s.ellipse(s.x, s.y, s.pointillize, s.pointillize);
// }

// }




//   s.resize =  function() {
//       s.windowWidth = window.innerWidth ;
//     s.windowHeight = s.windowWidth * .5504
//     s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
//     console.log(s.windowWidth)

// } 

// window.onresize = s.resize;

// }

// module.exports= logo;

























