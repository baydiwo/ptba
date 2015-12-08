$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage'],
        sectionsColor: ['#4A6FB1'],
        autoScrolling: false,
        css3: true,
        fitToSection: false
    });
    $('ul.sf-menu').superfish();

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
    setTimeout("$('.accordion .pane').slideToggle('slow');", 1000);
    $(".accordion h3").click(function () {
        $(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
        $(this).toggleClass("current");
        $(this).siblings("h3").removeClass("current");
    });
});

new WOW().init();

function init() {
    alert("The width of the document is " + document.width + " pixels.");
}
