window.onload = function () {
  var min = 1;
  var max = 200;
  var data = [
    { label: "A", value: getRandomInt(min, max) },
    { label: "B", value: getRandomInt(min, max) },
    { label: "C", value: getRandomInt(min, max) },
    { label: "D", value: getRandomInt(min, max) },
    { label: "E", value: getRandomInt(min, max) },
  ];
  //chrt specification and data
  var targetId = "chart";
  var canvasWidth = 600;
  var canvasHeight = 450;
  //create chart
  var chart = new BarChart(targetId, canvasWidth, canvasHeight, data);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
