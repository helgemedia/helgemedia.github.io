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
//Loads on document ready
$(document).ready(function () {
    /* Animsition call*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });

});

//Email Adress Anti-Spam var

var first = "info";
var last = "helge.media";