/*-------------------------------------------------------------
|                    THE MOST FKIN BEAUTIFUL                  |
|                    THING I HAVE EVER SEEN                   |
|                         IN MY LIFE                          |
|                    THANK YOU DANC-SENPAI                    |
--------------------------------------------------------------*/

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// use as= $('#something').whatever();
// or  var item = $$('#something .item');

/*-------------------------------------------
|               Searchbar                    |
--------------------------------------------*/
/*---------
| Show     |
----------*/
const showSearch = function() {
  $('#all').style.opacity = "0";
  $('#search-wrap').style.opacity = "1";
  $('#search-wrap').style.zIndex = "6";
  $('.bigline').style.width = "100%";
  $('#minitext').style.transform = "translate(0, 0)";

  window.removeEventListener("keydown", keyPressSearch);
  $('#search-header').removeEventListener('click', showSearch);
  window.addEventListener("keydown", searchFunc);
  $('#searchclose').addEventListener('click', hideSearch);
}


const keyPressSearch = function(event) {
  $('#all').style.opacity = "0";
  $('#search-wrap').style.opacity = "1";
  $('#search-wrap').style.zIndex = "6";
  $('.bigline').style.width = "100%";
  $('#minitext').style.transform = "translate(0, 0)";

  $(".searchTerm").focus();
  window.removeEventListener("keydown", keyPressSearch);
  $('#search-header').removeEventListener('click', showSearch);
  window.addEventListener("keydown", searchFunc);
  $('#searchclose').addEventListener('click', hideSearch);
}

/*---------
| Hide     |
----------*/

const hideSearch = function(){
  $('#search-wrap').style.zIndex = "1";
  $('#all').style.opacity = "1";
  $('#search-wrap').style.opacity = "0";
  $('.bigline').style.width = "0";
  $('#minitext').style.transform = "translate(0, 20%)";

  $('#searchclose').removeEventListener('click', hideSearch);
  window.removeEventListener("keydown", searchFunc);
  window.addEventListener("keydown", keyPressSearch);
  $('#search-header').addEventListener('click', showSearch);
}

/*---------
| Listen   |
----------*/
$('#search-header').addEventListener('click', showSearch);
window.addEventListener("keydown", keyPressSearch);
/*-------------------------------------------
|           Expand Menu Animations           |
--------------------------------------------*/

/*---------
| Expand   |
----------*/
function expandMenu(){
  $('#matrix').style.opacity = "1";
  $('#menuwrap').style.marginLeft = "0";
  $('#menuwrap').style.width = "100vw";
  $('#menuicon').style.transform = "rotate(0.5turn)";
  $('#menuimg').style.left="0";
  $('#myVideo').style.filter = "contrast(200%) brightness(64%) saturate(200%) sepia(15%)";

  $('#menuimg').removeEventListener('click', expandMenu);
  $('#menuimg').addEventListener('click', hideMenu);
}


/*---------
|   Hide   |
----------*/
function hideMenu(){
  $('#matrix').style.opacity = "0";
  $('#menuwrap').style.marginLeft = "-315px";
  $('#menuwrap').style.width = "375px";
  $('#menuicon').style.transform = "rotate(0turn)";
  $('#menuimg').style.left="";
  $('#myVideo').style.filter = "";
  $('#menuimg').removeEventListener('click', hideMenu);
  $('#menuimg').addEventListener('click', expandMenu);
}

/*---------
| Listen   |
----------*/
$('#menuimg').addEventListener('click', expandMenu);
