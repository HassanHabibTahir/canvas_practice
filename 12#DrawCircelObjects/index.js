window.onload = function () {
  const canvas = document.getElementById("circle-object-canvas");
  const context = canvas.getContext("2d");
  var radian = Math.PI / 180;
  context.beginPath();
  //   //   context.arc(100, 100, 50, 0, 360 * radian, false);
  // context.strokeStyle = "red";
  context.lineWidth = 15;
  context.fillStyle = "#F2AF11";
  context.arc(400, 300, 150, 14 * radian, 340 * radian, false);
  // context.stroke();
  context.fill();
};

// context.arc(xCoordinate, yCoordinate, radius, startAngle, endAngle, anticlockwise);
