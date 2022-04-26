window.onload = function () {
  const canvas = document.getElementById("canvasQuad");
  const context = canvas.getContext("2d");
  //start
  // context.quadraticcurveTo(controlX, ControlY, endX, endY);

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(200, 250);
  context.quadraticCurveTo(100, 100, 500, 250);
  context.stroke(); //end

  //line  is not deficult to draw a quadratic curve
  //but it is not easy to draw a quadratic curve

  //   therefore, we use the quadraticCurveTo() method to draw a quadratic curve
  //   so this is the questions of the quadraticCurveTo() method
  // therefore the  methos of the life is not easy to draw a quadratic curve

  // context.stroke();
  //QUADRATIC CURVE
  // in the QuadraticCurveTo() method, the first two parameters are the control point and the last two parameters are the end point.
  //there are the   first point is the  start point and the second point is the control point and the third point is the end point.
};
