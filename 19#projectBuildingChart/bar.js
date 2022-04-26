/**
 * bar.js
 * element, bar chart library
 * {data} data
 * @param {*} targetId
 * @param {*} width
 * @param {*} height
 * @param {*} data
 * {data}
 * {url}
 */
"use strict";
function BarChart(targetId, width, height, data) {
  //Base
  var chart = this;
  //specify Configurations
  chart.configChart(targetId, width, height, data);
  //pre Operations
  chart.performPreOperations();
  console.log("chart");
}
BarChart.prototype.configChart = function (targetId, width, height, data) {
  var chart = this;
  //Global Canvas Specificaions;
  chart.setCanvasParameter(targetId, width, height, data);

  //Global Chart Specificaions;
  chart.setChartParameters();

  //Global specification come from outside
  // chart.id = targetId;
  // chart.width = width;
  // chart.height = height;
  // chart.data = data;
  //chart specifications
};
BarChart.prototype.setCanvasParameter = function () {
  //Base
  var chart = this;
  //canvas specifications come from outSide
  // chart.id = targetId;
  // chart.width = width;
  // chart.height = height;
  // chart.data = data;
};
BarChart.prototype.setChartParameters = function () {
  var chart = this;

  //Axe configuration
  chart.axeRatio = 10;
  chart.verticalMargin = (chart.height * chart.axeRatio) / 100;
  chart.horizontalMargin = (chart.width * chart.axeRatio) / 100;
  chart.axeColor = "#b1b1b1";
  chart.labelColor = "#b1b1b1";
  chart.axeWidth = 0.75;
  //lable Configuration;
  chart.fontRatio = 3; //in term of percentage
  chart.fontFamily = "monospace";
  chart.fontStyle = "normal";
  chart.fontSize = "300";
  chart.fontColor = "#666";
  chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
  chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;
  // Guide Line Configurations
  chart.guideLineColor = "#e5e5e5";
  chart.guideLineWidth = 0.5;
};
BarChart.prototype.performPreOperations = function () {
  //Base
  var chart = this;
  //Create Canvas;
  chart.createCanvas();
  //chart Handle Data;
  chart.handleData();
};
BarChart.prototype.createCanvas = function () {
  // Base
  var chart = this;
  // Create Canvas
  var canvas = document.createElement("canvas");
  canvas.id = chart.id + "-" + Math.random();
  canvas.width = chart.width;
  canvas.height = chart.height;
  // Append canvas to target container
  document.getElementById(chart.id).innerHTML = ""; // clean container
  document.getElementById(chart.id).appendChild(canvas); // add canvas to clean container
  // Add canvas to chart object
  chart.canvas = canvas;
  chart.context = canvas.getContext("2d");
};

BarChart.prototype.handleData = function () {
  // Base
  var chart = this;

  // Data sets
  chart.labels = [];
  chart.values = [];

  // Handle Data
  chart.data.forEach(function (item) {
    chart.labels.push(item.label);
    chart.values.push(item.value);
  });
};
