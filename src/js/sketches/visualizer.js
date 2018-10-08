
/*********************
// Visualizer
// Description: Link to the Processing Forum & Community pages
// Credit: 
*********************/


const p5 = require('p5'); // P5 Source Code
let cutoutSize;

var visualizer= function(q){
  console.log("sketch started")
  // p.thing="../dist/assets/img/sketch_imgs/planet.png"
  let peakDetect
  // let analyzer, fft, peakDetect, peaks, filter, filterFreq, filterRes;
  // const s = (q) => {
  // let song;
  // let canvas;
  // let pauseButton;
  
  // input = this.audio;
  // let width = window.innerWidth;
  // let height = 1000;
  // }
  
  
  q.preload = () => {
    console.log('preload');
    // q.song = q.loadSound("../dist/assets/img/song2.mp3");
    // console.log(q.loadSound())
    // q.song = 0;
    // q.fft = new p5.FFT();
    // q.peakDetect = new p5.PeakDetect();
    console.log(q.song)
    // q.pauseButton = q.createButton("pause");
    console.log("sketch sarted2")
    // q.pauseButton.mousePressed(p.togglePlaying);
  }
  
  
  q.setup = () => {
    q.pixelDensity(1);
    q.background(255,0,0);
    console.log("setup is running")
    
    q.windowWidth = window.innerWidth;
    q.windowHeight = q.windowWidth * .562;
    q.canvas = q.createCanvas(q.windowWidth, q.windowHeight);
    // p.parent('visualizer');
    q.canvas.parent('video-overlay');
    // q.canvas.id('visualizer');
    // q.song.setVolume(.5);
    // q.song.play();
    // q.filter = new p5.LowPass();
    
    
    // Disconnect soundfile from master output.
    // Then, connect it to the filter, so that we only hear the filtered sound
    // q.song.disconnect();
    // q.song.connect(q.filter);
    // q.analyzer = new p5.Amplitude();
    // q.analyzer.setInput(q.song);
    // 
    // q.masterVolume(0)
    // q.analyzer.setVolume(0);
    
    
    cutoutSize = q.width/5
  }
  
  let r = 1, g = 1, b = 1, o = 1;
  
  q.draw= ()=> {
    // q.song.setVolume(.2)
    q.background('rgba(75, 121, 161, 0.1)');
    console.log("draw is running");
    
    
    // let waveform = Array.from({length: 500}, () => Math.floor(Math.random() * 100));
    q.fill('#4ca1af');
    q.stroke('rgba(50,50,50,1)');
    q.strokeWeight(1);
    
    let waveform = Array.from({length: 1024}, () => Math.random(-1, 1)/2 );
    // let waveform = q.fft.waveform();
    // let waveform= 0;
    // let waveform =[4, 50, 86, 97, 98, 101, 94, 76, 78, 83, 94, 92, 82, 98, 30, 157, 161, 143, 110, 95, 80, 77, 37, 81, 88, 79, 78, 77, 61, 71, 80, 97, 105, 89, 57, 57, 58, 52, 47, 54, 57, 57, 57, 68, 71, 63, 73, 96, 108, 96, 70, 80, 72, 67, 71, 65, 65, 70, 64, 61, 68, 73, 63, 79, 86, 77, 64, 62, 59, 55, 56, 58, 66, 59, 56, 52, 52, 48, 33, 48, 44, 43, 40, 43, 38, 39, 43, 41, 36, 34, 37, 41, 41, 32, 27, 33, 33, 39, 39, 42, 50, 43, 42, 48, 40, 44, 34, 51, 64, 57, 55, 53, 43, 43, 47, 47, 50, 41, 50, 59, 54, 58, 51, 43, 46, 41, 32, 30, 34, 35, 25, 18, 26, 21, 31, 34, 36, 42, 43, 35, 28, 22, 21, 32, 31, 25, 32, 32, 31, 35, 36, 46, 46, 33, 24, 14, 21, 26, 31, 30, 31, 34, 32, 23, 24, 31, 32, 38, 39, 30, 18, 32, 32, 34, 31, 27, 23, 26, 28, 26, 29, 38, 39, 34, 34, 36, 29, 27, 23, 24, 29, 40, 45, 39, 30, 28, 22, 21, 22, 34, 37, 33, 35, 31, 20, 14, 23, 35, 35, 31, 32, 31, 25, 32, 32, 35, 29, 19, 26, 27, 22, 25, 25, 27, 27, 25, 31, 33, 21, 23, 26, 27, 26, 24, 17, 16, 13, 20, 17, 19, 17, 5, 6, 11, 16, 17, 13, 8, 10, 15, 12, 5, 0, 4, 13, 18, 13, 10, 13, 12, 10, 10, 4, 0, 0, 6, 13, 17, 13, 3, 2, 3, 7, 2, 17, 14, 11, 11, 8, 9, 10, 4, 6, 7, 1, 2, 3, 0, 7, 9, 0, 0, 0, 1, 0, 4, 6, 8, 0, 7, 7, 1, 10, 7, 0, 9, 11, 3, 0, 0, 5, 3, 5, 17, 12, 12, 12, 2, 1, 7, 7, 5, 7, 0, 0, 7, 3, 5, 9, 15, 10, 0, 0, 0, 5, 8, 11, 14, 15, 11, 11, 12, 13, 7, 12, 12, 9, 9, 10, 17, 8, 9, 8, 5, 1,4, 50, 86, 97, 98, 101, 94, 76, 78, 83, 94, 92, 82, 98, 130, 157, 161, 143, 110, 95, 80, 77, 77, 81, 88, 79, 78, 77, 61, 71, 80, 97, 105, 89, 57, 57, 58, 52, 47, 54, 57, 57, 57, 68, 71, 63, 73, 96, 108, 96, 70, 80, 72, 67, 71, 65, 65, 70, 64, 61, 68, 73, 63, 79, 86, 77, 64, 62, 59, 55, 56, 58, 66, 59, 56, 52, 52, 48, 51, 48, 44, 43, 40, 43, 38, 39, 43, 41, 36, 34, 37, 41, 41, 32, 27, 33, 33, 39, 39, 42, 50, 43, 42, 48, 40, 44, 34, 51, 64, 57, 55, 53, 43, 43, 47, 47, 50, 41, 50, 59, 54, 58, 51, 43, 46, 41, 32, 30, 34, 35, 25, 18, 26, 21, 31, 34, 36, 42, 43, 35, 28, 22, 21, 32, 31, 25, 32, 32, 31, 35, 36, 46, 46, 33, 24, 14, 21, 26, 31, 30, 31, 34, 32, 23, 24, 31, 32, 38, 39, 30, 18, 32, 32, 34, 31, 27, 23, 26, 28, 26, 29, 38, 39, 34, 34, 36, 29, 27, 23, 24, 29, 40, 45, 39, 30, 28, 22, 21, 22, 34, 37, 33, 35, 31, 20, 14, 23, 35, 35, 31, 32, 31, 25, 32, 32, 35, 29, 19, 26, 27, 22, 25, 25, 27, 27, 25, 31, 33, 21, 23, 26, 27, 26, 24, 17, 16, 13, 20, 17, 19, 17, 5, 6, 11, 16, 17, 13, 8, 10, 15, 12, 5, 0, 4, 13, 18, 13, 10, 13, 12, 10, 10, 4, 0, 0, 6, 13, 17, 13, 3, 2, 3, 7, 2, 17, 14, 11, 11, 8, 9, 10, 4, 6, 7, 1, 2, 3, 0, 7, 9, 0, 0, 0, 1, 0, 4, 6, 8, 0, 7, 7, 1, 10, 7, 0, 9, 11, 3, 0, 0, 5, 3, 5, 17, 12, 12, 12, 2, 1, 7, 7, 5, 7, 0, 0, 7, 3, 5, 9, 15, 10, 0, 0, 0, 5, 8, 11, 14, 15, 11, 11, 12, 13, 7, 12, 12, 9, 9, 10];
    // console.log(waveform);
    q.noFill();
    q.beginShape();
    
    q.stroke(255,255,255); // waveform is white
    q.strokeWeight(50);
    for (let i = 0; i< waveform.length; i+=10){
      let x = q.map(i, 0, waveform.length, 0, q.windowWidth);
      let y = q.map( waveform[i]/8, -1, 1, 0, q.windowHeight);
      q.vertex(x,y);
    }
    q.endShape();
    
    
    q.stroke("blue");
    q.strokeWeight(4);
    
    
    q.rms = 1;
    
    // if ( q.peakDetect.isDetected ) {
    //   // q.rms = q.analyzer.getLevel();
    //   r = 127;
    //   g = -170;
    //   b = -190;
    //   o = .5;
    
    // } else {
    //   r = r * .85;
    //   g = g * .85;
    //   b = b * .85;
    //   o = o * .85;
    //   // q.rms = q.analyzer.getLevel();
    // }
    q.fill('rgba('+parseInt(50 + r)+','+parseInt(50 + g)+','+parseInt(100 + b)+','+(.5 + o)+')');
    
    // Get the average (root mean square) amplitude
    // q.rms = q.analyzer.getLevel();
    q.stroke("blue");
    q.strokeWeight(0);
    console.log("rms"+q.rms)
    
    q.sizeChange=q.random(1,2)
    //         // Draw an ellipse with size based on volume
    q.ellipse(q.width / 2, q.height / 2, 200 + q.rms * (q.height / 2)* q.sizeChange, 200 + q.rms * (q.height / 2)*q.sizeChange)
    
    //       }
    
    // q.analyzer.disconnect();

   // run function to cut out part of the canvas
   q.cutout();
    // q.song.setVolume(0)
  }
  
  
  
  
  
  
  
  
  
  
  // let r:any = 0, g:any = 0, b:any = 0, o:any = 0;
  //       p.draw= ()=> {
  
  //          p.background(255,0,0);
  //         // p.background('rgba(75, 121, 161, 0.1)');
  
  //         filterFreq = p.map (p.mouseX, 0, width, 10, 22050);
  
  //         // Map mouseY to resonance (volume boost) at the cutoff frequency
  //         filterRes = p.map(p.mouseY, 0, height, 15, 5);
  
  //         // set filter parameters
  //         filter.set(filterFreq, filterRes);
  
  //         // peakDetect accepts an fft post-analysis
  //         let spectrum = fft.analyze();
  //         peakDetect.update(fft);
  
  //         p.fill('#4ca1af');
  //         p.stroke('rgba(50,50,50,1)');
  //         p.strokeWeight(1);
  
  
  //         let waveform = fft.waveform();
  //         p.noFill();
  //         p.beginShape();
  
  //         p.stroke(255,255,255); // waveform is white
  //         p.strokeWeight(50);
  //         for (let i = 0; i< waveform.length; i+=10){
  //           let x = p.map(i, 0, waveform.length, 0, width);
  //           let y = p.map( waveform[i]/8, -1, 1, 0, height);
  //           p.vertex(x,y);
  //         }
  //         p.endShape();
  
  //         let rms = 0;
  //         if ( peakDetect.isDetected ) {
  //           rms = analyzer.getLevel();
  //           r = 127;
  //           g = -170;
  //           b = -190;
  //           o = .5;
  
  //         } else {
  //           r = r * .85;
  //           g = g * .85;
  //           b = b * .85;
  //           o = o * .85;
  //           rms = analyzer.getLevel();
  //         }
  //         p.fill('rgba('+parseInt(50 + r)+','+parseInt(50 + g)+','+parseInt(100 + b)+','+(.5 + o)+')');
  //         //fill('rgba(255,0,0,.5)');
  //         // Get the average (root mean square) amplitude
  //         //let rms = analyzer.getLevel();
  
  //         p.stroke("blue");
  //         p.strokeWeight(0);
  
  //         // Draw an ellipse with size based on volume
  //         p.ellipse(width / 2, height / 2, 200 + rms * (height / 2), 200 + rms * (height / 2))
  
  //       }
  //       p.togglePlaying = () => {
  //         if (!song.isPlaying()) {
  //           console.log("time to play");
  //           song.play();
  //           pauseButton.html("pause");
  //         } else {
  //           console.log("song is paused");
  //           song.pause();
  //           pauseButton.html("play");
  //           pauseButton.id('pause');
  //         }
  //       }
  //       p.doubleClicked = () =>{
  //         p.remove();
  //       }
  //     }
  // let player = new p5(s);
  // return player;
  
  
  q.cutout  = function() {
    var c = document.getElementById("defaultCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect((q.width / 2) - cutoutSize, 0, cutoutSize * 2, q.height);
  };  
  
  
}



// }


module.exports= visualizer;




