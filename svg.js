var svg = document.getElementById("drawing");
var clear = document.getElementById("clear");

var prevX;
var prevY;
var drawLine = 0;

var addCircle = function(e){

    var xcor = e.offsetX;
    var ycor = e.offsetY;

    if(drawLine != 0){
	var line = document.createElementNS('http://www.w3.org/2000/svg','line');
	line.setAttribute('x1',prevX);
	line.setAttribute('y1',prevY);
	line.setAttribute('x2',xcor);
	line.setAttribute('y2',ycor);
	line.setAttribute('stroke', 'black');
	svg.appendChild(line);
    }
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    //Once created, you can modify it with setAttribute calls
    c.setAttribute('cx',xcor);
    c.setAttribute('cy',ycor);
    c.setAttribute('r','20');
    c.setAttribute('fill','red');
    c.setAttribute('stroke','black');
    c.setAttribute('stroke-width','2');
    //To add the element to your svg container, use the appendChild function
    svg.appendChild(c);
    prevX = xcor;
    prevY = ycor;
    drawLine = 1;
}

var clearing = function(){
    svg.innerHTML = "";
    drawLine = 0;
}

svg.addEventListener('click',addCircle);
clear.addEventListener('click',clearing);
