var planetlamonster;

//Bolean parameters for game

var welcomeScreen = true;

var laMonstersTitle;

var asteriod1;
var asteriod2;
var asteriod3;
var asteriod4;


var star1;
var star2;
var star3;
var starBackground;


var playButton;
var clickedplayButton;

var mySound;


function preload() {
	
	mySound = loadSound('http://www.oke.design/lamonsters/assets/Blue_Dot_Sessions-03-Glass_Runner.mp3');

 planetlamonster = loadImage("http://www.oke.design/lamonsters/assets/planet.png");

laMonstersTitle = loadImage("http://www.oke.design/lamonsters/assets/laMonsters _Title-01.png");
	
	asteriod1 = loadImage("http://www.oke.design/lamonsters/assets/LaMonsters-Assets-Asteroid-2.png");
	asteriod2 = loadImage("http://www.oke.design/lamonsters/assets/LaMonsters-Assets-Asteroid-2.png");
	asteriod3 = loadImage("http://www.oke.design/lamonsters/assets/LaMonsters-Assets-Asteroid-4.png");
	asteriod4 = loadImage("http://www.oke.design/lamonsters/assets/LaMonsters-Assets-Asteroid-4.png");


	star1 = loadImage("http://www.oke.design/lamonsters/assets/LaMonsters-Assets-Star.png");
	star2 = loadImage("http://www.oke.design/lamonsters/assets/LaMonsters-Assets-Star-2.png");
	star3 = loadImage("http://www.oke.design/lamonsters/assets/LaMonsters-Assets-Star-3.png");
	starBackground = loadImage("http://www.oke.design/lamonsters/assets/stars-background.png");
	
	playButton = loadImage("http://www.oke.design/lamonsters/assets/worldButton.png");
	clickedplayButton = loadImage("http://www.oke.design/lamonsters/assets/clickedworldButton.png");
	

}

function setup() {
 createCanvas(1000, 600);
 
	mySound.setVolume(0.5);
	mySound.play();
	//music();
}

function draw() {

 background('#000032');
 //rect(50, 50, 20, 20);
 //bollean that triggers use of functions
 if (welcomeScreen) {
	 
	 //music playing
	 //music();
	 //run astreiods drawing
	 asteriods();
	 //draw tile 
	 title(); 
	 //drawing stars
	 stars();
	 //Run planet function
	 planet();
	 
	 play();
  }
  
  
 }




//The aim to is to get all the sketches using one asset file that lies in the deepest folder


//Variables for editing planet
//variables that position the planet on canvas
var planetX = 1000;
var planetY = 0;
//variables that size the planet
var planetScale = 0.005;
//variable that rotate the planet
var planetRotate = 20;


function planet() {
	
	//Animations for Planet
  //Adjusting planetX position over time
  if (planetX > width / 2) {

   if (planetX > 900) {
    planetX -= 6.23;
   }

   if (planetX > 650 && planetX < 900) {
    planetX -= 6.7;
   }

   if (planetX < 650) {
    planetX -= 2.7;
   }
  }


	//adjusting planetY position over time     
  if (planetY < 550) {

   if (planetY < 150) {
    planetY += 3.23;
   }

   if (planetY < 250 && planetY > 150) {
    planetY += 2.75;
   }

   if (planetY < 350 && planetY > 250) {
    planetY += 2.25;
   }

   if (planetY < 450 && planetY > 350) {
    planetY += 1.95;
   }

   if (planetY < 550) {
    planetY += 1.7;
   }

  }
	
  //Adjusting planet Scale over time
  if (planetScale < 0.60) {

   if (planetScale < 0.20) {
    planetScale += 0.00766;
   }

   if (planetScale > 0.20 && planetScale < 0.40) {
    planetScale += 0.00452;
   }

   if (planetScale > 0.40) {
    planetScale += 0.00251;
   }

  }

 //Drawing plante and placing it on screen
 push()

 translate(planetX, planetY);
 rotate(radians(planetRotate));
 scale(planetScale);

 imageMode(CENTER);
 image(planetlamonster, 0, 0);


 pop();
	

 //create images of universe to and slowly reveal them to show the universe of montsers
 //create zoom effect that makes planet bigger over time. 

 //create text graphic that introduces the planet "welcome to Planet Lamonster"
 planetRotate += 0.3;
}


//Variables for editing Title
//variables that position the title on canvas
var titleX = 500;
var titleY = 150;
//variables that title the planet
var titleScale = 0.005;
//variable that title the planet
var titleRotate = 0;

function title() {
	
 //Adjusting title Scale over time
  if (s.titleScale < 0.25) {

   if (s.titleScale < 0.10) {
   s.titleScale += 0.00766;
   }

   if (s.titleScale > 0.10 && s.titleScale < 0.25) {
    s.titleScale += 0.00452;

   }

   if (s.titleScale > 0.25) {
    s.titleScale += 0.00251;
   }	    

  }	

	
	//tiltle graphic
s.push()

 s.translate(s.titleX, s.titleY);
 s.rotate(radians(s.titleRotate));
 s.scale(s.titleScale);

 s.imageMode(s.CENTER);
 s.image(s.laMonstersTitle, 0, 0);

 .pop();
	 
	
}



