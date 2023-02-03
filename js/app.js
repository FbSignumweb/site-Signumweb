(function ($) {
    "use strict";
    /* ---------------------------------------------
    Navigation menu
    --------------------------------------------- */
    // dropdown for mobile
    $(document).ready(function () {
        checkWidth(true);
        $(window).resize(function () {
            checkWidth(false);
        });
    });

    function checkWidth(init) {
        // If browser resized, check width again 
        if ($(window).width() <= 991) {
            $('.dropdown-submenu a').on("click", function (e) {
                $(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
            });
        }
    }

    function navMenu() {

        // main menu toggleer icon (Mobile site only)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('offcanvas--open');
        });
        // main menu toggleer icon 
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // Navbar moved up
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky--moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky--moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky--transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky--transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky--on");
            } else {
                $stickyNav.removeClass("navbar-sticky--on");
            }

        });
    }
    navMenu();
    /* ---------------------------------------------
        Sticky Sidebar
        --------------------------------------------- */
    function stickyBlockArea() {

        var stickyBlock = $(".sticky-block");
        if (stickyBlock.length > 0) {
            var position = stickyBlock.position();
            var stickyElements = $(".sticky-elements");
            var objectlast = $(".stickyBlockEndPoint");
            var lHeight = objectlast.position();
            $(window).on('scroll load', function () {

                var windowposition = $(window).scrollTop();

                var objHeight = (lHeight.top - parseInt(objectlast.height(), 10));

                if (windowposition >= position.top && objHeight >= windowposition) {
                    stickyElements.addClass("sticky-elements--on");
                } else {
                    stickyElements.removeClass("sticky-elements--on");
                }
            });
        }
    }
    stickyBlockArea();

    /* ---------------------------------------------
    smooth Scroll
    --------------------------------------------- */
    function smoothScroll() {
        $('.navbar .nav-item .nav-link, .smooth-scroll  a').on('click', function (event) {
            var $anchor = $(this);
            var headerH = '5';
            $('.header').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        $.extend($.easing, {
            easeInOutExpo: function (t, e, i, n, s) {
                return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
            },
        });
    }
    smoothScroll();

    /* ---------------------------------------------
    reveal
    --------------------------------------------- */
    function reveal() {

        window.sr = ScrollReveal();
        sr.reveal('.reveal', {
            duration: 1000,
            delay: 0,
            scale: 1,
            opacity: .2,
            easing: 'ease-in-out',
        });
    }

    reveal();







    /* ---------------------------------------------
    Language dropbown
    --------------------------------------------- 
    function languagedropbown() {
        var $landDropdown = $('.lang-dropdown');

        $(".lang-selector__button").on('click', function (e) {
            $landDropdown.slideToggle("fast");
            e.stopPropagation();
        });
        $(".lang-dropdown__item").on('click', function (e) {
            $landDropdown.hide();
            e.stopPropagation();
        });
        $("body").on('click', function () {
            $landDropdown.hide();
        });
    }
    languagedropbown();*/
    /* ---------------------------------------------
    Language dropbown
    --------------------------------------------- */

    /* ---------------------------------------------
     Language dropbown page-home 
     --------------------------------------------- */

    // mostra / esconde gif
    function hide(ct) {
        (ct === 'ct1') ? null : $('#ct1').hide("fast");
        (ct === 'ct2') ? null : $('#ct2').hide("fast");
        (ct === 'ct3') ? null : $('#ct3').hide("fast");
        (ct === 'ct4') ? null : $('#ct4').hide("fast");
        (ct === 'ct5') ? null : $('#ct5').hide("fast");
        (ct === 'ct6') ? null : $('#ct6').hide("fast");
        (ct === 'ct7') ? null : $('#ct7').hide("fast");
        (ct === 'ct8') ? null : $('#ct8').hide("fast");
        (ct === 'ct9') ? null : $('#ct9').hide("fast");
        (ct === 'ct10') ? null : $('#ct10').hide("fast");
        (ct === 'ct11') ? null : $('#ct11').hide("fast");
    }

    
    /* ---------------------------------------------
    Click do botão
    --------------------------------------------- */

    

    // $("#btn1").click(function () {
    //     hide($('#ct1')[0].id);
    //     $('#ct1').slideToggle("fast");
    // });

    // $("#btn2").click(function () {
    //     hide($('#ct2')[0].id);
    //     $('#ct2').slideToggle("fast");
    // });

    // $("#btn3").click(function () {
    //     hide($('#ct3')[0].id);
    //     $('#ct3').slideToggle("fast");
    // });

    // $("#btn4").click(function () {
    //     hide($('#ct4')[0].id);
    //     $('#ct4').slideToggle("fast");
    // });

    // $("#btn5").click(function () {
    //     hide($('#ct5')[0].id);
    //     $('#ct5').slideToggle("fast");
    // });

    // $("#btn6").click(function () {
    //     hide($('#ct6')[0].id);
    //     $('#ct6').slideToggle("fast");
    // });

    // $("#btn7").click(function () {
    //     hide($('#ct7')[0].id);
    //     $('#ct7').slideToggle("fast");
    // });

    // $("#btn8").click(function () {
    //     hide($('#ct8')[0].id);
    //     $('#ct8').slideToggle("fast");
    // });

    // $("#btn9").click(function () {
    //     hide($('#ct9')[0].id);
    //     $('#ct9').slideToggle("fast");
    // });

    // $("#btn10").click(function () {
    //     hide($('#ct10')[0].id);
    //     $('#ct10').slideToggle("fast");
    // });

    /* ---------------------------------------------
    End Click do botão
    --------------------------------------------- */

    // clicar fora esconde
    // $("body").on('click', function () {
    //     $ct4.hide();
    // });

    /* ---------------------------------------------
   Language dropbown page-home 
   --------------------------------------------- */


    /*----------------------------------
        background image holder
    -----------------------------------*/
    function backgroundHolder() {
        $(".background-image-holder").each(function () {
            var thesrc = $(this).attr('src');
            $(this).parent().css("background-image", "url(" + thesrc + ")");
            $(this).parent().css("background-repeat", "no-repeat");
            $(this).hide();
        });

    }
    backgroundHolder();

    /* ---------------------------------------------
    Lightobx
    --------------------------------------------- */
    function lightBox() {
        $('.lightbox').venobox();
    }
    lightBox();

    /* ---------------------------------------------
    homepage-1 Features slider
    --------------------------------------------- */
    function featuresSlider1() {
        var $swipeTabsContainer = $('.swipe-tabs'),
            $swipeTabs = $('.swipe-tab'),
            $swipeTabsContentContainer = $('.swipe-tabs-container'),
            currentIndex = 0,
            activeTabClassName = 'active-tab';

        $swipeTabsContainer.on('init', function (event, slick) {
            $swipeTabsContentContainer.removeClass('invisible');
            $swipeTabsContainer.removeClass('invisible');

            currentIndex = slick.getCurrent();
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
        });

        $swipeTabsContainer.slick({
            //slidesToShow: 3.25,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            swipeToSlide: true,
            touchThreshold: 10
        });

        $swipeTabsContentContainer.slick({
            asNavFor: $swipeTabsContainer,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            swipeToSlide: true,
            draggable: false,
            touchThreshold: 10
        });


        $swipeTabs.on('click', function (event) {
            // gets index of clicked tab
            currentIndex = $(this).data('slick-index');
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
            $swipeTabsContainer.slick('slickGoTo', currentIndex);
            $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
        });

        //initializes slick navigation tabs swipe handler
        $swipeTabsContentContainer.on('swipe', function (event, slick, direction) {
            currentIndex = $(this).slick('slickCurrentSlide');
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
        });
    }
    featuresSlider1();

    /* ---------------------------------------------
    Features homepage-2 slider
    --------------------------------------------- */
    function featuresSlider2() {
        $(".features--slider-2 .slider-tabs").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.features--slider-2 .slider-contents',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            ]

        });
        $(".features--slider-2 .slider-contents").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            asNavFor: '.features--slider-2 .slider-tabs',
            prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-triangle-left-18 icon-color-white"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon icon-triangle-right-17 icon-color-white"></i></button>',
        });

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $(e.target).find('.slider').each(function () {
                $(this).slick('setPosition');
            })
        })
    }
    featuresSlider2();

    /* ---------------------------------------------
    Pricing data update
    --------------------------------------------- */
    function pricingData() {
        var cardValue = $('.card__value');
        var cardValueFocused = $('.card__value--focused');

        $(".pricing-tab .btn").on('click', function () {
            $('.pricing-tab .btn').removeClass('btn--bg-primary');
            $(this).addClass("btn--bg-primary");
        });
        $(".data-type-monthly").on('click', function () {
            cardValue.fadeIn("fast");
            cardValueFocused.css('display', 'none');
        });
        $(".data-type-yearly").on('click', function () {
            cardValue.css('display', 'none');
            cardValueFocused.fadeIn("fast");
        });
    }
    pricingData();

    /* ---------------------------------------------
    testimonial carousel
    --------------------------------------------- */
    function testimonialCarousel1() {

        $(".testimonial-carousel .testimonial-content").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.testimonial-carousel .testimonial-image',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,

        });
        $(".testimonial-carousel .testimonial-image").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            asNavFor: '.testimonial-carousel .testimonial-content',
            dots: true,
            customPaging: function (slider, i) {
                return '<button class="slick-dots--long" id=' + i + "></button>";
            },

            arrows: false,
        });

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $(e.target).find('.slider').each(function () {
                $(this).slick('setPosition');
            })
        });
    }
    testimonialCarousel1();

    /* ---------------------------------------------
    Fixed Footer
    --------------------------------------------- */
    function csselem() {
        jQuery(".height-emulator").css({
            height: jQuery(".footer--fixed").outerHeight(true)
        });
    }
    csselem();
    var jQuerywindow = jQuery(window);
    jQuerywindow.resize(function () {
        csselem();
    });
    /* ---------------------------------------------
    CountDown
    --------------------------------------------- */
    function countDown() {
        var second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        var xPdate = $("#date").data("date");
        var countDown = new Date(xPdate).getTime(),
            x = setInterval(function () {
                var now = new Date().getTime(),
                    distance = countDown - now;
                var cDays = document.getElementById("days");
                if (cDays) {
                    (document.getElementById("days").innerText = addZero(Math.floor(distance / day)),
                        (document.getElementById("hours").innerText = addZero(Math.floor(
                            (distance % day) / hour
                        ), 2))),
                        (document.getElementById("minutes").innerText = addZero(Math.floor(
                            (distance % hour) / minute
                        ), 2)),
                        (document.getElementById("seconds").innerText = addZero(Math.floor(
                            (distance % minute) / second
                        ), 2));
                }
            }, second);
    }

    function addZero(your_number, length) {
        var num = '' + your_number;
        while (num.length < length) {
            num = '0' + num;
        }
        return num;
    }
    countDown();
    /* ---------------------------------------------
    Preloaded
    --------------------------------------------- */
    $(window).on("load", function () {
        $('.preloader-wapper').addClass('loaded');
        if ($('.preloader-wapper').hasClass('loaded')) {
            $('.preloader-main').delay(1200).queue(function () {
                $(this).remove();
            });
        }
    });

})(jQuery);

