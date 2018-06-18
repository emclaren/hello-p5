

var sketch = function(p){
	p.xpos=100;
	p.ypos=100;


	p.setup = function(){
		width= screen.width;
		this._pixelDensity = 1;
		p.createCanvas(1200,800);
		// p.background(51)
		// p.createCanvas(width, width*2); //make this mobile friendly
 // p.canvas.parent('video-overlay');
 console.log("hi"); // xpos = windowWidth/1.3;
 // ypos =  windowHeight/3;
 p.fill(0,133,255);
 p.background(51);
}

p.draw = function(){
	// p.clear();
	// p.background(51);
	p.strokeWeight(5);
	// p.ellipseMode(RADIUS);
	//
	p.stroke(255,255,255);
	p.ellipse(p.xpos, p.ypos, 100, 100);
	// p.sleep(3000);
	 // console.log("hi2");




	 // setTimeout(removeCanvas, 3000);



	}
}


var sketch2 = function(q){
	q.xpos=100;
	q.ypos=100;


	q.setup = function(){
		this._pixelDensity = 1;
		q.createCanvas(700,800)
		q.background(51)

	}

	q.draw = function(){
		q.clear();
		q.strokeWeight(5);
	// p.ellipseMode(RADIUS);
	q.fill(0,255,0);
	q.stroke(255,102,255);
	q.ellipse(q.xpos+100, q.ypos+100, 200, 200);
	q.xpos=q.xpos+1;
	q.ypos=q.ypos+1;

}
}



var sketch3 = function(r){
	r.xpos=100;
	r.ypos=100;


	r.setup = function(){
		this._pixelDensity = 1;
		r.createCanvas(1000,1000)
		r.background(51)
 // var canvas = createCanvas(windowWidth, windowWidth/1.85); //make this mobile friendly
 // canvas.parent('video-overlay');
 console.log("hi");
 // xpos = windowWidth/1.3;
 // ypos =  windowHeight/3;

}

r.draw = function(){
	r.clear();
	r.strokeWeight(5);
	// p.ellipseMode(RADIUS);
	r.fill(122,255,0);
	r.stroke(122,102,255);
	r.ellipse(r.xpos+200, r.ypos+200, 200, 200);
	r.ypos++;
}
}


// function removeCanvas(){
// 	myp5.background(255,0,123);
// 	console.log("remove canvas")
// };


// setTimeout(removeCanvas, 2000);

  // myp52 = new p5(sketch2);
// function removeCanvas(){
//       myp5.remove();
//       console.log("remove canvas")

//     };


// var  myp5 = new p5(sketch);



// setTimeout(removeCanvas, 2000);








// var myp5 = new p5(sketch);




// function draw() {

// 	background(255,0,255);

// 	//First sketch, starts playing at 2 seconds
// 	if(sketch=="sketch1"){
// 		clear();
// 		strokeWeight(5);
// 		ellipseMode(RADIUS);
// 		fill(0,255,255);
// 		stroke(255,255,255);
// 		ellipse(xpos, ypos, 100, 100);

// 	}
// 	//Second sketch, starts playing at 5 seconds
// 	else if(sketch =="sketch2"){
// 		clear();
// 		strokeWeight(5);
// 		fill(255,0,0);
// 		//   ellipseMode(RADIUS);
// 		stroke(123,0,255);
// 		ellipse(xpos, ypos, 50, 60);
// 		xpos=xpos-2;

// 	}
// 	else{
// 		console.log("no sketch loaded yet");
// 	}

// }
// function mousePressed() {
// 	clear();
// }

// function windowResized() {
// 	resizeCanvas(windowWidth, windowWidth/1.85);
// }

