/**
 * Transitions on the team page
 */

$(document).ready(function () {

    $("#img1,#magsymbol1").on('click', function () {
        $("#bio2").toggleClass("hover");
    });
    $("#img2,#magsymbol2").on('click', function () {
        $("#bio1").toggleClass("hover");
    });
    $("#img3,#bio5,#magsymbol3").on('click', function () {
        $("#bio5").toggleClass("hover");
    });

    $(".magsymbol").hover(function () {
        $(this).addClass("animated infinite pulse");
    }, function () {
        $(this).removeClass("animated infinite pulse");
    });
});