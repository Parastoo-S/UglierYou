
$.getScript("../assets/fabric.min.js", function() {
    var canvas = this.__canvas = new fabric.Canvas('c');
    var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];
    var imgObj;
    document.getElementById('uploadedImg').onchange = function handleImage(e) {
        
        var reader = new FileReader();
          reader.onload = function (event){
            imgObj = new Image();
            imgObj.src = event.target.result;
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






