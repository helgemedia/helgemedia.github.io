/**
 * Transitions on the team page
 */

$(document).ready(function () {

    $("#img1").hover(function () {
        $("#bio2").fadeIn(200);
    });
    $("#img2").hover(function () {
        $("#bio1").fadeIn(200);
    });
    $("body,#teamheader").not("#img1,#img2,#bio1,#bio2").hover(function () {
        $("#bio2,#bio1").fadeOut(200);
    });
});