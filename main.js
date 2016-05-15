'use strict';

function homeToTop(){

}

function animateToTop(){
    $("#containerRight").toggle();
    $("#containerLeft").toggle();
    $("#containerBot").toggle();
  var elem = document.getElementById("containerTop");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var id = setInterval(frame, 1);
  function frame() {
          if(posy > 90){
            posy = posy - 20
          elem.style.top =  posy;
      }
}
}

function animateToTopFB(){
  $("#containerRight").toggle();
  $("#containerLeft").toggle();
  $("#containerTop").toggle();
  var elem = document.getElementById("containerBot");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var id = setInterval(frame, 1);
  function frame() {
          if(posy > 90){
            posy = posy-20;
          elem.style.top = posy;
      }
}
}

function animateToTopFR(){
  $("#containerTop").toggle();
  $("#containerLeft").toggle();
  $("#containerBot").toggle();

  var elem = document.getElementById("containerRight");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var posx = rect.left;
  var id = setInterval(frame, 1);
  function frame() {
          if(posy > 80  ){
            posy = posy - 13
          elem.style.top = posy ;
      }
      if(posx > -420){
        posx = posx - 13
        elem.style.left = posx;
      }
}
}

function animateToTopFL(){
  $("#containerRight").toggle();
  $("#containerTop").toggle();
  $("#containerBot").toggle();
  var elem = document.getElementById("containerLeft");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var posx = rect.left;
  var id = setInterval(frame, 1);
  function frame() {
    if(posy > 93  ){
      posy = posy - 13
    elem.style.top = posy ;
  }
  if(posx < 412){
    posx = posx + 13
    elem.style.left = posx;
  }
  }
}
