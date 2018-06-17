//$.getScript("https://unpkg.com/scrollreveal/dist/scrollreveal.min.js", function() {
$.getScript("../assets/scrollreveal-master/dist/scrollreveal.min.js", function() {
    
    var config = {
          viewFactor : 0.15,
          duration   : 800,
          distance   : "0px",
          scale      : 0.8,
        }

    window.sr = new ScrollReveal(config)
    
//    window.sr = ScrollReveal();
//    sr.reveal('.shirt');
    
////    duration: 500;
////    delay: 10;
//    sr.reveal('.reviews',{ duration: 2000, delay: 500 }, 50);
    
    var crown = document.querySelector(".popularShirt")
      var demo  = document.querySelector(".shirt")

      window.addEventListener( "scroll", scrollBrain, false )

      var body = document.body,
          html = document.documentElement;

      var height = Math.max( body.scrollHeight, body.offsetHeight,
                             html.clientHeight, html.scrollHeight, html.offsetHeight )

      function scrollBrain(){

        if ( window.pageYOffset >= demo.offsetTop + 64 ){
          return crown.classList.add("visible")
        }
        if ( crown.classList.contains("visible") ){
          return crown.classList.remove("visible")
        }
        if ( window.pageYOffset >= 0.85 * ( height - window.clientHeight ) ) {
          _gaq.push([ '_trackEvent', 'Behavior', 'Scroll', 'Viewed the entire page.'])
        }
      }
    
});


$(document).ready(function () {
    $('#main').fadeIn(1000).removeClass('hidden');
    
    
    var content = document.querySelector("div.content").offsetTop;
    window.onscroll = function() {
      if (window.pageYOffset > 0) {
        var opac = (window.pageYOffset / content);
        document.getElementsByClassName("bg")[0].style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(../Photos/city-street-background.jpg) no-repeat";
        document.getElementsByClassName("bg")[0].style.backgroundSize = "100%";
      }
    }
    
    
});

//var d = document.getElementById("something");
