/*-----------------------------------------------------------------------------------
    Template Name: Restly - IT Solutions & Technology HTML Template
    Template URI: https://webtend.net/demo/html/restly/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    01. Header
    02. Dropdown menu
    03. Submenu
    04. Search Box
    05. Video Popup
    06. Product Image Popup
    07. Main Slider
    08. Product Gallery
    09. Product Navs
    10. Scroll to Top
    11. Client Logo
    12. Gallery Three
    13. Testimonial One
    14. Testimonial Two
    15. Testimonial Three
    16. Testimonial Four
    17. Testimonial Five
    18. Blog Carousel
    19. Services Slider
    20. Actions Slider
    21. Sellers Slider
    22. Collection Category
    23. CountDown
    24. Fact Counter
    25. Gallery Filtering
    26. Collection Filtering
    27. WOW Animation
    28. OnePage Nav Scroll
    29. Pricing Tab Switch
    30. Preloader
    ## Service Box
    ## Mobile Screen Popup
    ## Mobile Screen Slider
    ## Testimonial Seven
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // 01. Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // 02. Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // 03. Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
        
        // 04. Search Box
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
        
        // Hide Box Search WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}
        
        
        // 05. Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        } 
        
        
        // 06. Product Image Popup
        $('.product-image-preview').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
        // 07. Main Slider
        if ($('.main-slider-wrap').length) {
            $('.main-slider-wrap').slick({
                infinite: true,
                autoplay: true,
                arrows: true,
                pauseOnHover: false,
                autoplaySpeed: 700,
                prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
            });
        }

        
        // 08. Product Gallery
        if ($('.product-gallery').length) {
            $('.product-gallery').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                arrows: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.product-thumb',
            });
        } 
        
        // 09. Product Navs
        if ($('.product-thumb').length) {
            $('.product-thumb').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: true,
                asNavFor: '.product-gallery',
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 4,
                        }
                    }
                ]
            });
        } 
        
        // 10. Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }

        // 11. Client Logo
        if ($('.logo-carousel-wrap').length) {
            $('.logo-carousel-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
        } 
        
        
    
        
   
      
        // 25. Gallery Filtering
        $(".portfolio-filter li").on('click', function () {
            $(".portfolio-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $(".portfolio-wrap").isotope({
                itemSelector: '.item',
                filter: selector,
            });

        });
        
        
        // 26. Collection Filtering
        $(".collection-filter li").on('click', function () {
            $(".collection-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $('.collection-active').imagesLoaded(function () {
                $(".collection-active").isotope({
                    itemSelector: '.item',
                    filter: selector,
                });
            });

        });
        
        
        // 27. WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
         
        // 28. OnePage Nav Scroll
        $(".onepage a").on('click', function(e){
            e.preventDefault();
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html").animate({
                scrollTop : position
            },1000);
        });
             
        
        
        // ## Service Box Active
        $(".service-box.style-two").hover(function(){
            $(".service-box.style-two").removeClass("active");
            $(this).addClass("active");
        });
        
        
        // ## Mobile Screen Popup Gallery
        $('.mobile-screen-item a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
       
        
    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // 30. Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();

        // 25. Gallery Filtering
       if ($('.portfolio-wrap').length) {
            $(".portfolio-wrap").isotope({
                itemSelector: '.item',
            });
        };
        
        // 26. Collection Filtering
       if ($('.collection-active').length) {
            $(".collection-active").isotope({
                itemSelector: '.item',
            });
        };
        
        
    });

})(window.jQuery);
