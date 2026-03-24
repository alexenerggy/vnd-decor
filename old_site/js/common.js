if (screen.width >= 1200) {
    var s=skrollr.init({forceHeight:!1})
}




new WOW().init();


    

//menuscroll
$(function () {
    $("a.scr[href*=#]:not([href=#])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html,body").animate({
                scrollTop: e.offset().top -50
            }, "slow"), !1
        }
    })
});
//menu animate
var a=$(".head").height();
var t = $("nav");
$(window).scroll(function() {
            if ($(this).scrollTop() > a && t.hasClass("hiden")) {
                t.removeClass("hiden").addClass("shown");
            } else if ($(this).scrollTop() <= a && t.hasClass("shown")) {
                t.removeClass("shown").addClass("hiden");
            }
});
//menu adaptiv

$(".menu").click(function(){
    $(this).toggleClass("mshow");

});
$(".menu li a").click(function(){
    $(".menu").toggleClass("mshow");

});




$('.karusel').owlCarousel({
    nav:true,
    navText:"",
    loop:true,
    items: 4,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1,
            margin: 10,
        },
        768:{
            items:2,
        },
        992:{
            margin: 10,
            items:3,
        }
    }
});

//fancy

 $(".mosaicflow a").fancybox({
        padding    : 0,
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
        helpers: {
             overlay: {
                 locked: !1
             }
        }
	});

$("a.btn").click(function(){
$("#forma").val($(this).data("name"));
}).fancybox({
        padding    : 0,
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
        helpers: {
             overlay: {
                 locked: !1
             }
        }
	});
//mask
jQuery(function ($) {
    $("input[type='tel']").mask("+7 (999) 999 9999");
    
});



//form
//antispam
$('form').append("<input type='hidden' name='antibot' value='1'>");
//form

/*   $(".form").submit(function () {
       $.ajax({
           type: "POST",
           url: "send.php",
           data: $(this).serialize()
       }).done(function () {
                      e();
yaCounterxxxxxxxx.reachGoal('assd')
       });
       return false;
   });




 function e() {
     
     $.fancybox.open([{
         href: "#thanks"
        }], {
         padding: 0,
         helpers: {
             overlay: {
                 locked: !1
             }
         }
     });
$("input[type=text], input[type=tel], textarea").val("");
};*/


