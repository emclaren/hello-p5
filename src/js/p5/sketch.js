const windowWidth = window.innerWidth;


//intro sketch 1
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
		p.text('INSERT INTRO SKETCH HERE!!', 10, 30);


	}
}


var sketch2 = function(q){
	q.xpos=100;
	q.ypos=100;


	q.setup = function(){
		this._pixelDensity = 1;
		q.createCanvas(700,800)
		q.background(51)
		canvas = q.createCanvas(windowWidth, windowWidth/1.85); //make this mobile friendly
		canvas.parent('video-overlay');

	}

	q.draw = function(){
		q.clear();
		q.strokeWeight(5);

		q.fill(0,255,0);
		q.stroke(255,102,255);
		q.ellipse(q.xpos+100, q.ypos+100, 200, 200);
		q.xpos=q.xpos+1;
		q.ypos=q.ypos+1;
		q.textSize(32);
		q.text('INSERT INTRO SKETCH 2 HERE!!', 10, 30);


	}
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
		r.clear();
		r.strokeWeight(5);
		r.fill(122,255,0);
		r.stroke(122,102,255);
		r.ellipse(r.xpos+200, r.ypos+200, 200, 200);
		r.ypos++;
		r.textSize(32);
		r.text('INSERT INTRO SKETCH 3 HERE!!', 10, 30);

	}
}


