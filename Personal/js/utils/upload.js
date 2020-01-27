const bg = document.querySelector('#uploadImage');
const wall = document.querySelector('body').style;
var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];

/* function ValidateSingleInput(oInput) {
    if (oInput.type == "file") {
        var sFileName = oInput.value;
         if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }

            if (!blnValid) {
                alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
        }
    }
    return true;
} */

bg.onchange = function(evt){
  var tgt = evt.target || window.event.srcElement,
  files = tgt.files;

  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = function () {
      localStorage['wallpaper'] = fr.result;
    }
    fr.readAsDataURL(files[0]);
  }
}

wall.backgroundImage = 'url(' + localStorage['wallpaper'] + ')';

bg.addEventListener('change', apply, true);
function apply(){
  location.reload();
};

// Check Function;
