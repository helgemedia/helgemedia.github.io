/**
 * Created by julian on 16.05.17.
 * Transitions Ref Page
 */

$(document).ready(function () {

    $("#refimg1,#refd1,#refblock1").on('click', function () {
        $("#refd1").toggleClass("hover");
    });

    $("#refimg2,#refd2,#refblock2").on('click', function () {
        $("#refd2").toggleClass("hover");
    });

    $("#refimg3,#refd3,#refblock3").on('click', function () {
        $("#refd3").toggleClass("hover");
    });

    $("#refimg1,#refimg2,#refimg3").hover(function () {
        $(this).addClass("animated infinite pulse2");
    }, function () {
        $(this).removeClass("animated infinite pulse2");
    });

});