//Variables for editing asteriods
//variables that position the asteriods

var asteriod1X = 90;
var asteriod1Y = 500;

var asteriod2X = 820;
var asteriod2Y = 200;

var asteriod3X = 90;
var asteriod3Y = 100;

var asteriod4X = 300;
var asteriod4Y = 300;
	
//variables that title the asteriods
var asteriod1Scale = 0.40;
	
var asteriod2Scale = 0.75;
	
var asteriod3Scale = 0.55;
	
var asteriod4Scale = 0.50;

//variable that title the asteriods
var asteriod1Rotate = 0;
	
var asteriod2Rotate = 0;
	
var asteriod3Rotate = 0;
	
var asteriod4Rotate = 0;

	
function asteriods() {
	

  
	
//asteriod placments
 push()
 translate(asteriod1X,  asteriod1Y);
 rotate(radians( asteriod1Rotate));
 scale( asteriod1Scale);
	
 imageMode(CENTER);
 image(asteriod1, 0, 0);

 pop();
	

//asteriod placments
 push()
 translate(asteriod2X,  asteriod2Y);
 rotate(radians( asteriod2Rotate));
 scale( asteriod2Scale);
	
 imageMode(CENTER);
 image(asteriod2, 0, 0);

 pop();
	
//asteriod placments
 push()
 translate(asteriod3X,  asteriod3Y);
 rotate(radians( asteriod3Rotate));
 scale( asteriod3Scale);
	
 imageMode(CENTER);
 image(asteriod3, 0, 0);

 pop();
	
	
//asteriod placments
 push()
 translate(asteriod4X,  asteriod4Y);
 rotate(radians( asteriod4Rotate));
 scale( asteriod4Scale);
	
 imageMode(CENTER);
 image(asteriod4, 0, 0);

 pop();
	
	//Adjusting position over time
  if (asteriod1X > 80) {
	  
	  asteriod1X -= 0.005;
	  asteriod1Rotate -= 0.2;
  }
	
if (asteriod2X < 840) {
	  
	  asteriod2X -= 0.05;
	  asteriod2Rotate += 0.2;
  }

	
  if (asteriod3X > 80) {
	  
	  asteriod3X += 0.05; 
	asteriod3Rotate -= 0.3;
  }
	

  if (asteriod4X > 290) {
	  
	  asteriod4X += 0.07; 
	asteriod4Rotate -= 0.3;
  }
	    
	
	
}



//Variables for editing stars
//variables that position the stars

var star1X = 200;
var star1Y = 450;

var star2X = 820;
var star2Y = 500;

var star3X = 550;
var star3Y = 200;


	
//variables that title the asteriods
var star1Scale = 0.75;
	
var star2Scale = 0.75;
	
var star3Scale = 0.75;
	

//variable that title the asteriods
var star1Rotate = 0;
	
var star2Rotate = 0;
	
var star3Rotate = 0;
	
	
function stars() {

//background stars
imageMode(LEFT);
 image(starBackground, 0, 0);
	
//stars placments
 push()
 translate(star1X,  star1Y);
 rotate(radians( star1Rotate));
 scale( star1Scale);
	
 imageMode(CENTER);
 image(star1, 0, 0);

 pop();
	

//starts placments
 push()
 translate(star2X, star2Y);
 rotate(radians( star2Rotate));
 scale( star2Scale);
	
 imageMode(CENTER);
 image(star2, 0, 0);

 pop();
	
//stars placments
 push()
 translate(star3X, star3Y);
 rotate(radians(star3Rotate));
 scale( star3Scale);
	
 imageMode(CENTER);
 image(star3, 0, 0);

 pop();
	
 
	
	
	
	
}




function music() {

 //function that plays music at certain times
 //dramatic music to open up world
//mySound.jump(3, 180);


}

function play() {

 //this function creates the play buttons 
 //button links to character selection game

 //button cause music and curret graphics to fade
	
if( mouseIsPressed){
	if( mouseX > 600 && mouseY > 400 && mouseX < 950 && mouseY <600 )	{
	 push();
	translate(800, 500);
	scale(0.5);
	imageMode(CENTER);
	image(clickedplayButton,0,0);
	pop();
	}
} else {

		push();
		translate(800, 500);
		scale(0.5);
		imageMode(CENTER);
		image(playButton,0,0);
		pop();
	
	}
}



function mousePressed() {
	
if( mouseX > 600 && mouseY > 400 && mouseX < 950 && mouseY <600 )	{
	window.location.replace("CharacterSelect/index.html");
	
	if(mySound.isPlaying()){
		
		mySound.stop();
		
	 }
	
	}

 
}