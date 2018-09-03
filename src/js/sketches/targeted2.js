//  zach, still not converted





var target2= function(s){

s.i = 0;
s.colorZ = 245;
s.fade=0;
s.fadeSpeed=1;

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .562
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
       s.frameRate(30);
 
  }





  s.draw = function(){
s.clear();
  // style attributes
  s.noFill();
  s.strokeWeight(3);
  s.stroke(237,34,93, s.fade);

  // s.rect(s.windowWidth/2,s.windowHeight/2,s.i+40,s.i+40);
  // s.rect(s.windowWidth/2,s.windowHeight/2,s.i+20,s.i+20);
  // here she is
    s.rect(25,50,s.windowWidth-50,s.windowHeight-75);
    if(window.videoCurrentTimeGlobal<123.5){

  s.fade=s.fade+s.fadeSpeed;
}

  if(window.videoCurrentTimeGlobal>123.5){
     s.fade=s.fade-s.fadeSpeed;
  }
  // space between circles
  s.i+=20;

  // if landscape, then wait until circles reach sides
  if(s.windowWidth>s.windowHeight){

    if( s.i >= s.windowWidth +100){
      // resetEffect();
    }

  // if portrait, then wait until circles reach top
  } else {

    if( s.i > s.windowHeight +100 ){
      // s.resetEffect();
    }

  }
  s.cutout();

}

s.cutout =function(){
    var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    ctx.clearRect((s.width/2-s.changeSize)- ((s.windowWidth/1.65)/2),0,  (s.windowWidth/1.65)+s.changeSize*2 ,s.windowHeight);
}



}

module.exports= target2;

