var css = document.querySelector("h3");
var colr1 = document.querySelector(".color1");
var colr2 = document.querySelector(".color2");
var body=document.getElementById("gradient");
function setGradient(){
     body.style.background=" linear-gradient(to right,"+colr1.value+","+colr2.value+")";
    
    css.textContent=body.style.background+";";
}


colr1.addEventListener("input",setGradient);
colr2.addEventListener("input", setGradient);
