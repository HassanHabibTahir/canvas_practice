const canvas = document.getElementById("shadow");
const context = canvas.getContext("2d");

//line One
context.beginPath();
context.lineWidth = 20;
context.strokeStyle = "red";
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 5;
context.moveTo(30, 30);
context.lineTo(130, 30);
context.stroke();
// life is not easy its doing work hard

//line Two
context.beginPath();
context.lineWidth = 20;
context.strokeStyle = "red";
context.shadowColor = "black";
context.shadowOffsetX = -10;
context.shadowOffsetY = 10;
context.shadowBlur = 5;
context.moveTo(30, 300);
context.lineTo(130, 300);
context.stroke();
// life is not easy its doing work hard

//line Three
context.beginPath();
context.lineWidth = 20;
context.strokeStyle = "red";
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowOffsetY = -10;
context.shadowBlur = 10;
context.moveTo(500, 30);
context.lineTo(400, 30);
context.stroke();
// life is not easy its doing work hard

//line four
context.beginPath();
context.lineWidth = 20;
context.strokeStyle = "red";
context.shadowColor = "black";
context.shadowOffsetX = -10;
context.shadowOffsetY = -10;
context.shadowBlur = 10;
context.moveTo(400, 300);
context.lineTo(500, 300);
context.stroke();
// life is not easy its doing work hard

/*

shadow attributes on canvas ;
shadowColor;
shadowOffsetX
shadowOffsetY
shadowBlure 


*/
