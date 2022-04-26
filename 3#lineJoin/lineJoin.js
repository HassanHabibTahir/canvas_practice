window.onload = function () {
  // Definations
  var canvas = document.getElementById("line-Join");
  var context = canvas.getContext("2d");
  //lineJoin context.linJoin = "miter|bevel|round";
  //first Time miter;
  context.beginPath();
  console.log(context, "canvas===>");
  context.lineWidth = 20;
  context.lineJoin = "mitter";

  context.moveTo(30, 30);
  context.lineTo(150, 30);
  context.lineTo(150, 130);
  context.lineTo(30, 130);
  context.lineTo(30, 250);
  context.moveTo(30, 300);
  context.lineTo(30, 260);
  //   context.lineTo(150, 150);
  //   context.lineTo();
  context.stroke();

  context.beginPath();
  console.log(context, "canvas===>");
  context.lineWidth = 20;
  context.strokeStyle = "red";
  context.lineJoin = "bevel";
  context.moveTo(60, 30);
  context.lineTo(160, 30);
  context.lineTo(160, 130);
  context.lineTo(80, 130);
  context.lineTo(80, 250);
  context.moveTo(80, 300);
  context.lineTo(80, 260);
  //   context.lineTo(150, 150);
  //   context.lineTo();
  context.stroke();

  context.beginPath();
  console.log(context, "canvas===>");
  context.lineWidth = 20;
  context.strokeStyle = "blue";
  context.lineJoin = "round";
  context.moveTo(100, 30);
  context.lineTo(250, 30);
  context.lineTo(250, 130);
  context.lineTo(150, 130);
  context.lineTo(150, 250);
  context.moveTo(150, 300);
  context.lineTo(150, 260);
  //   context.lineTo(150, 150);
  //   context.lineTo();
  context.stroke();
};
