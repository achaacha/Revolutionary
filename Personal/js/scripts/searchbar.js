const sbar = document.querySelector("#searchbar");
const sbutton = document.querySelector("#searchbutton");
const link = "https://www.google.com/search?q=";

searchbar.addEventListener("submit", search);
function search (){
  const text = document.querySelector("#searchtext").value;
  window.open(link + text);
  return false;
}
