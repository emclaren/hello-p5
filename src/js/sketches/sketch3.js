var sketch2 = function(p) {
	p.setup = function(){
		// p.background(200,200,200);
		p.windowWidth = window.innerWidth ;
		p.windowHeight = p.windowWidth * .5504
		 p.canvas= p.createCanvas(p.windowWidth, p.windowHeight, 'webgl');
		p.canvas.parent('video-overlay');
		p.fill(0,133,255);
		p.x = 0;
		p.y = 0;
	}

	p.draw = function(){
		p.strokeWeight(5);
		p.stroke(255,255,255);

		p.background(255,200,200);
		p.ellipse(p.x, p.y, p.windowWidth*.05, p.windowWidth*.1);
		console.log("sketch3")
		p.x=+1;
		p.y=+1;
	}

   p.windowResized= function windowResized() {
    p.resizeCanvas(p.windowWidth, p.windowWidth * .5504);
}
}

module.exports= sketch2;