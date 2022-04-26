window.onload = function () {
  const canvas = document.getElementById("asteroids2");
  const context = canvas.getContext("2d");
  context.strokeStyle = "black";

  context.moveTo(10, 10);
  context.lineTo(580, 10);
  context.lineTo(580, 390);
  context.lineTo(10, 390);
  context.lineTo(10, 30);
  context.lineTo(560, 30);
  context.lineTo(560, 370);
  context.lineTo(30, 370);
  context.lineTo(30, 50);
  context.lineTo(540, 50);
  context.lineTo(540, 350);
  context.lineTo(45, 350);
  context.lineTo(45, 70);
  context.lineTo(520, 70);
  context.lineTo(520, 330);
  context.lineTo(55, 330);

  //   context.lineTo(100, 300);
  //   context.lineTo(300, 300);
  //   context.lineTo(100, 100);
  //   context.lineTo(300, 100);
  //   context.lineTo(300, 300);
  //   context.strokeStyle = "red";
  context.stroke();
};
