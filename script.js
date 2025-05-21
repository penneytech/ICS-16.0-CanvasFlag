/* Create an imaginary country flag that includes at least one of each Canvas elements we reviewed. 
Your flag should have the text name of your fake country name on it. 
*/

// target the HTML element for the canvas
let myCanvas = document.getElementById('mycanvas');
// get the drawing context so we can draw
let ctx = myCanvas.getContext('2d');

// ********* Put your drawing commands below ********** // 

// Draw a line

ctx.moveTo(0,0); // First point of the line
ctx.lineTo(400, 200); // Second point of the line
ctx.stroke(); // Draw the line

// Draw a filled rectangle

ctx.beginPath();
ctx.rect(20, 20, 70, 70);// X first point, Y first point, X second point, Y second point
ctx.fillStyle = "red";
ctx.fill(); // Fill the rectangle