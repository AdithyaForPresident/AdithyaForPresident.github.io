'use strict';

var count = true;

function reset(){
  count = true;
  topToHome();
  $("#containerRight").show();
  $("#containerLeft").show();
  $("#containerBot").show();
  $("#containerTop").show();

  var elem = document.getElementById("containerBot");
  elem.style.left = 8;
  elem.style.top = 686.75;

  var elem2 = document.getElementById("containerLeft");
  elem2.style.left = 8;
  elem2.style.top = 383.5625 ;

  var elem2 = document.getElementById("containerRight");
  elem2.style.left = 8;
  elem2.style.top = 383.5625 ;

  var meetAdithhya = document.getElementById('meetAdi');
  meetAdithhya.style.left = '100%';

  var platform = document.getElementById('platform');
  platform.style.left = '100%';


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
  flyIn("meetAdi", "containerText1");
}

function animateToTopFB(){
  if(count){
  $("#containerRight").toggle();
  $("#containerLeft").toggle();
  $("#containerTop").toggle();
  homeToTop();

  var elem = document.getElementById("containerBot");
  var rect = elem.getBoundingClientRect();

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
  flyIn("platform", "containerText2");
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

function flyIn(id,cont){
  var elem = document.getElementById(id);
  var posx = 100;
  var tops = document.getElementById(cont)
  var posy = 50;
  var id = setInterval(frame, 1);
  function frame() {
    if(posx > 29){
      posx = posx - 2
      elem.style.left = posx + "%";
    }
    if(posy > 35){
      posy = posy - 2
      tops.style.top = posy + "%";
    }
}

}
