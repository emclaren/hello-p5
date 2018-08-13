
/*********************
Seriously.js Canvas Sketch
Credit: Daniel Shiffman
Link:
*********************/

const seriously = require('../seriously/seriously'); 
const chroma = require('../seriously/chroma'); 

var seriouslyCanvas = function(q){
    q.windowWidth = window.innerWidth ;
    q.xpos=100;
    q.ypos=100;

    q.setup = function(){
        q.pixelDensity(1);
        q.canvas= q.createCanvas(q.windowWidth, q.windowWidth * .562, 'webgl');
        q.canvas.id('videocanvas');
        q.canvas.parent('video-overlay');
        q.seriously, // the main object that holds the entire composition
        q.sourceImage, // a wrapper object for our source image
        q.target; // a wrapper object for our target canvas
        q.reformat;
        q.seriously = new seriously();
        q.reformat = q.seriously.transform('reformat');
        q.sourceImage = q.seriously.source('#player');// Create a source object by passing a CSS query string.
        q.target = q.seriously.target('#videocanvas');// now do the same for the target canvas
        q.target.source = q.sourceImage;// connect any node as the source of the target. we only have one.
        q.target.width= window.innerWidth * .92;
        q.target.height=window.innerWidth /2;
         //set up reformat parameters
        q.reformat.width = q.target.width;
        q.reformat.height = q.target.height;
        q.reformat.mode = "cover";              
        q.background(0,0,55);
         // connect all our nodes in the right order
        q.reformat.source = '#player';
        q.chroma = q.seriously.effect('chroma');
        q.chroma.source =  q.reformat;
        q.target.source = q.chroma;

        q.r = 0/255;
        q.g = 0/255;
        q.b = 55/255;

        q.chroma.screen = [q.r,q.g,q.b,1];
        q.seriously.go();   

     }

     window.onresize = function() {
        q.windowWidth = window.innerWidth;
        q.windowHeight = q.windowWidth * .562
        q.resizeCanvas(q.windowWidth, q.windowHeight);
    } 
}

module.exports = seriouslyCanvas;
