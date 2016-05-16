'use strict';

var count = true;

function reset(){
  count = true;
  $("#containerRight").show();
  $("#containerLeft").show();
  $("#containerBot").show();
  $("#containerTop").show();
  topToHome();
}

function topToHome(){
    var elem = document.getElementById("center");
    var rect = elem.getBoundingClientRect();
    var posy = rect.top;
    var posx = rect.left;
    var id = setInterval(frame, 4);
    function frame() {
            if(posy <  0){
              posy = posy + 10
            elem.style.top = posy ;
        }
        if(posx < 711){
          posx = posx + 10
          elem.style.left = posx;
        }
      }
  }


function homeToTop(){
  if(count){
    var elem = document.getElementById("center");
    var rect = elem.getBoundingClientRect();

    var posy = 0;
    var posx = 910;
    var id = setInterval(frame, 4);
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
    count = false;
}

function animateToTop(){
  if(count){
    $("#containerRight").toggle();
    $("#containerLeft").toggle();
    $("#containerBot").toggle();
    homeToTop();
  }
}

function animateToTopFB(){
  if(count){
  $("#containerRight").toggle();
  $("#containerLeft").toggle();
  $("#containerTop").toggle();
  homeToTop();
  var elem = document.getElementById("containerBot");
  var rect = elem.getBoundingClientRect();
  console.log(rect.top);
  console.log(rect.left);
  var posy = rect.top;
  var id = setInterval(frame, 4);
  function frame() {
          if(posy > 90){
            posy = posy-20;
          elem.style.top = posy;
      }
    }
  }
}

function animateToTopFR(){
  if(count){
  $("#containerTop").toggle();
  $("#containerLeft").toggle();
  $("#containerBot").toggle();
homeToTop();
  var elem = document.getElementById("containerRight");
  var rect = elem.getBoundingClientRect();
  var posy = rect.top;
  var posx = rect.left;
  var id = setInterval(frame, 4);
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
}

function animateToTopFL(){
  if(count){
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
      posy = posy - 12
    elem.style.top = posy ;
  }
  if(posx < 460){
    posx = posx + 17
    elem.style.left = posx;
  }
  }
}
}
