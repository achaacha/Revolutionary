const bvid = document.querySelector("#myVideo2");
const theUI = document.querySelector("#UIOverlay");

const aniUID = function(){
  theUI.style.top = '0%';
  theUI.style.transition = "cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s";
  bvid.style.clipPath = "inset(0vh 7.5vw 3.4vh 8vw)";
  bvid.style.transition = "cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s";
}


const aniUIH = function(){
  theUI.style.top = '-100%';
  theUI.style.transition = "cubic-bezier(0.6, -0.28, 0.735, 0.045) 1s";
  bvid.style.clipPath = "inset(0vh 7.5vw 99.5vh 8vw)";
  bvid.style.transition = "cubic-bezier(0.6, -0.28, 0.735, 0.045) 1s";
}

const displayUI = () => {
  aniUID();
  window.removeEventListener('click', displayUI);
  window.addEventListener('click', hideUI);
}

const hideUI = () => {
  aniUIH();
  window.removeEventListener('click', hideUI);
  window.addEventListener('click', displayUI);
}

window.addEventListener('click', displayUI);
