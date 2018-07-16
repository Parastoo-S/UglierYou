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
//    sr.reveal('.reviews',{ duration: 1500, delay: 50}, 50);
//    
//    
//});
// 
//$(document).ready(function () {
//    $('#main').fadeIn(1000).removeClass('hidden');
//    
//    
//    var content = document.querySelector("div.section1").offsetTop;
//    
//    window.onscroll = function() {
//        if (window.pageYOffset > 0) {
//            var opac = (window.pageYOffset / content);
//            document.getElementsByClassName("section1-container")[0].style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(../Photos/DesignsAddedV3.png) no-repeat";
//            document.getElementsByClassName("section1-container")[0].style.backgroundSize = "cover";
//
//        }
//        
////        var navbar = document.querySelector("nav.navbar").offsetTop;
////        if ($(window).scrollTop() >= 50) {
////            document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgba(0, 32, 64, 1)";
////            } 
////        else {
////            document.getElementsByClassName("navbar")[0].style.backgroundColor ='transparent';
////        }
//          
//    }
//    
//    
//    
//});



$.getScript("../assets/fabric.min.js", function() {
    var canvas = this.__canvas = new fabric.Canvas('c');
    var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];
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
            alert("Please select a file.");
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
    
    
     document.getElementById("clr").addEventListener("click", function(){
        if (confirm("Clear Canvas?")) {
            canvas.clear();
        }
    });
    

    document.getElementById("addtxt").addEventListener("click", function(){
        
        var text = document.getElementById("txtArea").value;
        if(text !== ""){
            var textbox = new fabric.Textbox(text);
            canvas.centerObject(textbox);
            canvas.add(textbox).setActiveObject(textbox);
            canvas.renderAll();
            document.getElementById("txtArea").value = "";
        }
        
        else{
            alert("Please enter a text.");
        }
        
    });
    
    document.getElementById("white").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/white.png')";
    });
    
    document.getElementById("blue").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/blue.png')";
    });
    
    document.getElementById("purple").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/purple.png')";
    });
    
    document.getElementById("pink").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/pink.png')";
    });

    document.getElementById("yellow").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/yellow.png')";
    });
    
    document.getElementById("green").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/green.png')";
    });

    document.getElementById("lightGreen").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/lightGreen.png')";
    });
    
    document.getElementById("darkBlue").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/darkBlue.png')";
    });

    document.getElementById("red").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/red.png')";
    });

    document.getElementById("black").addEventListener("click", function(){
        document.getElementById("canvasBG").style.backgroundImage = "url('/Photos/shirts/black.png')";
    });
    

    $.getScript("/assets/fontfaceobserver-master/fontfaceobserver-master/fontfaceobserver.js", function() {
        document.getElementById('font-family').onchange = function() {
          if (this.value !== 'Times New Roman') {
            loadAndUse(this.value);
          } else {
            canvas.getActiveObject().set("fontFamily", this.value);
            canvas.requestRenderAll();
          }
        };

        function loadAndUse(font) {
          var myfont = new FontFaceObserver(font)
          myfont.load().then(function() {
              // when font is loaded, use it.
              canvas.getActiveObject().set("fontFamily", font);
              canvas.requestRenderAll();
            }).catch(function(e) {
              console.log(e)
              alert('Please select a Text.');
            });
        }
    });
    
    document.getElementById("font-col-w").addEventListener("click", function(){
        
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.getActiveObject().setColor("#ffffff");
            canvas.requestRenderAll();
        }
        else{
            alert("Please select an Text");
        }
            
        
    });

    document.getElementById("font-col-b").addEventListener("click", function(){
        
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.getActiveObject().setColor("#000000");
            canvas.requestRenderAll();
        }
        else{
            alert("Please select an Text");
        }

    });
    

}); 






