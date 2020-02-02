const clockMAIN = document.getElementById('widget-wrap');
JSON.parse( localStorage.getItem("leftpos") );
JSON.parse( localStorage.getItem("toppos") );
var newL = localStorage.getItem("leftpos");
var newT = localStorage.getItem("toppos");
clockMAIN.style.top = newT + 'px';
clockMAIN.style.left = newL + 'px';

clockMAIN.onmousedown = function(event) {

 let shiftX = event.clientX - clockMAIN.getBoundingClientRect().left;
 let shiftY = event.clientY - clockMAIN.getBoundingClientRect().top;

 clockMAIN.style.position = 'absolute';
 clockMAIN.style.zIndex = 1000;

 moveAt(event.pageX, event.pageY);

 function moveAt(pageX, pageY) {
	 clockMAIN.style.left = pageX - shiftX + 'px';
	 clockMAIN.style.top = pageY - shiftY + 'px';
   localStorage.setItem("leftpos", pageX - shiftX);
   localStorage.setItem("toppos", pageY - shiftY);
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
