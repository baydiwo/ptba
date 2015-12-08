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
            $(paneId).show('fast', function() {
                $(".accordion " + paneId).slideDown().addClass("opened");
            });
            console.log("true");
        }
        else if ( $(paneId).is(":visible") == false ) {
            console.log(ini);
            $(".accordion .pane").slideUp("fast").removeClass("opened");
            ini.show('fast',function() {
                $(".accordion " + paneId).slideDown().addClass("opened");
            });
        }
        else if ( $(".accordion .pane").is(":visible") == true ) {
            console.log("true");
            $(paneId).slideUp("fast");
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
