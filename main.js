'use strict';



function animateToTop(){
    $("containerRight").toggle();
  var elem = document.getElementById("containerTop");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var id = setInterval(frame, .00001);
  function frame() {
          if(posy > 100){
          elem.style.top = posy-- ;
      }
}
}

function animateToTopFB(){
  var elem = document.getElementById("containerBot");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var id = setInterval(frame, .0001);
  function frame() {
          if(posy > 90){
          elem.style.top = posy-- ;
      }
}
}

function animateToTopFR(){
  var elem = document.getElementById("containerRight");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var posx = rect.left;
 console.log(posx);
  var id = setInterval(frame, .0001);
  function frame() {
          if(posy > 90  ){
          elem.style.top = posy-- ;
      }
      if(posx > 0){
        elem.style.left = posx--;
      }
}
}
