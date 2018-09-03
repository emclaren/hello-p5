//<reference path="./../../../node_modules/p5/lib/p5.global-mode.d.ts"/>
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';
// import { FirebaseObjectObservable } from 'angularfire2/database';
// import { SongListService } from './../song-list.service';
// import { Router } from '@angular/router';
// import { P5canvasService } from './../p5canvas.service';
// declare var p5: any;

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
  providers: [SongListService, P5canvasService]
})
export class VisualizerComponent implements OnInit {
  // song: FirebaseObjectObservable<any[]>;
  songId: string;
  songToDisplay;
  audio;
  s;
  player;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private songListService: SongListService
  ) { }
  loadSong(thing){
    this.audio = thing;
    const s = (p, thing) => {
      let song;
      let canvas;
      let pauseButton;
      let analyzer, fft, peakDetect, peaks, filter, filterFreq, filterRes;
      // input = this.audio;
      let width = window.innerWidth;
      let height = 1000;
      p.preload = () => {
        console.log('preload');
        console.log(this.audio);
        song = p.loadSound(this.audio);
        fft = new p5.FFT();
        peakDetect = new p5.PeakDetect();
        pauseButton = p.createButton("pause");
        pauseButton.mousePressed(p.togglePlaying);
      }
      p.setup = () => {
        canvas = p.createCanvas(width, height);
        // p.parent('visualizer');
        canvas.id('visualizer');
        // song.setVolume(0.1);
        song.play();
        filter = new p5.LowPass();

        // Disconnect soundfile from master output.
        // Then, connect it to the filter, so that we only hear the filtered sound
        song.disconnect();
        song.connect(filter);
        analyzer = new p5.Amplitude();
        analyzer.setInput(song);
      }
      let r:any = 0, g:any = 0, b:any = 0, o:any = 0;
      p.draw= ()=> {


        p.background('rgba(75, 121, 161, 0.1)');

        filterFreq = p.map (p.mouseX, 0, width, 10, 22050);

        // Map mouseY to resonance (volume boost) at the cutoff frequency
        filterRes = p.map(p.mouseY, 0, height, 15, 5);

        // set filter parameters
        filter.set(filterFreq, filterRes);

        // peakDetect accepts an fft post-analysis
        let spectrum = fft.analyze();
        peakDetect.update(fft);

        p.fill('#4ca1af');
        p.stroke('rgba(50,50,50,1)');
        p.strokeWeight(1);


        let waveform = fft.waveform();
        p.noFill();
        p.beginShape();

        p.stroke(255,255,255); // waveform is white
        p.strokeWeight(50);
        for (let i = 0; i< waveform.length; i+=10){
          let x = p.map(i, 0, waveform.length, 0, width);
          let y = p.map( waveform[i]/8, -1, 1, 0, height);
          p.vertex(x,y);
        }
        p.endShape();

        let rms = 0;
        if ( peakDetect.isDetected ) {
          rms = analyzer.getLevel();
          r = 127;
          g = -170;
          b = -190;
          o = .5;

        } else {
          r = r * .85;
          g = g * .85;
          b = b * .85;
          o = o * .85;
          rms = analyzer.getLevel();
        }
        p.fill('rgba('+parseInt(50 + r)+','+parseInt(50 + g)+','+parseInt(100 + b)+','+(.5 + o)+')');
        //fill('rgba(255,0,0,.5)');
        // Get the average (root mean square) amplitude
        //let rms = analyzer.getLevel();

        p.stroke("blue");
        p.strokeWeight(0);

        // Draw an ellipse with size based on volume
        p.ellipse(width / 2, height / 2, 200 + rms * (height / 2), 200 + rms * (height / 2))

      }
      p.togglePlaying = () => {
        if (!song.isPlaying()) {
          console.log("time to play");
          song.play();
          pauseButton.html("pause");
        } else {
          console.log("song is paused");
          song.pause();
          pauseButton.html("play");
          pauseButton.id('pause');
        }
      }
      p.doubleClicked = () =>{
        p.remove();
      }
    }
    let player = new p5(s);
    return player;

}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.songId = urlParameters['id'];
    });
    this.songListService.getSongById(this.songId).subscribe(arg => {
      this.songToDisplay = arg;
    });


  };

};



// WEBPACK FOOTER //
// /Users/Guest/Desktop/notebook/src/app/visualizer/visualizer.component.ts







