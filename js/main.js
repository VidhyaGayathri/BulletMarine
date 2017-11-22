/**
* ---------------------------------------------------------------------------
Template Name: Construction HTML Responsive Template
Template URL: http://stormrecoveryservices.com/demo/construction
Author: princ-imran
Version: 1.0
* --------------------------------------------------------------------------- 
*/

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


/*---------------------------------------------------
            Owlcarousel SLIDER
---------------------------------------------------*/
        $(".slider").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            mouseDrag: false,
            touchDrag: false
        });

        $(".slider").on('translate.owl.carousel', function () {
            $('.slider-text h1').removeClass('fadeInUp animated').hide();
            $('.slider-text p').removeClass('fadeInUp animated').hide();
            $('.slide-btn').removeClass('fadeInUp animated').hide();
        });
        $(".slider").on('translated.owl.carousel', function () {
            $('.owl-item.active .slider-text h1').addClass('fadeInUp animated').show();
            $('.owl-item.active .slider-text p').addClass('fadeInUp animated').show();
            $('.owl-item.active .slide-btn').addClass('fadeInUp animated').show();
        });


        $(".service-slider").owlCarousel({
            items: 3,
            autoplay: true,
            margin: 30,
            mouseDrag: false,
            touchDrag: false,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        })

        $('.carousel-trigger .fa-angle-left').on('click', function () {
            $('.service-slider').trigger('prev.owl.carousel', [500]);
        });
        $('.carousel-trigger .fa-angle-right').on('click', function () {
            $('.service-slider').trigger('next.owl.carousel', [500]);
        });

        
        
        $(".portfolio-slider").owlCarousel({
            items: 3,
            autoplay: true,
            loop: true,
            margin: 30,
            mouseDrag: false,
            touchDrag: false,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        })

        $('.portfolio-trigger .fa-angle-left').on('click', function () {
            $('.portfolio-slider').trigger('prev.owl.carousel', [500]);
        });
        $('.portfolio-trigger .fa-angle-right').on('click', function () {
            $('.portfolio-slider').trigger('next.owl.carousel', [500]);
        });

        

        $(".testi-slider").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            smartSpeed: 500,
        });

        $('.testi-trigger .fa-angle-left').on('click', function () {
            $('.testi-slider').trigger('prev.owl.carousel', [500]);
        });
        $('.testi-trigger .fa-angle-right').on('click', function () {
            $('.testi-slider').trigger('next.owl.carousel', [500]);
        });


/*---------------------------------------------------
            Lightbox 
---------------------------------------------------*/
            
        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        
/*---------------------------------------------------
            This code is for Isotop mesonary
---------------------------------------------------*/
        
        var $portfolio = $('.portfolios');
        
        $portfolio.isotope({
            itemSelector: '.col-md-4',
            layoutMode: 'masonry',
            filter: '*',
            percentPosition: true,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });

        $('.portfolio-menu li').on('click', function () {
            $('.portfolio-menu li').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector,
            });
        }); 

/*---------------------------------------------------
            ScrollTop
---------------------------------------------------*/ 
                
        $('#scrollTop').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

/*---------------------------------------------------
            Slicknav
---------------------------------------------------*/
        
        $('#nav').slicknav({
            prependTo: ".responsive-menu-wrap"
        });

    });

    jQuery(window).load(function () {


    });

}(jQuery));