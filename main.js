'use strict';

function homeToTop(){

    var elem = document.getElementById("center");
    var rect = elem.getBoundingClientRect();
    var posy = 0;
    var posx = 910;
    var id = setInterval(frame, 1);
    function frame() {
            if(posy > -350 ){
              posy = posy - 13
            elem.style.top = posy ;
        }
        if(posx > 250){
          posx = posx - 39
          elem.style.left = posx;
        }
  }
}

function animateToTop(){
    $("#containerRight").toggle();
    $("#containerLeft").toggle();
    $("#containerBot").toggle();
    homeToTop();
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
  homeToTop();
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
homeToTop();
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
  homeToTop();
  var elem = document.getElementById("containerLeft");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var posx = rect.left;
  var id = setInterval(frame, 1);
  function frame() {
    if(posy > 98  ){
      posy = posy - 13
    elem.style.top = posy ;
  }
  if(posx < 412){
    posx = posx + 13
    elem.style.left = posx;
  }
  }
}
