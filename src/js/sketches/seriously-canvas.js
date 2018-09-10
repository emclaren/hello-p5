
/*********************
Seriously.js Canvas Sketch 
Description: Enables real-time greenscreen effect to overlay on plyr video
Credit: 
More info on Chroma effect: https://github.com/brianchirls/Seriously.js/wiki/Chroma-Key
*********************/


const seriously = require('../seriously/seriously'); //Seriouslyjs Core File
const chroma = require('../seriously/chroma'); //Seriouslyjs chroma effect (turns all pixels of a particular color into a transparency)


const seriouslyCanvas= (s) => {
    s.setup  = () => {
        s.pixelDensity(1);
        let windowWidth = window.innerWidth ;
        let windowHeight = windowWidth  * 0.562;
        s.canvas= s.createCanvas(windowWidth, windowHeight, 'webgl');
        s.canvas.parent('video-overlay');
        s.canvas.id('seriously-canvas');
        s.canvas.parent('video-overlay');
        s.seriously, // the main object that holds the entire composition
        s.sourceImage, // a wrapper object for our source image
        s.target; // a wrapper object for our target canvas
        s.reformat;
        s.seriously = new seriously();
        s.reformat = s.seriously.transform('reformat');
        s.sourceImage = s.seriously.source('#player');// Create a source object by passing a CSS query string, this targets plyr "player"
        s.target = s.seriously.target('#seriously-canvas');// Create a target object
        s.target.source = s.sourceImage;// connect the node as the source of the target.
        
        //Apply the seriously effects
        s.reformat.width = s.target.width;
        s.reformat.height = s.target.height;
        s.reformat.source =  s.sourceImage ; 
        s.chroma = s.seriously.effect('chroma');
        s.chroma.source =  s.reformat;
        s.target.source = s.chroma;

        // this is the color that will be keyed (screened) out 
        let r = 41 / 255;
        let g = 255 / 255;
        let b = 60 / 255;
        s.chroma.precision = 0.01;// try deleting later
        s.chroma.screen = [r, g, b, 1];
      
        s.seriously.go(); //Start seriously
    };
 };

 module.exports = seriouslyCanvas;
