
/*********************
// Visualizer
// Description: Link to the Processing Forum & Community pages
// Credit: https://epi-js-gro.firebaseapp.com
*********************/

var visualizer= function(p5){
  let cutoutSize;
  let fadeIn = 10;
  let opacity3=10;
  let opacity2=0;
  let r = 1, g = 1, b = 1, o = 1;
  let fillFadeIn=0
  p5.setup = () => {
    p5.pixelDensity(1);
    p5.windowWidth = window.innerWidth;
    p5.windowHeight = p5.windowWidth * .562;
    p5.canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.canvas.parent('video-overlay');
    cutoutSize = p5.width/7
  }
  
  
 
  
  p5.draw= ()=> {
    p5.background(75, 121, 161, 25-opacity2);
    
    p5.fill('#4ca1af');
    // p5.stroke('rgba(50,50,50, 0.1)');
    p5.strokeWeight(1);
    
    let waveform = Array.from({length: p5.width*2}, () => Math.random(-1, 1)/2 ); // make a random array of numbers to simulate a waveform
    
    p5.noFill();
    
    p5.beginShape();
    
    
    p5.stroke(255,255,255, fadeIn); // waveform is white

    if(fadeIn<255){
      fadeIn += 1
    }
    p5.strokeWeight(50);
    for (let i = 0; i < waveform.length; i+=10){
      let x = p5.map(i, 0, waveform.length, 0, p5.windowWidth);
      let y = p5.map( waveform[i]/8, -1, 1, 0, p5.windowHeight);
      p5.vertex(x,y);
    }
    p5.endShape();
    
    p5.strokeWeight(4);
    
    
    p5.rms = 1;
    
    p5.fill(50,50,100, fillFadeIn);
    if(fillFadeIn<150){
      fillFadeIn++;
    }


    // Get the average (root mean square) amplitude
    // p5.rms = p5.analyzer.getLevel();
    
    p5.strokeWeight(0);
    if(window.videoCurrentTimeGlobal>7.25){

      fadeIn-=3;
      opacity2+=20;
      opacity3-=50;
      fillFadeIn-=50;
      p5.background(242, 242, 242, 25+opacity2);
      p5.fill(242, 242, 242, 25+opacity2);

    }
    p5.sizeChange=p5.random(.5,1.2)
    //         // Draw an ellipse with size based on volume
    p5.ellipse(p5.width / 2, p5.height / 2, 200 + p5.rms * (p5.height / 2)* p5.sizeChange, 200 + p5.rms * (p5.height / 2)*p5.sizeChange)
    
    p5.cutout();
    // p5.song.setVolume(0)
  }
  
  
  
  
  
  
  
  p5.cutout  = function() {
    var c = document.getElementById("defaultCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect((p5.width / 2) - cutoutSize, 0, cutoutSize * 2, p5.height);
    
  };  
  
  
}



// }


module.exports= visualizer;




