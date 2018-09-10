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
			forumLinkDiv = s.createDiv('<a href="https://discourse.processing.org/"  target="_blank">Forum-Spanish</a>');
		}else if( window.videoLanguage=="fr"){
			forumLinkDiv = s.createDiv('<a href="https://discourse.processing.org/"  target="_blank">Forum-French</a>');
		}else{
			forumLinkDiv = s.createDiv('<a href="https://discourse.processing.org/"  target="_blank">Forum</a>');
		};
		forumLinkDiv.parent('video-overlay');
		forumLinkDiv.addClass('sketch-forum-link focused');
	}




	s.draw  = () => {
		s.clear();
		if(window.videoCurrentTimeGlobal>112){
			if(notdisplayed){
				forumLinkDiv.removeClass('focused');
				if( window.videoLanguage=="es"){
					communityLinkDiv = s.createDiv('<a href="http://p5js.org/community/"  target="_blank">Community-spanish</a>');
				}else if( window.videoLanguage=="fr"){
					communityLinkDiv = s.createDiv('<a href="http://p5js.org/community/"  target="_blank">Community-french</a>');
				}else{
					communityLinkDiv = s.createDiv('<a href="http://p5js.org/community/"  target="_blank">Community</a>');
				};
				
				communityLinkDiv.parent('video-overlay');
				communityLinkDiv.addClass('sketch-community-link focused');
				s.frameRate(0);
				notdisplayed=false
			}
		}
		if(window.videoCurrentTimeGlobal>114){
			opacity--;
		}
	}


	s.mouseMoved  = () => {
		s.stroke(237, 30, 97, opacity);
		s.strokeWeight(4);
		s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
		s.pmouseX=s.mouseX;
		s.pmouseY=s.mouseY;
	}

}

module.exports= forumLink;