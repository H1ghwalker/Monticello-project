$(document).ready(function () {
    $('.banner__slider').slick({
        dots: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        speed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        adaptiveHeight: true,
        drag: true,
        fade: true,
        responsive: [
            {
                breakpoint: 951,
                settings: {
                    dots:false
                }
            },
        ]

    });

    $('.news__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        infinite: true,
        speed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 951,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});

