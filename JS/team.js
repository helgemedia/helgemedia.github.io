/**
 * Transitions on the team page
 */

$(document).ready(function () {
    $("#img1").hover(function () {
        $("#bio2").fadeIn(200);
    }, function () {
        $("#bio2").fadeOut(200);
    });
    $("#img2").hover(function () {
        $("#bio1").fadeIn(200);
    }, function () {
        $("#bio1").fadeOut(200);
    });
});