//$.getScript("../assets/scrollreveal-master/dist/scrollreveal.min.js", function() {
//    
//    var config = {
//          viewFactor : 0.15,
//          duration   : 500,
//          distance   : "0px",
//          scale      : 0.8,
//    }
//    
//    
//
//    window.sr = new ScrollReveal(config)
//    window.sr = ScrollReveal({ reset: false });
//    sr.reveal('.cool',{ duration: 1000, delay: 50}, 50);
//    sr.reveal('.popular',{ duration: 1000, delay: 50}, 50);
//    sr.reveal('.reviews',{ duration: 2000, delay: 50}, 50);
//    
//    
//});
// 
//$(document).ready(function () {
//    $('#main').fadeIn(1000).removeClass('hidden');
//    
//    
//    var content = document.querySelector("div.content").offsetTop;
//    
//    window.onscroll = function() {
//        if (window.pageYOffset > 0) {
//            var opac = (window.pageYOffset / content);
//            document.getElementsByClassName("bg")[0].style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(../Photos/BackgroundCompletelyErased2.png) no-repeat";
//            document.getElementsByClassName("bg")[0].style.backgroundSize = "100%";
//
//        }
//        var navbar = document.querySelector("nav.navbar").offsetTop;
//        if ($(window).scrollTop() >= 50) {
//            document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgba(0,0,0,0.5)";
//            } 
//        else {
//            document.getElementsByClassName("navbar")[0].style.backgroundColor ='transparent';
//        }
//          
//    }
//    
//    
//    
//});
//
//
//
//
//$(document).ready(function() {
//    // Add smooth scrolling to all links in navbar + footer link
//    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
//
//        // Make sure this.hash has a value before overriding default behavior
//        if (this.hash !== "") {
//
//            // Prevent default anchor click behavior
//            event.preventDefault();
//
//            // Store hash
//            var hash = this.hash;
//
//            // Using jQuery's animate() method to add smooth page scroll
//            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//            $('html, body').animate({
//                scrollTop: $(hash).offset().top
//            }, 900, function() {
//
//                // Add hash (#) to URL when done scrolling (default click behavior)
//                window.location.hash = hash;
//            });
//        } // End if
//    });
//})

$.getScript("../assets/fabric.min.js", function() {
    var canvas = this.__canvas = new fabric.Canvas('c');
    
    var imgObj;
    document.getElementById('uploadedImg').onchange = function handleImage(e) {
        
//        canvas.setBackgroundImage("/photos/10TypesOfPeople.jpg");
        var reader = new FileReader();
          reader.onload = function (event){
            imgObj = new Image();
            imgObj.src = event.target.result;
//            imgObj.onload = function () {
//              var image = new fabric.Image(imgObj);
//            var center = {x:canvas.width / 2, y:canvas.height / 2};
//             
//            image.set({
//                originX: 'center',
//                originY:'center'
//            });
//            
//            if(image.width > canvas.width || image.height > canvas.height){
//                image.scaleToHeight(canvas.height);
//                image.scaleToWidth(canvas.weight);
//            }
//              canvas.centerObject(image);
//              canvas.add(image.scale(0.5));
//              canvas.renderAll();
//            }
          }
          reader.readAsDataURL(e.target.files[0]);
    }
    
    document.getElementById("use").addEventListener("click", function(){
        
            var image = new fabric.Image(imgObj);

        if(document.getElementById("uploadedImg").value != ""){
            canvas.centerObject(image);
            canvas.add(image.scale(0.5));
            canvas.renderAll;
            imgObj = null;
            document.getElementById("uploadedImg").value = "";

        }
        else{
            alert("Please select an object");
        }
        
    });
    
    
    document.getElementById("del").addEventListener("click", function(){
        var activeObject = canvas.getActiveObject()
        if (activeObject) {
            canvas.remove(activeObject);
//            document.getElementById("uploadedImg").value = "";
        }
        else{
            alert("Please select an object");
        }
            
        
    });
    
    

    document.getElementById("addtxt").addEventListener("click", function(){
        
        var text = document.getElementById("txtArea").value;
        var textbox = new fabric.Textbox(text);
        canvas.centerObject(textbox);
        canvas.add(textbox).setActiveObject(textbox);
        canvas.renderAll();
        document.getElementById("txtArea").value = "";
        
    });
    
    document.getElementById("white").addEventListener("click", function(){
        document.getElementById("c").style.backgroundImage = "url('/Photos/shirts/white.png')";
    });
    
    document.getElementById("blue").addEventListener("click", function(){
        document.getElementById("c").style.backgroundImage = "url('/Photos/shirts/blue.png')";
    });
    
    document.getElementById("purple").addEventListener("click", function(){
        document.getElementById("c").style.backgroundImage = "url('/Photos/shirts/purple.png')";
    });
    
    document.getElementById("pink").addEventListener("click", function(){
        document.getElementById("c").style.backgroundImage = "url('/Photos/shirts/pink.png')";
    });

}); 


 



