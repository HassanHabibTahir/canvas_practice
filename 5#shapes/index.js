const canvas = document.getElementById("shapes");
const context = canvas.getContext("2d");

//lineCap=butt|round|square;
//lineJoin=miter|bevel|round;
//shadowColor="red|green|blue|yellow|black|white";
//shadowBlur=0-100;
//shadowOffsetX;
//shadowOffsetY;
//this is the first Z
context.beginPath();
context.strokeStyle = "blue";
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.lineWidth = 15;
context.moveTo(100, 100);
context.lineTo(200, 100);
context.lineTo(100, 250);
context.lineTo(200, 250);
context.lineJoin = "miter";
context.lineCap = "butt";
context.stroke();

//This is Second Z
context.beginPath();
context.strokeStyle = "red";
context.shadowColor = "blue";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.lineWidth = 15;
context.moveTo(500, 100);
context.lineTo(350, 100);
context.lineTo(500, 250);
context.lineTo(350, 250);
context.lineJoin = "round";
context.lineCap = "round";
context.stroke();

//This is Third Z
context.beginPath();
context.strokeStyle = "green";
context.shadowColor = "yellow";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.lineWidth = 15;
context.moveTo(600, 100);
context.lineTo(750, 100);
context.lineTo(600, 250);
context.lineTo(750, 250);
context.lineCap = "square";
context.lineJoin = "bevel";
context.stroke();
