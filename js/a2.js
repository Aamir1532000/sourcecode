var button = document.getElementById("image");
button.onclick = function (){
    if (image.className == "open"){
        
        image.className = "";
    }
    else{
      
        image.className = "open";
    }
};