
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
	r.resize =  function() {
		r.resizeCanvas(windowWidth, windowWidth/1.755, 'webgl');
		r.target.width= window.innerWidth * .92;
		r.target.height=window.innerWidth /2;
	//set up reformat parameters
	r.reformat.width = r.target.width;
	r.reformat.height = r.target.height;
	r.reformat.mode = "cover";

} 

window.onresize = r.resize;
}


