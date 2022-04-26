window.onload = function () {
  //Definations;

  const canvas = document.getElementById("ractangle-canvas");
  const context = canvas.getContext("2d");
  //colors
  var lightCelColr = "#ddb180";
  var darkCelColor = "#7c330c";
  //Frame
  context.strokeStyle = "#000000";
  context.strokeRect(250, 100, 400, 400);
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        context.fillStyle = lightCelColr;
      } else {
        context.fillStyle = darkCelColor;
      }
      context.fillRect(250 + i * 50, 100 + j * 50, 50, 50);
    }
  }
  //Cell 1;
  // context.fillStyle = lightCelColr;
  // context.fillRect(250, 100, 80, 80);
  // //Cell 2;
  // context.fillStyle = darkCelColor;
  // context.fillRect(330, 100, 80, 80);
};