function ShowHide(ct){
    
    const idIframe = document.querySelector("#iframe-"+ct);
    hide(ct);
    if(idIframe==null) createIframe(ct);
    $('#'+ct).slideToggle("fast");
    
    
    
}
function createIframe(ct){
    var urls = [
        "https://www.youtube.com/embed/Df6Jd2lTJmI?playlist=Df6Jd2lTJmI", //0
        "https://www.youtube.com/embed/QhcNGjNqbyI?playlist=QhcNGjNqbyI", //1
        "https://www.youtube.com/embed/x1NSmjXeK_8?playlist=x1NSmjXeK_8", //2 
        "https://www.youtube.com/embed/kbhxW_SK9pw?playlist=kbhxW_SK9pw", //3 
        "https://www.youtube.com/embed/GFxKX20qpFU?playlist=GFxKX20qpFU", //4 
        "https://www.youtube.com/embed/Bg2J4vyhrKU?playlist=Bg2J4vyhrKU", //5 
        "https://www.youtube.com/embed/pLpWGSBvo4g?playlist=pLpWGSBvo4g", //6 
        "https://www.youtube.com/embed/sY0Am15b-tg?playlist=sY0Am15b-tg", //7 
        "https://www.youtube.com/embed/53ekt4DKqSc?playlist=53ekt4DKqSc", //8 
        "https://www.youtube.com/embed/IzJfj-gLKQs?playlist=IzJfj-gLKQs", //9 
        "https://www.youtube.com/embed/rt_g14yrPv8?playlist=rt_g14yrPv8", //10 
        "https://www.youtube.com/embed/w2g08y7s__8?playlist=w2g08y7s__8", //11 
        "https://www.youtube.com/embed/mWRjHXywP1o?playlist=mWRjHXywP1o", //12
        "https://www.youtube.com/embed/UYGelRsvoBo?playlist=UYGelRsvoBo", //13
        "https://www.youtube.com/embed/BfVLomIIjao?playlist=BfVLomIIjao", //14
        "https://www.youtube.com/embed/g0LerTbtYHI?playlist=g0LerTbtYHI", //15
        "https://www.youtube.com/embed/RKoXTll3z3Q?playlist=RKoXTll3z3Q", //16
        "https://www.youtube.com/embed/BRRiP-Ezpu4?playlist=BRRiP-Ezpu4", //17
        "https://www.youtube.com/embed/11xBt1gAD4Y?playlist=11xBt1gAD4Y", //18
        "https://www.youtube.com/embed/TeAZdMIB1dI?playlist=TeAZdMIB1dI", //19
        "https://www.youtube.com/embed/lQCgGq7jM-8?playlist=lQCgGq7jM-8", //20
        "https://www.youtube.com/embed/2VIUpe8Ac1I?playlist=2VIUpe8Ac1I", //21
        "https://www.youtube.com/embed/T4kcwfVqK0I?playlist=T4kcwfVqK0I", //22
        "https://www.youtube.com/embed/rU48v2wpRpE?playlist=rU48v2wpRpE", //23
        "https://www.youtube.com/embed/E-s47Kho1KE?playlist=E-s47Kho1KE", //24
        "https://www.youtube.com/embed/FlARFxwmYWM?playlist=FlARFxwmYWM", //25
        "https://www.youtube.com/embed/BRRiP-Ezpu4?playlist=BRRiP-Ezpu4", //26
        "https://www.youtube.com/embed/GXnBU21ikCo?playlist=GXnBU21ikCo", //27
        "https://www.youtube.com/embed/T8MaHsonHao?playlist=T8MaHsonHao", //28
        "https://www.youtube.com/embed/gVI-zevImKc?playlist=gVI-zevImKc" //29
        
    
        ];
        
    var iframe = document.createElement("iframe");
    
    //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      //$(iframe).css("display", "none");
      //alert(ct);
      iframe.setAttribute("id", "iframe-"+ct);
      iframe.setAttribute("width", "150");
      iframe.setAttribute("height", "150");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "autoplay");
      num = getNumberIframe(ct);
      iframe.setAttribute("src", urls[num]+"&loop=1&autoplay=1&mute=1");
      iframe.style.display="inline-block";
      document.getElementById("iframeInterprete-"+ct).appendChild(iframe);
      
      /*$(iframe).attr("id", "iframe-"+ct);
      $(iframe).attr("width", "150");
      $(iframe).attr("height", "150");
      $(iframe).attr("frameborder", "0");
      $(iframe).attr("allow", "autoplay");
       num = getNumberIframe(ct);
      $(iframe).attr("src", urls[num]+"&loop=1&autoplay=1&mute=1");
      $(iframe).css("display", "inline-block");
      $("#iframeInterprete-"+ct).append(iframe);*/
      //alert(urls[num]+"&loop=1&autoplay=1&mute=1");
      
      
}
function getNumberIframe(ct){
    let number;
    switch(ct){
        //case 'ct28':
        case 'ct1':
            number=0;
        break;
        //case 'ct11':
        case 'ct2':
            number=1;
        break;
        //case 'ct12':
        case 'ct3':
            number=2;
        break;
        //case 'ct13':
        case 'ct4':
            number=3;
        break;    
        //case 'ct14':
        case 'ct5':
            number=4;
        break;
        //case 'ct29':
        case 'ct6':
            number=5;
        break;
        //case 'ct30':
        case 'ct7':
            number=6;
        break;
        case 'ct8':
            number=7;
        break;
        //case 'ct5':
        case 'ct9':
            number=8;
        break;
        case 'ct10':
            number=9;
        break;
        case 'ct11':
            number=10;
        break;
        case 'ct12':
            number=11;
        break;
        case 'ct13':
            number=12;
        break;
        case 'ct14':
            number=13;
        break;
        case 'ct15':
            number=14;
        break;
        case 'ct16':
            number=15;
        break;
        case 'ct17':
            number=16;
        break;
        case 'ct18':
            number=17;
        break;
        case 'ct19':
            number=18;
        break;
        case 'ct20':
            number=19;
        break;
        case 'ct21':
            number=20;
        break;
        case 'ct22':
            number=21;
        break;
        case 'ct23':
            number=22;
        break;
        case 'ct24':
            number=23;
        break;
        case 'ct25':
            number=24;
        break;
        case 'ct26':
            number=25;
        break;
        case 'ct27':
            number=26;
        break;
        case 'ct28':
            number=27;
        break;
        case 'ct29':
            number=28;
        break;
        case 'ct30':
            number=29;
        break;

    }
    return number;

}

