window.onload = function () {
  const canvas = document.getElementById("pacman-canvas");
  const context = canvas.getContext("2d");
  var radian = Math.PI / 180;
  //fist type of pacman
  // context.beginPath();
  // context.strokeStyle = "orange";
  // context.fillStyle = "orange";
  // context.lineWidth = 5;
  // context.moveTo(250, 250);
  // context.lineTo(330, 310);
  // context.arc(250, 250, 100, 37 * radian, 323 * radian, false);
  // context.lineTo(250, 250);
  // context.stroke();
  // context.fill();
  // //eyes
  // context.beginPath();
  // context.fillStyle = "black";
  // context.arc(250, 200, 10, 0 * radian, 360 * radian, false);
  // context.stroke();
  // context.fill();
  // context.beginPath();
  // context.fillStyle = "black";
  // context.arc(250, 300, 10, 0 * radian, 360 * radian, false);
  // context.stroke();
  // context.fill();

  //second type of pacman
  //fist
  context.beginPath();
  context.strokeStyle = "orange";
  context.fillStyle = "orange";
  context.lineWidth = 10;
  context.arc(550, 150, 100, 143 * radian, 323 * radian, false);
  context.stroke();
  context.fill();
  // //second
  context.beginPath();
  context.strokeStyle = "orange";
  context.fillStyle = "orange";
  context.lineWidth = 10;
  context.arc(550, 150, 100, 33 * radian, 217 * radian, false);
  context.stroke();
  context.fill();
  // //eyes
  context.beginPath();
  context.fillStyle = "black";
  context.arc(550, 100, 10, 0 * radian, 360 * radian, false);
  context.stroke();
  context.fill();
};
