'use strict';


function animateToTop(){
  var elem = document.getElementById("containerTop");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
 console.log(posy);
  var id = setInterval(frame, .0001);
  function frame() {
    if (posy == 200) {
        clearInterval(id);
      } else {
          if(posy > 100){
          elem.style.top = posy-- ;
        }
      }
}
}
