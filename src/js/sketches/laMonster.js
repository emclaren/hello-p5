
var laMonster= function(p5){
	
	let monsterlooBackground;
	let monsterloo;
	let fastmove = false;
	let loneTree;



	
	let standmonster1;
	let standmonster2;
	let standmonster3;
	
	let moveright = false;
	let moveleft = true;
	
	let magicX = 300;
	let monster;
	
	let SCENE_W = 3000;
	let SCENE_H = 600;
	
	let collisionTest = false;
	
	let resize=true;
	p5.preload = () => {
		monsterlooBackground = p5.loadImage("https://emclaren.github.io/hello-p5/dist/assets/img/MonsterLoo_Background.png"); 
	}
	
	
	
	p5.setup = () => {
		
		p5.pixelDensity(1);
		p5.windowWidth = window.innerWidth;
		p5.windowHeight = p5.windowWidth  * 0.562;
		p5.canvas= p5.createCanvas(p5.windowWidth/2.8, p5.windowHeight/2.5);
		p5.canvas.parent('video-overlay');
		p5.canvas.class('la-monster-canvas');
		// p5.background('#000032');
		monster = p5.createSprite( p5.width, p5.height/1.25, 40, 40);
		// monster = p5.createSprite(200, 490, 120, 179);
		monster.addAnimation("floating", "https://emclaren.github.io/hello-p5/dist/assets/img/BS_1.png", "https://emclaren.github.io/hello-p5/dist/assets/img/BS_5.png");
		monster.addAnimation("right", "https://emclaren.github.io/hello-p5/dist/assets/img/BR_1.png", "https://emclaren.github.io/hello-p5/dist/assets/img/BR_9.png");
		monster.addAnimation("left", "https://emclaren.github.io/hello-p5/dist/assets/img/BL_1.png", "https://emclaren.github.io/hello-p5/dist/assets/img/BL_9.png");
		monster.depth = 5;
		monster.scale = 0.25;
		
		loneTree = p5.createSprite(800, p5.height/1.2);
		loneTree.addAnimation("normal", "https://emclaren.github.io/hello-p5/dist/assets/img/foregroundTree.png");
		loneTree.depth = 1;
		
	
		
		standmonster1 = p5.createSprite(p5.width*1.8, p5.height/1.2);  
		standmonster1.addAnimation("normal", "https://emclaren.github.io/hello-p5/dist/assets/img/EM_2.png");
		standmonster1.setCollider("rectangle", 0,0, 170,280);
		standmonster1.debug = collisionTest;
		standmonster1.depth = 3;
		standmonster1.scale = 0.25;
		
		
		let magicX = p5.width/2;

				
	}
	
	
	
	
	p5.draw = () => {
		// p5.image(monsterlooBackground, -2, 0, monsterlooBackground.width, p5.height );  
		// magicX = p5.mouseX;

		// if(window.videoCurrentTimeGlobal<2.75){
		p5.image(monsterlooBackground, -2, 0, monsterlooBackground.width, p5.height); 
		// }
		
		if(window.videoCurrentTimeGlobal>2.75){
			p5.clear()

		}

		p5.monsterdraw();
		p5.cameraview();
		p5.drawSprites();
		p5.camera.on();
		console.log(monster.position.x )
	}
	


	p5.cameraview = () => {	
		
		
		p5.camera.position.x = magicX;
		
		// monster.velocity.x = (p5.camera.mouseX-monster.position.x)/20;
		
		// p5.camera.zoom = 1;
		
		if ( p5.mouseX > 700 && p5.mouseX < 800){
			
			fastmove = false;
			
			if( p5.camera.position.x < 3000) {
				moveright = true;
				magicX += 2;
			
			}
			
		} 
		else if ( p5.mouseX > 800){
			
			fastmove = true;
			
				if( p5.camera.position.x < 3000) {
					// moveright = true;
					magicX += 4;
			}
			
			
		} 
		else if ( p5.mouseX < 200){
			
				// magicX -= 40;
			fastmove = false;
			
				if( p5.camera.position.x > 500){
					// magicX = 500;
					magicX -= 5;
				}
			
		} 
		// else{
			
		// 	moveright = false;
		// 	moveleft = false;
		// } 	
	}
	
	p5.monsterdraw = () => {	

		// -------- creating Monster -------		
		//if mouse is to the left
		if(p5.camera.mouseX < monster.position.x - 10) {
			monster.changeAnimation("right");
			//flip horizontally
			monster.mirrorX(-1);
			//negative x velocity: move left
			monster.velocity.x = -3;
			console.log("one side")
			
		} else if(p5.camera.mouseX > monster.position.x + 10){
			console.log("twoside")
			monster.changeAnimation("right");
			//unflip 
			monster.mirrorX(1);
			if( fastmove == true){ 
				monster.velocity.x = 4.1;
			} else {
				monster.velocity.x = 2.3;
			}
			
		} else {
			console.log("three side")
			//if close to the mouse, don't move
			monster.changeAnimation("floating");
			monster.velocity.x = 0;
		}
		
		
	}	
	
}



module.exports= laMonster;