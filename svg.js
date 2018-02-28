var svg = document.getElementById("drawing");
var clear = document.getElementById("clear");

var prevX;
var prevY;
var drawLine = 0;

var draw = function(e){

    var xcor = e.offsetX;
    var ycor = e.offsetY;

    //connect the circles if it is not the first cirle
    if(drawLine != 0){
	var line = document.createElementNS('http://www.w3.org/2000/svg','line');
	line.setAttribute('x1',prevX);
	line.setAttribute('y1',prevY);
	line.setAttribute('x2',xcor);
	line.setAttribute('y2',ycor);
	line.setAttribute('stroke', 'black');
	svg.appendChild(line);
    }

    //draw the circle
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute('cx',xcor);
    c.setAttribute('cy',ycor);
    c.setAttribute('r','20');
    c.setAttribute('fill','red');
    c.setAttribute('stroke','black');
    svg.appendChild(c);

    //store the coordinates of the previous circle for connecting
    prevX = xcor;
    prevY = ycor;
    drawLine = 1;
}

var clearing = function(){
    svg.innerHTML = "";
    drawLine = 0;
}

svg.addEventListener('click',draw);
clear.addEventListener('click',clearing);
