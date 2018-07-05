const windowWidth = window.innerWidth;


//test sketch 1
var sketch = function(p){
	p.xpos=100;
	p.ypos=100;

	p.setup = function(){
		width= screen.width;
		this._pixelDensity = 1;
		var canvas = p.createCanvas(windowWidth, windowWidth/1.85); //make this mobile friendly
		canvas.parent('video-overlay');
		p.fill(0,133,255);
	}

	p.draw = function(){
		p.strokeWeight(5);
		p.stroke(255,255,255);
		p.ellipse(p.xpos, p.ypos, 100, 100);
		p.textSize(32);
	}
}

//canvas overlap sketch
var sketch2 = function(q){
	q.xpos=100;
	q.ypos=100;
	q.setup = function(){

// var source = document.getElementById('source'),
				// ctx = source.getContext('2d'),

				// seriously, // the main object that holds the entire composition
				// reformat, // reformat node
				// target; // a wrapper object for our target canvas

			// seriously = new Seriously();
			// reformat = seriously.transform('reformat');
			// target = seriously.target('#canvas');

			// //set up reformat parameters
			// reformat.width = target.width;
			// reformat.height = target.height;
			// reformat.mode = '#mode';

			// // connect all our nodes in the right order
			// reformat.source = '#source';
			// target.source = reformat;


















		  // specify multiple formats for different browsers


		// width= screen.width;
		// channel mapping. what is vp9 and dala? what is Webrtc

		// this._pixelDensity = 1;
		q.pixelDensity(.6);
		q.canvas= q.createCanvas(windowWidth, windowWidth/1.755, 'webgl');
		q.canvas.id('newcanvas');
		q.canvas.parent('video-overlay');
		q.seriously, // the main object that holds the entire composition
		q.sourceImage, // a wrapper object for our source image
		q.target; // a wrapper object for our target canvas
		q.reformat;
		q.seriously = new Seriously();
		q.reformat = q.seriously.transform('reformat');


		q.sourceImage = q.seriously.source('#player');// Create a source object by passing a CSS query string.
		q.target = q.seriously.target('#newcanvas');// now do the same for the target canvas

		
		q.target.source = q.sourceImage;// connect any node as the source of the target. we only have one.
		q.target.width= window.innerWidth * .92;
		q.target.height=window.innerWidth /2;


	//set up reformat parameters
			q.reformat.width = q.target.width;
			q.reformat.height = q.target.height;
			q.reformat.mode = "cover";

			// connect all our nodes in the right order
			q.reformat.source = '#player';
			// q.target.source = q.reformat;

		// q.target.source =;

		q.chroma = q.seriously.effect('chroma');
		q.chroma.source =  q.reformat;
		q.target.source = q.chroma;

		q.r = 76/255;
		q.g = 249/255;
		q.b = 43/255;
		q.chroma.screen = [q.r,q.g,q.b,1];

		q.seriously.go();
}

q.draw = function(){

}

//   q.resize= function() {

//     q.target.width = window.innerWidth ;
//     q.target.height = window.innerWidth  /2; 
//     // reformat.width = target.width;
//     // reformat.height = target.height;
//     console.log("I resized");
//   } 

//  window.onresize = q.resize;
// }

}

var sketch3 = function(r){
	r.xpos=100;
	r.ypos=100;

	r.setup = function(){
		this._pixelDensity = 1;
		canvas = r.createCanvas(windowWidth, windowWidth/1.85); //make this mobile friendly
		canvas.parent('video-overlay');

	}

	r.draw = function(){
		// r.clear();
		r.background(255,0,255);
		r.strokeWeight(5);
		r.fill(122,255,0);
		r.stroke(122,102,255);
		r.ellipse(r.xpos+200, r.ypos+200, 200, 200);
		r.ypos++;
		r.textSize(32);
		r.text('INSERT INTRO SKETCH 3 HERE!!', 10, 30);

	}
}


