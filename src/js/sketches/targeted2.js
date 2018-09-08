

var target2= function(s){
s.test=1
s.i = 0;
s.colorZ = 245;
s.fade=0;
s.fadeSpeed=1;
s.test2=255
  s.dot = [];
  s.dotCount = 0;

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
  for(var i = 0; i<s.dot.length; i++){
      s.dot[i].display();
    }
       if(s.dotCount<100){
      s.addDot();

    }
  // style attributes
  s.noFill();
  s.strokeWeight(3);
  // s.stroke(s.random(255),s.random(255),s.random(255), s.random(255));
  // s.stroke(237,30,90, s.test2);

  // s.rect(s.windowWidth/2,s.windowHeight/2,s.i+40,s.i+40);
  // s.rect(s.windowWidth/2,s.windowHeight/2,s.i+20,s.i+20);
  // here she is


    // s.rect(0+s.test,0+s.test, s.width-(s.test*2),s.height-(s.test*2));



    if(window.videoCurrentTimeGlobal<123.5){

  s.fade=s.fade+s.fadeSpeed;
}

  if(window.videoCurrentTimeGlobal>123.5){
     s.fade=s.fade-s.fadeSpeed;
  }
  // space between circles
  s.i+=20;

  s.cutout();
s.test+=s.random(5,20);
s.test2-=5;

}

s.cutout =function(){
    var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    ctx.clearRect((s.width/2-s.changeSize)- ((s.windowWidth/1.65)/2),0,  (s.windowWidth/1.65)+s.changeSize*2 ,s.windowHeight);
}




s.Dot = function(xcoord, ycoord, wide, tall){
  this.x = xcoord;
  this.y = ycoord;
  this.strokecolor=s.test2;

  s.stroke(237,30,90, this.strokecolor)
 this.strokecolor-= 2;
 console.log( this.strokecolor)

  this.display = function() {
    s.rect(this.x, this.y, wide, tall);
  };

}
s.addDot= function(){
  s.dot[s.dotCount] = new s.Dot(0+s.test, 0+s.test, s.width-(s.test*2) , s.height-(s.test*2));
        // t.dot[t.dotCount] = new t.Dot(t.random(t.windowWidth/1.45, t.windowWidth));
        s.dotCount++;
      }

      // s.speedUp= function(){
      //   s.animate=true;
      // }









}

module.exports= target2;

