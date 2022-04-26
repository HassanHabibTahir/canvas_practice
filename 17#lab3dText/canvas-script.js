window.onload = function () {
  const canvas = document.getElementById("three-d-text-canvas");
  const context = canvas.getContext("2d");

  let text = "this is Text will be displayed on the canvas";
  context.font = "normal 600 54px monospace";
  //Layer one;
  context.fillText(text, 98, 300);
  //layer Two
  context.fillText(text, 96, 300);
  //layer Three
  context.fillText(text, 94, 300);
  //layer four
  context.fillText(text, 92, 300);
  //Original Text;
  context.fillStyle = "violet";
  context.fillText(text, 100, 300);
};
