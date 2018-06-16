//$.getScript("https://unpkg.com/scrollreveal/dist/scrollreveal.min.js", function() {
//  
//    
//    window.sr = ScrollReveal();
//    sr.reveal('.popularShirt',{ duration: 2000, delay: 500 }, 50);
////    duration: 500;
////    delay: 10;
//    sr.reveal('.reviews',{ duration: 2000, delay: 500 }, 50);
//    
//    
//});


$(document).ready(function () {
    $('#main').fadeIn(1000).removeClass('hidden');
    
    
    var content = document.querySelector("div.content").offsetTop;
    window.onscroll = function() {
      if (window.pageYOffset > 0) {
        var opac = (window.pageYOffset / content);
        document.getElementsByClassName("bg")[0].style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(../Photos/graffiti_wall.jpg) no-repeat";
        document.getElementsByClassName("bg")[0].style.backgroundSize = "100%";
      }
    }
    
    
});

//var d = document.getElementById("something");
