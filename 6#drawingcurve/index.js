/*
arc(x,y,radius,startAngle,endAngle,counterClockWise)
*/
// (x,y)=>(75,45);

//x//y//radius//startAngle//endAngle//counterClockWise //false//true
// arc(75, 45, 50, startAngle, endAngle, counterClockWise);

//half circle

// //arc(75, 45, 50, 0, PI, counterClockWise);
// //clockWise and anitclockWise is depend upon the true and false if you did true it move as anitclockwose if you did false its move clockwise
// arc(75, 45, 50, 0, PI / 2, false);

window.onload = function () {
  //Definitions
  var canvas = document.getElementById("curves-canvas");
  var context = canvas.getContext("2d");
  var radian = Math.PI / 180;

  //First Arc
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.arc(100, 100, 50, 0 * radian, 180 * radian, false);
  context.stroke();

  //Second Arc

  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 10;
  context.arc(300, 200, 50, 45 * radian, 180 * radian, false);
  context.stroke();
};
