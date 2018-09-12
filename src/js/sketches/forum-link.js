/*********************
// Forum Link
// Description: Link to the Processing Forum & Community pages
// Credit: 
*********************/


const forumLink = (s) => {
	let notdisplayed = true;
	let forumLinkDiv;
	let communityLinkDiv;
	let opacity = 230;

	s.setup  = () => {
		s.pixelDensity(1);
		let windowWidth = window.innerWidth ;
		let windowHeight = windowWidth  * 0.562;
		s.canvas = s.createCanvas(windowWidth, windowHeight);
		s.canvas.parent('video-overlay');

		if( window.videoLanguage=="es"){
			forumLinkDiv = s.createDiv('<a href="https://discourse.processing.org/"  target="_blank"><div class="sketch-forum-link focused">Foros</div></a>');
		}else if( window.videoLanguage=="fr"){
			forumLinkDiv = s.createDiv('<a href="https://discourse.processing.org/"  target="_blank"><div class="sketch-forum-link focused">Forum</div></a>');
		}else{
			forumLinkDiv = s.createDiv('<a href="https://discourse.processing.org/"  target="_blank"><div class="sketch-forum-link focused">Forum</div></a>');
		};
		forumLinkDiv.parent('video-overlay');

	}




	s.draw  = () => {
		s.clear();
		if(window.videoCurrentTimeGlobal>113){
			if(notdisplayed){
				forumLinkDiv.removeClass('focused');
				if( window.videoLanguage=="es"){
					communityLinkDiv = s.createDiv('<a href="http://p5js.org/community/"  target="_blank"><div class="sketch-community-link focused">Comunidad</a>');
				}else if( window.videoLanguage=="fr"){
					communityLinkDiv = s.createDiv('<a href="http://p5js.org/community/"  target="_blank"><div class="sketch-community-link focused">Communauté</a>');
				}else{
					communityLinkDiv = s.createDiv('<a href="http://p5js.org/community/"  target="_blank"><div class="sketch-community-link focused">Community</a>');
				};
				
				communityLinkDiv.parent('video-overlay');

				s.frameRate(0);
				notdisplayed=false
			}
		}
		if(window.videoCurrentTimeGlobal>114){
			opacity--;
		}
	}


	// s.mouseMoved  = () => {
	// 	s.stroke(237, 30, 97, opacity);
	// 	s.strokeWeight(4);
	// 	s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
	// 	s.pmouseX=s.mouseX;
	// 	s.pmouseY=s.mouseY;
	// }

}

module.exports= forumLink;