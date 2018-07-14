const windowWidth2 = window.innerWidth;


//test sketch 1
var sketch = function(p){
	p.xpos=100;
	p.ypos=100;

	p.setup = function(){
		width= screen.width;
		this._pixelDensity = 1;
		var canvas = p.createCanvas(windowWidth2, windowWidth2/1.85); //make this mobile friendly
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
		q.pixelDensity(1);
		q.canvas= q.createCanvas(windowWidth2, windowWidth2/1.755, 'webgl');
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



// q.devicePixelRatio = window.devicePixelRatio || 1;

q.resize =  function() {
	q.resizeCanvas(windowWidth2, windowWidt2h/1.755, 'webgl');
	q.target.width= window.innerWidth * .92;
	q.target.height=window.innerWidth /2;
	//set up reformat parameters
	q.reformat.width = q.target.width;
	q.reformat.height = q.target.height;
	q.reformat.mode = "cover";

} 

window.onresize = q.resize;

}



var sketch3 = function(r){
	r.xpos=100;
	r.ypos=100;

	r.setup = function(){
		this._pixelDensity = 1;
		canvas = r.createCanvas(windowWidth2, windowWidth2/1.85); //make this mobile friendly
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
	r.resize =  function() {
		r.resizeCanvas(windowWidth2, windowWidth2/1.755, 'webgl');
		r.target.width= window.innerWidth * .92;
		r.target.height=window.innerWidth /2;
	//set up reformat parameters
	r.reformat.width = r.target.width;
	r.reformat.height = r.target.height;
	r.reformat.mode = "cover";

} 

window.onresize = r.resize;
}




var sketch4 = function(s){

	s.setup = function(){
		this._pixelDensity = 1;
		canvas = s.createCanvas(windowWidth2, windowWidth2/1.85); //make this mobile friendly
		canvas.parent('video-overlay');
		s.background("white");

	}

	s.draw = function(){


		s.noStroke();
		s.fill('red');
		s.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
		s.offset = 30;
		s.numCurves = 14;
		s.index = 0;
		for (s.i = 0; s.i < s.numCurves; s.i++) {
		// x ranges width of canvas
		s.index = s.index % s.colors.length;
		if (s.index == s.colors.length) {
			s.index = 0;
		}

		s.fill(s.colors[s.index])
		for (s.x = 0; s.x < s.width; s.x++) {
			// scaled so fewer and higher curves on screen
			s.y = s.sin(s.x / 100) * -100;
			s.ellipse(s.x, s.y + 100 + s.offset * s.i, s.offset);
		}
		s.index++;
	}
}


s.resize =  function() {
	s.resizeCanvas(windowWidth2, windowWidth2/1.755, 'webgl');
	s.target.width= window.innerWidth * .92;
	s.target.height=window.innerWidth /2;
	//set up reformat parameters
	s.reformat.width = s.target.width;
	s.reformat.height = s.target.height;
	s.reformat.mode = "cover";

} 

window.onresize = s.resize;

}

