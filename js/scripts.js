$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.logo-nav').addClass("sticky");
        }
        else{
            $('.logo-nav').removeClass("sticky");
        }
    });

    $('.carousel').bxSlider({
      minSlides: 1,
      maxSlides: 3,
      slideWidth: 370,
      slideMargin: 10,
      nextText: " ",
      prevText: " ",
    });

    // $('.news-slider').bxSlider({
    //     pagerCustom: '#news-pager',
    //     controls: false,
    //     captions: true,
    // });
     var $j = jQuery.noConflict();

var realSlider= $j("ul#bxslider").bxSlider({
      speed:1000,
      pager:false,
      nextText:'',
      prevText:'',
      infiniteLoop:false,
      hideControlOnEnd:true,
      controls:false,
      captions:true,
      auto:true,
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        changeRealThumb(realThumbSlider,newIndex);
      }

    });

    var realThumbSlider=$j("ul#bxslider-pager").bxSlider({
      minSlides: 4,
      maxSlides: 4,
      slideWidth: 156,
      slideMargin: 12,
      moveSlides: 1,
      pager:false,
      speed:1000,
      infiniteLoop:false,
      hideControlOnEnd:true,
      nextText:'<span></span>',
      prevText:'<span></span>',
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        /*$j("#sliderThumbReal ul .active").removeClass("active");
        $slideElement.addClass("active"); */

      }
    });

    linkRealSliders(realSlider,realThumbSlider);

    if($j("#bxslider-pager li").length<5){
      $j("#bxslider-pager .bx-next").hide();
    }

    // sincronizza sliders realizzazioni
    function linkRealSliders(bigS,thumbS){

      $j("ul#bxslider-pager").on("click","a",function(event){
        event.preventDefault();
        var newIndex=$j(this).parent().attr("data-slideIndex");
            bigS.goToSlide(newIndex);
      });
    }

    //slider!=$thumbSlider. slider is the realslider
    function changeRealThumb(slider,newIndex){

      var $thumbS=$j("#bxslider-pager");
      $thumbS.find('.active').removeClass("active");
      $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");

      if(slider.getSlideCount()-newIndex>=4)slider.goToSlide(newIndex);
      else slider.goToSlide(slider.getSlideCount()-4);

    }


    $('.mobile-slider').bxSlider({
        mode: 'horizontal',
        captions: true,
        controls: false,
        pager: false,
        adaptiveHeight:true,
        auto:true,
        speed:500

    });

     $('input').iCheck({
        checkboxClass: 'icheckbox_square-red',
        radioClass: 'iradio_square-red',
        increaseArea: '20%' // optional
    });

     // detect if mobile browser. regex -> http://detectmobilebrowsers.com
    var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

    if (isMobile) {



    }
    else {
        $('#fullpage').fullpage({
            // anchors: ['firstPage'],
            // sectionsColor: ['#4A6FB1'],
            navigation: false,
            autoScrolling: false,
            css3: true,
            fitToSection: false,
            scrollingSpeed: 1000,
            lockAnchors: false,
            // afterRender: function () {
            //     setInterval(function () {
            //         $.fn.fullpage.moveSlideRight();
            //     }, 3000);
            // }
        });
    }

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
