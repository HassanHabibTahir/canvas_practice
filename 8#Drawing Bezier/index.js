// Draawing Bezier Curve

// window.onload = function () {
//   const Bezier = document.getElementById("Bezier");
//   var context = Bezier.getContext("2d");
//   // bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
//   context.beginPath();
//   context.strokeStyle = "blue";
//   context.lineWidth = 5;
//   context.moveTo(200, 250);
//   //x1  y1   x2  y2  x3  y3
//   context.bezierCurveTo(100, 100, 500, 100, 400, 250);
//   context.stroke();
//   console.log(context, "context===>");
// };

//////////////////////////////////////START//////////////////////////////////////////////
//LAB SESSION PRACTICE;

// quadraticCurveTo and bezierCurveTo

// cx: This parameter holds the x-coordinate of the quadratic control point.
// cy: This parameter holds the y-coordinate of the quadratic control point.
// x: This parameter specifies the x-coordinate of the ending point.
// y: This parameter specifies the y-coordinate of the ending point.

// window.onload = function () {
//   const Bezier = document.getElementById("Bezier");
//   var context = Bezier.getContext("2d");
//   context.beginPath();
//   context.strokeStyle = "Blue";
//   context.lineWidth = 5;
//   //this is starting and endign point of the quadratic curve
//   // moveTo(x,y)
//   //quadratic first point is move from there ;
//   context.moveTo(600, 452);
//   //quadraticCurveTo(cx, cy, x, y)
//   // cx --> is move to x point ;
//   // cy --> is move to y point ; move to the y up and dow movement;
//   // x --> is move to x point increate or decrease  the size of the curve;
//   context.quadraticCurveTo(282, 25, 599, 148);
//   context.stroke();
//   context.beginPath();
//   context.strokeStyle = "Blue";
//   context.lineWidth = 5;
//   // if you wanna to movement of the first point of the  quadratic curve
//   //then move to the x and y point
//   context.moveTo(600, 452);
//   //if you wanna to move the second point of the quadratic curve
//   // you can change the  last point of the curve you cangne last the x and y point
//   context.quadraticCurveTo(900, 25, 599, 148);
//   context.stroke();
///////////////////////////////////////End////////////////////////////////////////////

// bezierCurveTo Lab
// bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
///////////////////////////////////////////////START FROM HERE /////////////////////////////////////////////
window.onload = function () {
  const Bezier = document.getElementById("Bezier");
  var context = Bezier.getContext("2d");
  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  //850 in moveTO move the first point of the bezier curve
  context.moveTo(30, 250);
  //x1  y1   x2  y2  x3  y3
  //---> x1  y1 the x1 and y1 is move  to the first x and  point
  //---> x2  y2 the x2 and y2 is move  to the second point as like centet of the curve
  //---> x3  y3 the x3 and y3 is move  to the third point as like end point of the curve as like last point of the  curve
  // in the bezierCurveTo  the last point of the curve is the end point
  // move to the  last point of bezier curve
  context.bezierCurveTo(100, 700, 500, -100, 600, 350);
  context.stroke();
  console.log(context, "context===>");
};
////////////////////////////////////////////////////END FROM HERE/////////////////////////////////////////////////////