function hide(ct) {
    (ct === 'ct1') ? null : $('#ct1').hide("fast");
    (ct === 'ct2') ? null : $('#ct2').hide("fast");
    (ct === 'ct3') ? null : $('#ct3').hide("fast");
    (ct === 'ct4') ? null : $('#ct4').hide("fast");
    (ct === 'ct5') ? null : $('#ct5').hide("fast");
    (ct === 'ct6') ? null : $('#ct6').hide("fast");
    (ct === 'ct7') ? null : $('#ct7').hide("fast");
    (ct === 'ct8') ? null : $('#ct8').hide("fast");
    (ct === 'ct9') ? null : $('#ct9').hide("fast");
    (ct === 'ct10') ? null : $('#ct10').hide("fast");
    (ct === 'ct11') ? null : $('#ct11').hide("fast");
    (ct === 'ct12') ? null : $('#ct12').hide("fast");
    (ct === 'ct13') ? null : $('#ct13').hide("fast");
    (ct === 'ct14') ? null : $('#ct14').hide("fast");
    (ct === 'ct15') ? null : $('#ct15').hide("fast");
    (ct === 'ct16') ? null : $('#ct16').hide("fast");
    (ct === 'ct17') ? null : $('#ct17').hide("fast");
    (ct === 'ct18') ? null : $('#ct18').hide("fast");
    (ct === 'ct19') ? null : $('#ct19').hide("fast");
    (ct === 'ct20') ? null : $('#ct20').hide("fast");
    (ct === 'ct21') ? null : $('#ct21').hide("fast");
    (ct === 'ct22') ? null : $('#ct22').hide("fast");
    (ct === 'ct23') ? null : $('#ct23').hide("fast");
    (ct === 'ct24') ? null : $('#ct24').hide("fast");
    (ct === 'ct25') ? null : $('#ct25').hide("fast");
    (ct === 'ct26') ? null : $('#ct26').hide("fast");
    (ct === 'ct26') ? null : $('#ct26').hide("fast");
    (ct === 'ct27') ? null : $('#ct27').hide("fast");
    (ct === 'ct28') ? null : $('#ct28').hide("fast");
    (ct === 'ct29') ? null : $('#ct29').hide("fast");
    (ct === 'ct30') ? null : $('#ct30').hide("fast");
    (ct === 'ct31') ? null : $('#ct31').hide("fast");
    (ct === 'ct32') ? null : $('#ct32').hide("fast");




}

