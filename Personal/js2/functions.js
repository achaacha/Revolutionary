/*-------------------------------------------------------------
|                    All functionalities that                  |
|                Are not related to animation                  |
|                      Go here in this                         |
|                      For organization                        |
--------------------------------------------------------------*/
const link = "https://www.google.com/search?q=";

const searchFunc = function(event){
  if (event.isComposing || event.keyCode === 13) {
    window.open(link + $('.searchTerm').value);
    return false;
  } else if (event.isComposing || event.keyCode === 27) {
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
}
