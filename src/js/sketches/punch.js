

var punch= function(s){
s.x=0;


  s.setup = function(){
    s.pixelDensity(1);

    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
    s.disc = s.createGraphics(200,200);
        s.background(244,122,0);    // Punch it! 
    s.disc.noStroke();
    s.disc.fill(20,50,10);
    s.disc.ellipse(50,50,200,200);
 
    // The image of the shape, ready for punching
    s.img = s.disc.get();
 
    // The punch
    s.punch = s.createGraphics(200,100);
    s.punch.noStroke();
    s.punch.fill(255);
    s.punch.rect(25,25,500,500);

    s.img.punchOut(s.punch);
 
    // Tada!
    s.image(s.disc,0,0);
    s.image(s.punch,100,0);
    s.image(s.img, 200, 0);
 
  }




  s.draw = function(){
   // s.image(s.disc+s.x,0,0);
   //  s.image(s.punch,100,0);
    s.ellipse(80+s.x,50+s.x,100,100)
    s.hole();
    // s.image(s.img, 200, 0);
 // s.ellipse(100,100, 600,600)
 s.x++;

}


s.hole =function(){
  // var x;
    console.log("hole is running");
    var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    ctx.clearRect(300,100,300,700);
  // x++
}







// s.p5.Image.prototype.punchOut = function(p5Image) {
 
//     if(s.p5Image === undefined){
//         s.p5Image = this;
//     }
//     s.currBlend = this.drawingContext.globalCompositeOperation;
 
//     s.scaleFactor = 1;
//     if (s.p5Image instanceof s.p5.Graphics) {
//         s.scaleFactor = s.p5Image._pInst._pixelDensity;
//     }
 
//     s.copyArgs = [
//         p5Image,
//         0,
//         0,
//         scaleFactor*p5Image.width,
//         scaleFactor*p5Image.height,
//         0,
//         0,
//         this.width,
//         this.height
//     ];
 
//     this.drawingContext.globalCompositeOperation = "destination-out";
//     this.copy.apply(this, copyArgs);
//     this.drawingContext.globalCompositeOperation = s.currBlend;
// };


  s.resize =  function() {
      s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
    console.log(s.windowWidth)

} 

window.onresize = s.resize;

}

module.exports= punch;



