const canvas = document.getElementById("linecapcanvas");
var context = canvas.getContext("2d");

//line Caps =>context lineCaps;

//but default;
//round
//squre

//fist Line

context.beginPath();
context.lineCap = "round";
context.strokeStyle = "red";
context.lineWidth = 10;
context.moveTo(100, 100);
context.lineTo(300, 100);
context.stroke();

//Second Line;
context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 10;
context.moveTo(100, 125);
context.lineTo(300, 125);
context.lineCap = "square";
context.stroke();

//Third Line;
context.beginPath();
context.strokeStyle = "green";
context.lineWidth = 10;
context.moveTo(100, 150);
context.lineTo(300, 150);
context.lineCap = "round";
context.stroke();
