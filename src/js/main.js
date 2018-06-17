
//Target html elements so the class of hide can be added on play
var header = document.querySelector('.header');
var container = document.querySelector('.container');
var myp5 = "hello";
var myp52;
// var sketch ;  //I currently have a variable named sketch that changes the contents of the draw function in p5. Is this the best strategy? or should I be using namespacing to create multiple sketches and then importing them. 




//plyr bare minimum setup code
document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

//plyr triggered when video starts
player.on('playing', event => {
    header.classList.add('hide'); //shrink the header on large screens 
    container.classList.add('hide'); //Move the video so it is spaced correctly on large screens

  });

// //Watch time in video and trigger events
player.on('timeupdate', event => {
  const instance = event.detail.plyr;
  if(instance.currentTime>2 && instance.currentTime<5){

    console.log("more than three, less than 5");
     var  myp5 = new p5(sketch);
     function removeCanvas(){
  myp5.remove();
  console.log("remove canvas")

};


setTimeout(removeCanvas, 1000);

}

    if(instance.currentTime>5){
      console.log("more than 5");
      myp52 = new p5(sketch2);
    }
//     if(instance.currentTime>7){
//      console.log("more than 5");
//       var myp53 = new p5(sketch3);
//     }
  });
});



// var  myp5 = new p5(sketch);



