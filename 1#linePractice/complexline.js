const canvas = document.getElementById("asteroids2");
const context = canvas.getContext("2d");

//Draw zigZag with sigle Line;
context.beginPath();
context.moveTo(10, 10);
context.lineTo(60, 100);
context.lineTo(100, 10);
context.lineTo(150, 100);
context.lineTo(200, 10);
context.stroke();

//Draw Line Step Zig and Zag;
// context.beginPath();
// context.moveTo(10, 10); //string Point
// context.lineTo(60, 100); //Ending Point of Next line
// context.stroke();

// //Draw Line Steps;
// context.beginPath();
// context.moveTo(60, 100); //this is staring point and ending point of First
// context.lineTo(100, 10);
// context.stroke();

// //Draw Line Steps;
// context.beginPath();
// context.moveTo(100, 10); // similar to above
// context.lineTo(150, 100);
// context.stroke();

// //Draw Line Steps;
// context.beginPath();
// context.moveTo(150, 100); // similar to above
// context.lineTo(200, 10);
// context.stroke();

//LINE CAPS
