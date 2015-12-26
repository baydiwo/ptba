$(document).ready(function() {
    $('#fullpage').fullpage({
        // anchors: ['firstPage'],
        // sectionsColor: ['#4A6FB1'],
        navigation: false,
        autoScrolling: false,
        css3: true,
        fitToSection: false,
        scrollingSpeed: 1000,
        lockAnchors: false,
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.logo-nav').addClass("sticky");
        }
        else{
            $('.logo-nav').removeClass("sticky");
        }
    });

    $('.carousel').bxSlider({
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 370,
      slideMargin: 10,
      nextText: " ",
      prevText: " ",
    });

    $('.news-slider').bxSlider({
        pagerCustom: '#news-pager',
        controls: false,
        captions: true
    });
});

$(function () {
    //  Accordion Panels
    $(".accordion .pane").show();
    setTimeout("$('.accordion .pane').slideToggle('1');", 1);
    $(".accordion h3[id]").click(function () {
        var triggerId = this.id;
        var ini = $(this);
        var thenum = triggerId.replace( /^\D+/g, '');
        var widId = "#widget-"+thenum;
        var paneId = "#pane-"+thenum;

        if ( $(".accordion .pane").is(":visible") == false) {
            $(paneId).show(400, function() {
                $(".accordion " + paneId).slideDown().addClass("opened");
            });
            $(widId).css("height","auto");
            ini.css("line-height","13px");
            console.log("true");
        }
        else if ( $(paneId).is(":visible") == false ) {
            console.log(ini);
            $(".accordion .pane").slideUp(400).removeClass("opened");
            $(".accordion h3").css("line-height","13px");
            ini.show(400,function() {
                $(".accordion " + paneId).slideDown().addClass("opened");
                $(this).css("line-height","13px");
                $(widId).css("height","auto");
            });
        }
        else if ( $(".accordion .pane").is(":visible") == true ) {
            console.log("else 3");
            $(".accordion .pane").removeClass("opened");
            $(paneId).hide(400, function() {
               $(".accordion " + paneId).slideUp(400);
               $(widId).css("height","41px");
            });
            $(this).css("line-height","13px")
        }

        // console.log(widId+paneId+triggerId+thenum);
        return false;

        // $(this).each(function() {
        //     console.log( ": " + $( this.id ).text() );
        // });
        // if( $(".accordion .pane").is(":visible") == false ){
        //     console.log("false" + widId);



        //     // $(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
        //     // $(this).toggleClass("current");
        //     // $(this).parent().find(".pane").addClass("current");
        //     // $(this).siblings(".accordion h3").removeClass("current");

        // }
        // else if ( $(".accordion h3 , .accordion .pane").hasClass("current") ){
        //     $(this).parent().find(".pane").hide();
        //     $(this).parent().find("h3").removeClass("current");
        //     // $(".accordion .pane").hide();
        //     console.log("true" + widId);
        // }
        // else {
        //     console.log("else");
        //     $(".accordion h3").hasClass("current").removeClass("current");
        // }

        // return false;
    });
});

new WOW().init();

$(function(){
    $(".dropdown-menu > li > a.trigger").on("click",function(e){
        var current=$(this).next();
        var grandparent=$(this).parent().parent();
        if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
            $(this).toggleClass('right-caret left-caret');
        grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
        grandparent.find(".sub-menu:visible").not(current).hide();
        current.toggle();
        e.stopPropagation();
    });
    $(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
        var root=$(this).closest('.dropdown');
        root.find('.left-caret').toggleClass('right-caret left-caret');
        root.find('.sub-menu:visible').hide();
    });
});
