window.onload = function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.linejoin = "round";
  context.fillStyle = "blue";
  // context.rect(0, 0, canvas.width, canvas.height);
  context.rect(50, 100, 100, 100);
  context.stroke();
  context.fill();
  // context.fillRect(xCoordinate, yCoordinate, width, height);
  context.fillStyle = "green";
  context.fillRect(200, 100, 100, 100);
  // context.strokeRect(xCoordinate, yCoordinate, width, height);
  context.lineWidth = 3;
  context.strokeStyle = "orange";
  context.linejoin = "square";
  context.strokeRect(400, 100, 100, 100);
  // context.clearRect(xCoordinate, yCoordinate, width, height);
  // it  is used to Clear the React;
  context.clearRect(100, 50, 100, 100);
  // context.clearRect(0, 0, 900, 900);
};

// context.rect(xCoordinate, yCoordinate, width, height);
// context.fillRect(xCoordinate, yCoordinate, width, height);
//context.strokeRect(xCoordinate, yCoordinate, width, height);
//context.clearRect(xCoordinate, yCoordinate, width, height);
