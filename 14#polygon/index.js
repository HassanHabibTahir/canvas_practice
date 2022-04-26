window.onload = function () {
  const canvas = document.getElementById("canvasPolygon");
  const context = canvas.getContext("2d");
  // only For Testing

  // context.beginPath();
  // context.fillStyle = "green";
  // context.lineWidth = "2";
  // context.moveTo(200, 130);
  // context.lineTo(300, 10);
  // context.lineTo(400, 130);
  // context.lineTo(360, 230);
  // context.lineTo(360, 230);
  // context.lineTo(250, 230);
  // context.lineTo(200, 130);
  // context.stroke();

  //create a polygon
  //polyGon Variables;
  var sides = 5;
  var radius = 100;
  var centerX = 400;
  var centerY = 300;
  var startAngle = 200;
  var angle = (2 * Math.PI) / sides;
  var beginx = centerX + radius * Math.cos(startAngle);
  var beginy = centerY + radius * Math.sin(startAngle);
  // first Part
  context.moveTo(beginx, beginy);
  for (let i = 0; i <= sides; i++) {
    var currentAngle = startAngle + i * angle;
    var currentPoinX = centerX + radius * Math.cos(currentAngle);
    var currentPoinY = centerY + radius * Math.sin(currentAngle);
    // context.lineTo(centerX + radius * Math.cos(startAngle + i * angle), centerY + radius * Math.sin(startAngle + i * angle));
    // var currentPointOfx = currentPointX*Math.cos(start)
    context.lineTo(currentPoinX, currentPoinY);
  }
  context.closePath(); //make the last point the same as the first point
  context.stroke();

  // second Part

  // context.moveTo(beginx, beginy);
  // for (var i = 0; i <= sides; i++) {
  //   var x = centerX + radius * Math.cos(startAngle + i * angle);
  //   console.log(x, "x==>");
  //   var y = centerY + radius * Math.sin(startAngle + i * angle);
  //   console.log(y, "y==>");
  //   context.lineTo(x, y);
  // }
  // context.stroke();

  //Third Part

  // var points = [];
  // points.push({ x: beginx, y: beginy });
  // for (var i = 0; i < sides; i++) {
  //   var x = centerX + radius * Math.cos(startAngle + i * angle);
  //   var y = centerY + radius * Math.sin(startAngle + i * angle);
  //   points.push({ x: x, y: y });
  // }
  // //draw polygon
  // context.beginPath();
  // context.fillStyle = "green";
  // context.lineWidth = "2";
  // context.moveTo(points[0].x, points[0].y);
  // for (var i = 1; i < sides; i++) {
  //   context.lineTo(points[i].x, points[i].y);
  // }
  // context.lineTo(points[0].x, points[0].y);
  // context.stroke();
};

// angle = (2 * Math.PI) / edgecount;
// centerX + radius * Math.cos(angle);
// centerY + radius * Math.sin(angle);
