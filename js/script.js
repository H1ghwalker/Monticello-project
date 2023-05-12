'use strict';

$(document).ready(function () {
    $(".active-link").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
    });
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 45) {
        $('.header').addClass('header-scroll');
    }
    else {
        $('.header').removeClass('header-scroll')
    }
});