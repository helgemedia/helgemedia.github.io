/** Main Javascript File for helge.media **/

/* Toggle between adding and removing the "responsive" class to #mainmenu on click */

function respMenu() {
    var x = document.getElementById("mobilemenu");
    var y = document.getElementById("button1");
    if (x.className === "menuresponsive") {
        x.className += " responsive";
        y.className += " responsive";
    } else {
        x.className = "menuresponsive";
        y.className = "icon";
    }
}

$(document).ready(function(){
    $('.wrapper').fadeIn(1500); //FadeIn wrapper elements on load
});