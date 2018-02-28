var svg = document.getElementById("drawing");
var clear = document.getElementById("clear");

var addCircle = function(e){
    
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    //Once created, you can modify it with setAttribute calls
    c.setAttribute("cx",e.offsetX);
    c.setAttribute("cy",e.offsetY);
    c.setAttribute("r","20");
    c.setAttribute("fill","red");
    c.setAttribute("stroke","black");
    c.setAttribute("stroke-width","2");
    //To add the element to your svg container, use the appendChild function
    svg = document.getElementById("drawing");
    svg.appendChild(c);
}

var clearing = function(){
    svg.innerHTML = "";
}

svg.addEventListener('click',addCircle);
clear.addEventListener('click',clearing);
