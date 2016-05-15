'use strict';

$(function() {
  $(document).on("click",function (e) {
    if (e.target.id=="DivA") {
      $("#DivB").fadeToggle(200);
      e.stopPropagation();
      return false;
    }
    else if ($("#DivB").is(":visible")) {
      $("#DivB").fadeOut(200);
    }
  });
});



function animateToTop(){
  var elem = document.getElementById("containerTop");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
 console.log(posy);
  var id = setInterval(frame, .0001);
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
 console.log(posy);
  var id = setInterval(frame, .0001);
  function frame() {
          if(posy > 90){
          elem.style.top = posy-- ;
      }
}
}
