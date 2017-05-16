/**
 * Created by julian on 16.05.17.
 * Transitions Ref Page
 */

$(document).ready(function () {

    $("#img1,#magsymbol1").on('click', function () {
        $("#bio2").toggleClass("hover");
    });

    $("#refimg1,#refimg2,#refimg3").hover(function () {
        $(this).addClass("animated infinite pulse2");
    }, function () {
        $(this).removeClass("animated infinite pulse2");
    });

});