/* Create an imaginary country flag that includes at least one of each Canvas elements we reviewed. 
Your flag should have the text name of your fake country name on it. 
*/

// target the HTML element for the canvas (KEEP THIS)
let myCanvas = document.getElementById('mycanvas');
// get the drawing context so we can draw (KEEP THIS)
let ctx = myCanvas.getContext('2d');

// ********* Put your drawing commands below. HERE ARE SOME EXAMPLES: ********** // 

// Draw a gradient background
let gradient = ctx.createLinearGradient(0, 0, 0, myCanvas.height);
gradient.addColorStop(0, "lightblue"); // Start color
gradient.addColorStop(1, "lightgreen"); // End color
ctx.fillStyle = gradient; // Set the fill style to the gradient
ctx.fillRect(0, 0, 400, 200); // Fill the canvas with the gradient (X, Y, width, height)

// Draw a line

ctx.moveTo(0,0); // First point of the line
ctx.lineTo(400, 200); // Second point of the line
ctx.stroke(); // Draw the line

// Draw a filled rectangle

ctx.beginPath();
ctx.rect(20, 20, 70, 70);// X first point, Y first point, X second point, Y second point
ctx.fillStyle = "red";
ctx.fill(); // Fill the rectangle

// Draw a triangle and fill it

ctx.beginPath();
ctx.moveTo(100, 100); // First point of the triangle
ctx.lineTo(150, 50); // Second point of the triangle
ctx.lineTo(200, 100); // Third point of the triangle
ctx.closePath(); // Close the path
ctx.fillStyle = "blue"; // Set the fill color
ctx.fill(); // Fill the triangle

// Draw a circle
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI * 2); // X center, Y center, radius, start angle, end angle
ctx.fillStyle = "green"; // Set the fill color
ctx.fill(); // Fill the circle

// Draw text
ctx.font = "30px Arial"; // Set the font size and family
ctx.fillStyle = "black"; // Set the text color
ctx.fillText("My Country", 50, 50); // Text, X position, Y position

// Draw a complex shape (star)
ctx.beginPath();
ctx.moveTo(250, 100); // Move to the starting point  
ctx.lineTo(270, 140); // First point of the star  
ctx.lineTo(310, 140); // Second point of the star  
ctx.lineTo(280, 160); // Third point of the star  
ctx.lineTo(290, 200); // Fourth point of the star  
ctx.lineTo(250, 180); // Fifth point of the star  
ctx.lineTo(210, 200); // Sixth point of the star  
ctx.lineTo(220, 160); // Seventh point of the star  
ctx.lineTo(190, 140); // Eighth point of the star  
ctx.lineTo(230, 140); // Ninth point of the star  
ctx.closePath(); // Close the path
ctx.fillStyle = "yellow"; // Set the fill color
ctx.fill(); // Fill the star

