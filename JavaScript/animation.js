//$.getScript("https://unpkg.com/scrollreveal/dist/scrollreveal.min.js", function() {
$.getScript("../assets/scrollreveal-master/dist/scrollreveal.min.js", function() {
    
    var config = {
          viewFactor : 0.15,
          duration   : 500,
          distance   : "0px",
          scale      : 0.8,
    }
    
    

    window.sr = new ScrollReveal(config)
//    var navbar = document.querySelector("nav.navbar").offsetTop;
    window.sr = ScrollReveal({ reset: false });
    sr.reveal('.cool',{ duration: 1000, delay: 50}, 50);
    sr.reveal('.popular',{ duration: 1000, delay: 50}, 50);
    
//    duration: 500;
//    delay: 10;
    sr.reveal('.reviews',{ duration: 2000, delay: 50}, 50);
    
//    var crown = document.querySelector(".popularShirt")
//      var demo  = document.querySelector(".shirt")
//
//      window.addEventListener( "scroll", scrollBrain, false )
//
//      var body = document.body,
//          html = document.documentElement;
//
//      var height = Math.max( body.scrollHeight, body.offsetHeight,
//                             html.clientHeight, html.scrollHeight, html.offsetHeight )
//
//      function scrollBrain(){
//
//        if ( window.pageYOffset >= demo.offsetTop + 64 ){
//          return crown.classList.add("visible")
//        }
//        if ( crown.classList.contains("visible") ){
//          return crown.classList.remove("visible")
//        }
//        if ( window.pageYOffset >= 0.85 * ( height - window.clientHeight ) ) {
//          _gaq.push([ '_trackEvent', 'Behavior', 'Scroll', 'Viewed the entire page.'])
//        }
//      }
    
});
 
//$(window).scroll(function() {
//  $(".slideanim").each(function(){
//    var pos = $(this).offset().top;
//
//    var winTop = $(window).scrollTop();
//    if (pos < winTop + 600) {
//      $(this).addClass("slide");
//    }
//  });
//});

$(document).ready(function () {
    $('#main').fadeIn(1000).removeClass('hidden');
    
    
    var content = document.querySelector("div.content").offsetTop;
    
    window.onscroll = function() {
        if (window.pageYOffset > 0) {
            var opac = (window.pageYOffset / content);
            document.getElementsByClassName("bg")[0].style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(../Photos/BackgroundCompletelyErased2.png) no-repeat";
            document.getElementsByClassName("bg")[0].style.backgroundSize = "100%";

        }
        var navbar = document.querySelector("nav.navbar").offsetTop;
        if ($(window).scrollTop() >= 50) {
            document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgba(0,0,0,0.5)";
            } 
        else {
            document.getElementsByClassName("navbar")[0].style.backgroundColor ='transparent';
        }
          
    }
    
    
    
});

//$(window).scroll(function () {
//    var navbar = document.querySelector("nav.navbar").offsetTop;
//    if ($(window).scrollTop() >= 50) {
//        $('navbar').css('background','red');
//        } else {
//        $('navbar').css('background','transparent');
//    }
//});
//
//$(document).ready(function () {
//    $('.navbar').fadeIn(1000).removeClass('hidden');
//    
//    
//    var content = 
//    window.onscroll = function() {
//      if (window.pageYOffset > 0) {
//        var opac = (window.pageYOffset / content);
//        document.getElementsByClassName("navbar")[0].style.backgroundColor = "(rgba(0,0,0,0.5)"
////        document.getElementsByClassName("bg")[0].style.backgroundSize = "100%";
//      }
//    }
//    
//    
//});


//var d = document.getElementById("something");
