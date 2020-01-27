//Create new constructor
let posL = null;
let posT = null;

function makeid(length) {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function assignid() {
  if (posL == null && posT == null) {
    posL = makeid(6);
    posT = makeid(6);
  }
}

const clockMAIN = document.getElementById('widget-wrap');
JSON.parse( localStorage.getItem(posL) );
JSON.parse( localStorage.getItem(posT) );
var newL = localStorage.getItem(posL);
var newT = localStorage.getItem(posT);
clockMAIN.style.top = newT + 'px';
clockMAIN.style.left = newL + 'px';

clockMAIN.onmousedown = function(event) {

 let shiftX = event.clientX - clockMAIN.getBoundingClientRect().left;
 let shiftY = event.clientY - clockMAIN.getBoundingClientRect().top;

 clockMAIN.style.position = 'absolute';
 clockMAIN.style.zIndex = 1000;
 document.body.append(clockMAIN);

 moveAt(event.pageX, event.pageY);

 function moveAt(pageX, pageY) {
	 clockMAIN.style.left = pageX - shiftX + 'px';
	 clockMAIN.style.top = pageY - shiftY + 'px';
   localStorage.setItem(posL, pageX - shiftX);
   localStorage.setItem(posT, pageY - shiftY);
   assignid();
 }

 function onMouseMove(event) {
	 moveAt(event.pageX, event.pageY);
	 clockMAIN.hidden = true;
	 let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
	 clockMAIN.hidden = false;

	 if (!elemBelow) return;
 }

 document.addEventListener('mousemove', onMouseMove);

 clockMAIN.onmouseup = function() {
	 document.removeEventListener('mousemove', onMouseMove);
	 clockMAIN.onmouseup = null;
 };

};

//localStorage.removeItem("leftpos");
 //JSON.parse( localStorage.getItem("leftpos") );


clockMAIN.ondragstart = function() {
 return false;
};
