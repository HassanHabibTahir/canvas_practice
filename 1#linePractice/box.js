//definations;
var canvas = document.getElementById("asteroids");
var context = canvas.getContext("2d");
//Blue Rectangle;
context.fillStyle = "blue";
context.fillRect(0, 0, canvas.width / 2, canvas.height / 2);
//Red Rectangle;
context.fillStyle = "red";
context.fillRect(
  canvas.width / 2,
  canvas.height / 2,
  canvas.width / 2,
  canvas.height / 2
);
//Green Rectangle;
context.fillStyle = "green";
context.fillRect(0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
//Yellow Rectangle;
context.fillStyle = "yellow";
context.fillRect(canvas.width / 2, 0, canvas.width / 2, canvas.height / 2);

// var canvas = document.getElementById("asteroids");
// var context = canvas.getContext("2d");
//testing Example;
// context.strokeStyle = "#FFFFFF";
// context.lineWidth = 2;
// context.beginPath();
// context.moveTo(200, 160);
// context.lineTo(200, 220);
// context.strokeStyle = "dimgrey";
// context.lineWidth = 5;
// context.rect(75, 50, canvas.width - 150, canvas.height - 100);
// // context.stroke();
// context.fill();
// // let maessage = "Hello World";
// // context.font = "34px Arial";
// // context.strokeStyle = "#FF2222";
// // context.fillStyle = "#FFAAAA";
// // context.lineWidth = 0.75;
// // context.textAlign = "center";
// // context.fillText(maessage, canvas.width / 2, 100);
// // context.strokeText(maessage, canvas.width / 2, 100);
// // let msg2 = "its quite easy";
// // context.font = "24px Arial";
// // context.fillText(msg2, canvas.width / 2, 330);
// // context.strokeText(msg2, canvas.width / 2, 330);
// // context.strokeStyle = "#FFFFFF";
// // context.lineWidth = 2;
// // context.beginPath();
// // context.arc(200, 140, 20, 0, Math.PI * 2);
// // context.strokeStyle = "red";
// context.arc(200, 140, 20, 0, Math.PI * 2);
// context.moveTo(210, 10);
// context.lineTo(141, 70);
// context.moveTo(210, 160);
// context.lineTo(185, 200);
// context.lineTo(210, 250);
// context.lineTo(215, 260);
// context.lineTo(220, 300);
// context.moveTo(240, 130);
// context.lineTo(225, 170);
// context.lineTo(225, 170);
// context.lineTo(200, 170);
// context.lineTo(175, 180);
// context.lineTo(170, 220);

// context.moveTo(20, 20);
// context.lineTo(20, 100);
// context.lineTo(70, 100);
// context.stroke();
// context.fill();

// ctx.fillStyle = "blue";
// ctx.beginPath();
// ctx.moveTo(108, 0.0);
// ctx.lineTo(141, 70);
// ctx.lineTo(218, 78.3);
// ctx.lineTo(162, 131);
// ctx.lineTo(175, 205);
// ctx.lineTo(108, 170);
// ctx.lineTo(41.2, 205);
// ctx.lineTo(55, 131);
// ctx.lineTo(1, 78);
// ctx.lineTo(75, 68);
// ctx.lineTo(108, 0);
// ctx.closePath();
// ctx.fill();
