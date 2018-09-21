/*********************
// Rainbow
// Description: Draws randomly coloured hearts on screen 
// Credit: waiting for release
*********************/





const rainbow = (s) => {
// s.change=0;
s.j=100;
s.k=100;
s.test=0;
s.offset = 30;
s.decrease=0;
s.k2=100;
s.j2=100;
s.c=255;
s.index = 0;
s.firstTime=true;
s.cutshape=0

s.setup  = () => {
	s.pixelDensity(1);
	let windowWidth = window.innerWidth ;
	let windowHeight = windowWidth  * 0.562;
	s.canvas = s.createCanvas(windowWidth, windowHeight);
	s.canvas.parent('video-overlay');
	s.offset = s.windowWidth/34;
	s.distanceFromTop = s.height/4;
	s.noStroke();
	s.colors = [[255,0,5,s.c],[255, 170, 0,s.c],[255, 255, 0,s.c],[30,237,58,s.c],[0, 100, 255,s.c],[153, 17, 170,s.c],[164, 66, 220,s.c]]

	s.numCurves = 6;

	let j = s.map(s.mouseX, 0, s.width, -20, 250);
	s.numCurves = 7;
	console.log(s.colors)

	s.yMobileValue = s.windowWidth/10.24;
	for (s.i = 0; s.i < s.numCurves; s.i++) {
		// x ranges width of canvas
		s.index = s.index % s.colors.length;
		if (s.index == s.colors.length) {
			s.index = 0;
		}
		s.fill(s.colors[s.index])
		for (s.x = 0; s.x < s.windowWidth+5; s.x++) {
			// scaled so fewer and higher curves on screen
			s.y = s.sin(s.x / 100) * 100;
			s.ellipse(s.x, s.y  + s.distanceFromTop + s.offset * s.i, s.offset);
			 // s.ellipse(s.x-5, s.y - (j*2)+ s.height/4+ s.offset * s.x, s.offset);
			// s.y = s.sin(s.x / (s.k+s.k2)) * -s.yMobileValue;
			// s.ellipse(s.x*(s.j2), s.y + s.distanceFromTop + s.offset * s.i, s.offset);
		}
		s.index++;
		if(s.k2>11){

			s.k2=s.k2-.15;
		}
		if(s.j2>5){

			s.j2=s.j2-.15;
		}


	}





}

s.draw = function(){



	if(window.videoCurrentTimeGlobal>54){
		s.cutshape+=10;		
	}

	s.cutout();

}

s.cutout =function(){
	var c=document.getElementById("defaultCanvas0");
	var ctx=c.getContext("2d");
	ctx.clearRect((s.width/2)-((s.windowWidth/3.166)/2)-s.cutshape,0,  s.windowWidth/3.166 +(s.cutshape*2) ,s.windowHeight);
}


}

module.exports= rainbow;








// const rainbow = (s) => {
// 	let change=0;
// 	let c =0;

// s.j=100;
// s.k=100;
// 		s.k2=100;
// 		s.j2=100;

// 	s.setup  = () => {
// 		s.pixelDensity(1);
// 		let windowWidth = window.innerWidth ;
// 		let windowHeight = windowWidth  * 0.562;
// 		s.canvas = s.createCanvas(windowWidth, windowHeight);
// 		s.canvas.parent('video-overlay');
// 		s.background("white");
// 	}

// 	s.draw  = () => {
// 	// s.change=s.change+.5;
// 	s.j= s.map(s.mouseX, 0, s.windowWidth, 1, 50);
// 	s.k= s.map(s.mouseY, 0, s.windowHeight, 1, 100);
// 	console.log("rainbowsketch")
// 	let c1 = c -255
// 	let c2 = c1 -100
// 	let c3 = c2 -100
// 	let c4 = c3 -100
// 	let c5 = c4 -100
// 	let c6 = c5 -100
// 	let c7 = c6 -100
// 	s.clear();
// 	// s.blendMode(s.LIGHTEST);
// let j = s.map(s.mouseX, 0, s.width, -20, 250);
// s.noStroke();
// let colors = [[255,0,5, c],[255, 170, 0, c1],[255, 255, 0, c2],[30,237,58, c3],[0, 100, 255, c4],[153, 17, 170, c5],[164, 66, 220, c6]]

// 			// rgba(255, 0, 5,.02)', 'rgba(255, 170, 0, .02)', 'rgba(255, 255, 0,.02)', 'rgba(30,237,58,.02)', 'rgba(0, 100, 255,.9)', 'rgba(153, 17, 170,.9)', 'rgba(164, 66, 220, .9)']
// 			c+=50;
// 			console.log(c)
// 		// s.colors = ['rgba(255, 0, 5,.02)', 'rgba(255, 170, 0, .02)', 'rgba(255, 255, 0,.02)', 'rgba(30,237,58,.02)', 'rgba(0, 100, 255,.9)', 'rgba(153, 17, 170,.9)', 'rgba(164, 66, 220, .9)']
// 		let offset = 50;
// 		let numCurves = 7;
// 		let index = 0;
// 		for (let i = 0; i < numCurves; i++) {
// 		// x ranges width of canvas
// 		index = index % colors.length;
// 		if (index == colors.length) {
// 			index = 0;
// 		}

// 		s.index = 0;
// 		s.distanceFromTop = s.windowWidth /7;
// 		s.yMobileValue = s.windowWidth/10.24;
// // s.noFill();
// // s.fill(s.colors[s.index]);
// 		// s.stroke(s.colors[s.index]);

// 		s.fill(colors[index]);

// // 		for(let i = 0; i < s.width; i++) {
// // 			console.log("this is the number between for "+i)

// // 			let y = s.sin(i / 100) * -100;
// // 			s.ellipse(i-5, y - (j*2)+ s.height/4+ offset * i, offset);
// // 				// s.ellipse(i-5, s.width/2, offset, offset);
// // 				console.log("i"+i)


// // }
// for(let x = 0; x < s.windowWidth; x++) {
// 		// for(let x = s.width+5; x < 0; x--) {
// 				console.log("after the  looop")
// 			// scaled so fewer and higher curves on screen
// 			// let y = s.sin(x / 100) * -100;

// 			let y = s.sin(x / 100) ;
// 			// s.ellipse(x-5, y - (j*2)+ s.height/4+ offset * i, offset);
// 				// s.ellipse(x-5, s.width/2, offset, offset);
// 				s.ellipse(s.x*(s.j2), s.y +s.offset , s.offset);
// 				console.log("x"+x)
// 		}
// 		index++;
// 	}


// 	s.cutout();
// }

// s.cutout =function(){
// 	var c=document.getElementById("defaultCanvas0");
// 	var ctx=c.getContext("2d");
// 	ctx.clearRect((s.width/2)-((s.width/3.1655)/2),0,  s.width/3.1655 ,s.height);
// }




// }

// module.exports = rainbow;


