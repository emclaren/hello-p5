
/*********************
// Visualizer
// Description: Link to the Processing Forum & Community pages
// Credit: https://epi-js-gro.firebaseapp.com
*********************/

var visualizer= function(q){
  let peakDetect
  let cutoutSize;
  let fadeIn = 10;
  let opacity3=10;
  let opacity2=0;
  let r = 1, g = 1, b = 1, o = 1;
  let fillFadeIn=0
  q.setup = () => {
    q.pixelDensity(1);
    q.windowWidth = window.innerWidth;
    q.windowHeight = q.windowWidth * .562;
    q.canvas = q.createCanvas(q.windowWidth, q.windowHeight);
    q.canvas.parent('video-overlay');
    cutoutSize = q.width/7
  }
  
 
  
  q.draw= ()=> {
    q.background(75, 121, 161, 25-opacity2);
    
    q.fill('#4ca1af');
    // q.stroke('rgba(50,50,50, 0.1)');
    q.strokeWeight(1);
    
    let waveform = Array.from({length: q.width*2}, () => Math.random(-1, 1)/2 ); // make a random array of numbers to simulate a waveform
    
    q.noFill();
    
    q.beginShape();
    
    
    q.stroke(255,255,255, fadeIn); // waveform is white

    if(fadeIn<255){
      fadeIn += 1
    }
    q.strokeWeight(50);
    for (let i = 0; i < waveform.length; i+=10){
      let x = q.map(i, 0, waveform.length, 0, q.windowWidth);
      let y = q.map( waveform[i]/8, -1, 1, 0, q.windowHeight);
      q.vertex(x,y);
    }
    q.endShape();
    
    q.strokeWeight(4);
    
    
    q.rms = 1;
    
    q.fill(50,50,100, fillFadeIn);
    if(fillFadeIn<150){
      fillFadeIn++;
    }


    // Get the average (root mean square) amplitude
    // q.rms = q.analyzer.getLevel();
    
    q.strokeWeight(0);
    if(window.videoCurrentTimeGlobal>7.25){
      console.log("did this work")
      fadeIn-=3;
      opacity2+=20;
      opacity3-=50;
      fillFadeIn-=50;
      q.background(242, 242, 242, 25+opacity2);
      q.fill(242, 242, 242, 25+opacity2);
      console.log("opacity2"+opacity2)
    }
    q.sizeChange=q.random(.5,1.2)
    //         // Draw an ellipse with size based on volume
    q.ellipse(q.width / 2, q.height / 2, 200 + q.rms * (q.height / 2)* q.sizeChange, 200 + q.rms * (q.height / 2)*q.sizeChange)
    
    q.cutout();
    // q.song.setVolume(0)
  }
  
  
  
  
  
  
  
  q.cutout  = function() {
    var c = document.getElementById("defaultCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect((q.width / 2) - cutoutSize, 0, cutoutSize * 2, q.height);
    
  };  
  
  
}



// }


module.exports= visualizer;




