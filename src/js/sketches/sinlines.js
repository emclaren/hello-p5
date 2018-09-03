
var sinLines= function(s){

s.counter = 0;
s.bgColor = 0;
s.i = 0;
s.moveLines=s.windowHeight/8;
s.speed=5;
s.thickness=1;
s.spacing =s.windowWidth/79;
  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth *  .562
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');

  }


  s.draw = function(){

  s.clear();
  s.fill(255);
  s.changeSize= s.map(s.mouseX, 0,s.windowWidth, 1, s.windowWidth/50)
  s.stroke(255);
  s.translate(0, s.moveLines )

  for (s.t=0 ; s.t<s.windowWidth ; s.t+=s.spacing){
    s.colorMode(s.HSL,100);
    s.strokeWeight(s.changeSize);
    s.stroke( s.map(s.t, 0, s.windowWidth, 50, 100) ,100,50);
    s.line(s.t, s.windowHeight*2, s.t, s.windowHeight/1.5-s.sin( s.i+s.t / 50) * 100);
  }

if(window.videoCurrentTimeGlobal>80){
  s.moveLines=s.moveLines -s.speed;
  s.thickness=s.thickness+.1;

}

  s.i+=0.01;
  s.cutout();
}


s.cutout =function(){
    var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    ctx.clearRect((s.width/2)- ((s.windowWidth/1.65)/2),0,  s.windowWidth/1.65 ,s.windowHeight*2.1);
}


}

module.exports= sinLines;











