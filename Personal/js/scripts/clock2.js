//Variables
const clock = document.querySelector("#clock");
//CSS Variables

let cw1 = document.querySelector("#cw1").style;
let dawnSky = document.querySelector(".sky-dawn").style;
let daySky = document.querySelector(".sky-day").style;
let hills = document.querySelector(".hills").style;
let do2 = document.querySelector("#app").style; //For to-do list which is not apart of clock.

//Multiple trees, using forEach(); to address them all.
let trees = document.querySelectorAll(".trees");

document.addEventListener("DOMContentLoaded", function(event) {
  //Time funcationality
  setInterval(function(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }
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
    clock.textContent = hours + ":" + minutes + ap;
  });

  setInterval(function(){
    const dawn = '#78d';
    const day = '#1bf';
    const dusk = '#036';

    const mood = new Date();
    const hour = mood.getHours();
    const minute = mood.getMinutes();
    //const second = mood.getSeconds();

    if(hour > 5){
      cw1.background = dawn;
      dawnSky.opacity = 1;
      daySky.opacity = 1;
      hills.fill ='#c66';
      do2.background = dawn;

      trees.forEach(function(tree, ind) {
        tree.style.fill = dawn;
      });
    } else if(hour > 10) {
      cw1.background = day;
      dawnSky.opacity = 0;
      daySky.opacity = 1;
      hills.fill ='#db9';
      do2.background = day;

      trees.forEach(function(tree, ind) {
        tree.style.fill = day;
      });
    } else if (hour > 16) {
      cw1.background = dusk;
      daySky.opacity = 0;
      hills.fill ='#0be';
      do2.background = dusk;

      trees.forEach(function(tree, ind) {
        tree.style.fill = dusk;
      });
    }
  });
});
