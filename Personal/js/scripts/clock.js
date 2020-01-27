var clock;
//CSS Variables

let cw1 = document.querySelector("#cw1").style;
let dawnSky = document.querySelector(".sky-dawn").style;
let daySky = document.querySelector(".sky-day").style;
let hills = document.querySelector(".hills").style;
let do2 = document.querySelector("#app").style; //For to-do list which is not apart of clock.

//Multiple trees, using forEach(); to address them all.
let trees = document.querySelectorAll(".trees");

function Clock(el) {
    this.container = el;
}

Clock.prototype.start = function() {
    var date = new Date(),
        func = this.tick.bind(this);
        var hours = date.getHours();
        var minutes = date.getMinutes();

    this.container.innerHTML = hours + ':' + minutes;

    this.container.addEventListener("oAnimationIteration", func, false);
    this.container.addEventListener("MSAnimationIteration", func, false);
    this.container.addEventListener("webkitAnimationIteration", func, false);
    this.container.addEventListener("mozAnimationIteration", func, false);
    this.container.addEventListener("animationiteration", func, false);


};

Clock.prototype.tick = function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours > 12){
      var hours = hours - 12;
      var ap = "p";
    }else if (hours == 12) {
      var ap = "p";
    }else if (hours == 24) {
      var hours = hours - 12;
      var ap = "a";
    }else {
      var ap = "a";
    }
    this.container.innerHTML = hours + ':' + minutes + ap;

};

clock = new Clock(document.getElementById('clock'));
clock.start();

function animateClock(){
  const dawn = '#78d';
  const day = '#1bf';
  const dusk = '#036';

  const mood = new Date();
  //const hour = mood.getHours();
  //const minute = mood.getMinutes();
  const second = mood.getSeconds();

  if(second > 5){
    cw1.background = dawn;
    dawnSky.opacity = 1;
    daySky.opacity = 1;
    hills.fill ='#c66';
    do2.background = dawn;

    trees.forEach(function(tree, ind) {
      tree.style.fill = dawn;
    });
  } else if(second > 10) {
    cw1.background = day;
    dawnSky.opacity = 0;
    daySky.opacity = 1;
    hills.fill ='#db9';
    do2.background = day;

    trees.forEach(function(tree, ind) {
      tree.style.fill = day;
    });
  } else if (second > 16) {
    cw1.background = dusk;
    daySky.opacity = 0;
    hills.fill ='#0be';
    do2.background = dusk;

    trees.forEach(function(tree, ind) {
      tree.style.fill = dusk;
    });
  }
}

animateClock();
