/*********************
// La Monster Club Sketch 
// Credit: waiting for release
*********************/

var laMonster= function(s){

s.planetlamonster;

//Bolean parameters for game
s.welcomeScreen = true;

s.laMonstersTitle;

s.asteriod1;
s.asteriod2;
s.asteriod3;
s.asteriod4;


s.star1;
s.star2;
s.star3;
s.starBackground;


s.playButton;
s.clickedplayButton;



s.preload = function(){
	s.planetlamonster = s.loadImage("/../dist/assets/img/sketch_imgs/planet.png");
	s.laMonstersTitle = s.loadImage("/../dist/assets/img/sketch_imgs/laMonsters _Title-01.png");
	s.asteriod1 = s.loadImage("/../dist/assets/img/sketch_imgs/LaMonsters-Assets-Asteroid-2.png");
	s.asteriod2 = s.loadImage("./../dist/assets/img/sketch_imgs/LaMonsters-Assets-Asteroid-2.png");
	s.asteriod3 = s.loadImage("./../dist/assets/img/sketch_imgs/LaMonsters-Assets-Asteroid-4.png");
	s.asteriod4 = s.loadImage("./../dist/assets/img/sketch_imgs/LaMonsters-Assets-Asteroid-4.png");
	s.star1 = s.loadImage("./../dist/assets/img/sketch_imgs/LaMonsters-Assets-Star.png");
	s.star2 = s.loadImage("./../dist/assets/img/sketch_imgs/LaMonsters-Assets-Star-2.png");
	s.star3 = s.loadImage("./../dist/assets/img/sketch_imgs/LaMonsters-Assets-Star-2.png"); ///fix this!
	s.starBackground = s.loadImage("./../dist/assets/img/sketch_imgs/stars-background.png");
	s.playButton = s.loadImage("./../dist/assets/img/sketch_imgs/worldButton.png");
	s.clickedplayButton = s.loadImage("./../dist/assets/img/sketch_imgs/clickedworldButton.png");
}




s.setup = function(){
	
	s.pixelDensity(1);
	s.windowWidth = window.innerWidth ;
	s.windowHeight = s.windowWidth * .562
	s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
	s.canvas.parent('video-overlay');
	s.background('#000032');
	s.frameRate(0)
	s.image(s.starBackground, 0, 0);
}


s.draw = function(){
 console.log("windowwidth in sketch" + s.windowWidth)
	s.background('#000032');
	 //boolean that triggers use of functions
	 if (s.welcomeScreen) {
		 //run astreiods drawing
		 s.asteriods();
		 //draw tile 
		 s.title(); 
		 //drawing stars
		 s.stars();
		 //Run planet function
		 s.planet();
		}
}



//The aim to is to get all the sketches using one asset file that lies in the deepest folder

//Variables for editing planet
//variables that position the planet on canvas
s.planetX = 1000;
s.planetY = 0;
//variables that size the planet
s.planetScale = 0.005;
//variable that rotate the planet
s.planetRotate = 20;


s.planet=function() {
	
   //Animations for Planet
  //Adjusting planetX position over time
  if (s.planetX > s.windowWidth / 3.5) {

  	if (s.planetX > 900) {
  		s.planetX -= 6.23;
  	}
  	if (s.planetX > 650 && s.planetX < 900) {
  		s.planetX -= 6.7;
  	}
  	if (s.planetX < 650) {
  		s.planetX -= 2.7;
  	}
  }


	//adjusting planetY position over time     
	if (s.planetY < 550) {

		if (s.planetY < 150) {
			s.planetY += 3.23;
		}

		if (s.planetY < 250 && s.planetY > 150) {
			s.planetY += 2.75;
		}

		if (s.planetY < 350 && s.planetY > 250) {
			s.planetY += 2.25;
		}

		if (s.planetY < 450 && s.planetY > 350) {
			s.planetY += 1.95;
		}

		if (s.planetY < 550) {
			s.planetY += 1.7;
		}

	}
	
  //Adjusting planet Scale over time
  if (s.planetScale < 0.60) {

  	if (s.planetScale < 0.20) {
  		s.planetScale += 0.00766;
  	}

  	if (s.planetScale > 0.20 && s.planetScale < 0.40) {
  		s.planetScale += 0.00452;
  	}

  	if (s.planetScale > 0.40) {
  		s.planetScale += 0.00251;
  	}

  }
  s.push()

  s.translate(s.planetX, s.planetY);
  s.rotate(s.radians(s.planetRotate));
  s.scale(s.planetScale);

  s.imageMode(s.CENTER);
  s.image(s.planetlamonster, 0, 0);


  s.pop();


 //create images of universe to and slowly reveal them to show the universe of montsers
 //create zoom effect that makes planet bigger over time. 

 //create text graphic that introduces the planet "welcome to Planet Lamonster"
 s.planetRotate += 0.3;

}





//Variables for editing asteriods
//variables that position the asteriods

s.asteriod1X = 90;
s.asteriod1Y = 500;

s.asteriod2X = 820;
s.asteriod2Y = 200;

s.asteriod3X = 90;
s.asteriod3Y = 100;

s.asteriod4X = 300;
s.asteriod4Y = 300;

//variables that title the asteriods
s.asteriod1Scale = 0.40;

s.asteriod2Scale = 0.75;

s.asteriod3Scale = 0.55;

s.asteriod4Scale = 0.50;

//variable that title the asteriods
s.asteriod1Rotate = 0;

s.asteriod2Rotate = 0;

s.asteriod3Rotate = 0;

s.asteriod4Rotate = 0;


s.asteriods=function() {
	


	
//asteriod placments
s.push()
s.translate(s.asteriod1X,  s.asteriod1Y);
s.rotate(s.radians( s.asteriod1Rotate));
s.scale( s.asteriod1Scale);

s.imageMode(s.CENTER);
s.image(s.asteriod1, 0, 0);

s.pop();


//asteriod placments
s.push()
s.translate(s.asteriod2X,  s.asteriod2Y);
s.rotate(s.radians( s.asteriod2Rotate));
s.scale( s.asteriod2Scale);

s.imageMode(s.CENTER);
s.image(s.asteriod2, 0, 0);

s.pop();

//asteriod placments
s.push()
s.translate(s.asteriod3X,  s.asteriod3Y);
s.rotate(s.radians( s.asteriod3Rotate));
s.scale( s.asteriod3Scale);

s.imageMode(s.CENTER);
s.image(s.asteriod3, 0, 0);

s.pop();


//asteriod placments
s.push()
s.translate(s.asteriod4X,  s.asteriod4Y);
s.rotate(s.radians( s.asteriod4Rotate));
s.scale( s.asteriod4Scale);

s.imageMode(s.CENTER);
s.image(s.asteriod4, 0, 0);

s.pop();

	//Adjusting position over time
	if (s.asteriod1X > 80) {

		s.asteriod1X -= 0.005;
		s.asteriod1Rotate -= 0.2;
	}
	
	if (s.asteriod2X < 840) {

		s.asteriod2X -= 0.05;
		s.asteriod2Rotate += 0.2;
	}

	
	if (s.asteriod3X > 80) {

		s.asteriod3X += 0.05; 
		s.asteriod3Rotate -= 0.3;
	}
	

	if (s.asteriod4X > 290) {

		s.asteriod4X += 0.07; 
		s.asteriod4Rotate -= 0.3;
	}

	
	
}



//Variables for editing stars
//variables that position the stars

s.star1X = 200;
s.star1Y = 450;

s.star2X = 820;
s.star2Y = 500;

s.star3X = 550;
s.star3Y = 200;



//variables that title the asteriods
s.star1Scale = 0.75;

s.star2Scale = 0.75;

s.star3Scale = 0.75;


//variable that title the asteriods
s.star1Rotate = 0;

s.star2Rotate = 0;

s.star3Rotate = 0;

s.stars=function(){


//background stars
s.image(s.starBackground, 0, 0);

//stars placments
s.push()
s.translate(s.star1X,  s.star1Y);
s.rotate(s.radians( s.star1Rotate));
s.scale( s.star1Scale);

s.imageMode(s.CENTER);
s.image(s.star1, 0, 0);

s.pop();


//starts placments
s.push()
s.translate(s.star2X, s.star2Y);
s.rotate(s.radians( s.star2Rotate));
s.scale( s.star2Scale);

s.imageMode(s.CENTER);
s.image(s.star2, 0, 0);

s.pop();

//stars placments
s.push()
s.translate(s.star3X, s.star3Y);
s.rotate(s.radians(s.star3Rotate));
s.scale( s.star3Scale);

s.imageMode(s.CENTER);
s.image(s.star3, 0, 0);

s.pop();

}




//Variables for editing Title
//variables that position the title on canvas
s.titleX = .08*s.windowWidth;
s.titleY = 0;
//variables that title the planet
s.titleScale = 0.00004 *s.windowWidth;
//variable that title the planet
s.titleRotate = 0;

s.title= function(){

	
 //Adjusting title Scale over time
 if (s.titleScale < .8) {

 	if (s.titleScale < 0.10) {
 		s.titleScale += 0.00466;
 	}

 	if (s.titleScale > 0.10 && s.titleScale < 0.25) {
 		s.titleScale += 0.00152;

 	}

 	if (s.titleScale > 0.25) {
		s.titleScale += 0.00052;
 	}	    

 }	

	//title graphic
	s.push()
	s.translate(s.titleX, s.titleY);
	s.rotate(s.radians(s.titleRotate));
	s.scale(s.titleScale);

	s.imageMode(s.CORNERS);
  // s.image(img, 50, 50, 80, 80); 
	// s.imageMode(s.CENTER);
	s.image(s.laMonstersTitle, 0, 0);

	s.pop();

}


// window.onresize = function() {
// 	s.windowWidth = window.innerWidth;
// 	s.windowHeight = s.windowWidth * .562
// 	s.resizeCanvas(s.windowWidth, s.windowHeight);
// 	// console.log("I'm a new size")
// } 

//    s.sizeChange = function(){
//    	console.log("test size change")
// }

}

module.exports= laMonster;









