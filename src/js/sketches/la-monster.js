const p5play = require('./play.js');

var laMonster= function(p5){
	let monsterlooBackground; // background image
	let fastmove = false; // sprite moves faster depending on mouse position
	let standmonster; //pink monster standing in background
	let moveright = false; //determine direction of the sprite
	let monster; // game spirte
	let fade = 0 ;  // variable to fade in/out the sketch
	let magicX; // speed the character
	
	
	p5.preload = () => {
		monsterlooBackground = p5.loadImage("dist/assets/img/MonsterLoo_Background.png"); // preload the background image
	};
	
	p5.setup = () => {
		p5.pixelDensity(1);
		p5.windowWidth = document.documentElement.clientWidth;
		p5.windowHeight = p5.windowWidth  * 0.562;
		p5.canvas= p5.createCanvas(p5.windowWidth/2.8, p5.windowHeight/2);
		p5.canvas.parent('video-overlay');
		p5.canvas.addClass('la-monster-sketch'); // Add class to add margin to the canvas
		monster = p5.createSprite( p5.width/2, p5.height/1.25, 40, 40); // location of monster sprite
		monster.addAnimation("floating", "dist/assets/img/laMonsterLeftStanding_1.png", "dist/assets/img/laMonsterLeftStanding_5.png"); 
		monster.addAnimation("right", "dist/assets/img/laMonsterLeftMove_1.png", "dist/assets/img/laMonsterLeftMove_9.png");
		monster.depth = 5; // the z-index of the characters
		monster.scale = p5.width/2000; //reduce the size of the monster
		standmonster = p5.createSprite(p5.width*1.8, p5.height/1.2);  // pink monster in the background location
		standmonster.addAnimation("normal", "dist/assets/img/laMonsterBackgroundSprite.png"); //pink monster iamage
		standmonster.depth = 3; // the z-index of the characters
		standmonster.scale = p5.width/2000; //reduce the size of the monster
		magicX = p5.width/3; // initial character position
		p5.noStroke();
	};
	
	p5.draw = () => {
		// fade in the sketch using an overlapping rectangle
		if(fade < 255){
			fade += 10;
		}
		// fade out the sketch
		if(window.videoCurrentTimeGlobal > 2.25){
			fade -= 30;
		}	
		p5.fill(255,255,255,255-fade);
		p5.rect(0, 0, p5.width * 5, p5.height);


		p5.image(monsterlooBackground, -p5.width/3, 0, p5.height*6, p5.height); // position the background
		p5.monsterdraw(); 
		p5.cameraview(); 
		p5.drawSprites();
		p5.camera.on();

	};
	
	p5.cameraview = () => {	
		p5.camera.position.x = magicX;
		if ( p5.mouseX > 200 && p5.mouseX < 800 || p5.mouseX == 0){
			fastmove = false;
			if( p5.camera.position.x < monster.position.x) {
				moveright = true;
				magicX += 3; // move sprite
			}
		} 
		else if ( p5.mouseX > 800){
			fastmove = true;
			if( p5.camera.position.x <monster.position.x) {
				magicX += 5; //move sprite
			}
		} 
		else if ( p5.mouseX < 200){
			fastmove = false;
			if( p5.camera.position.x > p5.mouseX){
				magicX -= 3; //move sprite
			}	
		} 
	};
	
	p5.monsterdraw = () => {	
		// -------- creating Monster -------		
		if(p5.mouseX == 0){
			monster.changeAnimation("right");
			//unflip 
			monster.mirrorX(1);
			if( fastmove == true){ 
				monster.velocity.x = 4.1;
			} else {
				monster.velocity.x = 2.3;
			}	
		}
		//if mouse is to the left
		else if(p5.camera.mouseX < monster.position.x - 10) {
			monster.changeAnimation("right");
			//flip horizontally
			monster.mirrorX(-1);
			//negative x velocity: move left
			monster.velocity.x = -3;	
		} else if(p5.camera.mouseX > monster.position.x + 10){
			monster.changeAnimation("right");
			//unflip 
			monster.mirrorX(1);
			if( fastmove == true){ 
				monster.velocity.x = 4.1;
			} else {
				monster.velocity.x = 2.3;
			}
		} else {
			//if close to the mouse, don't move
			monster.changeAnimation("floating");
			monster.velocity.x = 0;
		}
	};
};



module.exports= laMonster;