//All the examples are on this file and individually commented out, to view one just uncomment the example you are trying to view

//Example 1
/**
function setup() 
{
  createCanvas(800, 400);
}

function draw() 
{
  background(100,200,100);
  circle(200, 200, 325)
  square(450, 50, 300)
}
**/

//Example 2
/**
function setup() 
{
  createCanvas(600, 600);
}

function draw() 
{
  background(300);
  noStroke();
  
  fill(255, 0, 0, 75);
  circle(300, 200, 250);
  
  fill(0, 0, 255, 75);
  circle(213, 350, 250);
  
  fill(0, 255, 0, 75);
  circle(382, 350, 250);
}
**/

//Example 3
/**
function setup() 
{
  createCanvas(800, 400);
}

function draw() 
{
  background(0);
  noStroke();
  
  //pacman
  fill(255, 255, 0);
  circle(200, 200, 325)
  
  fill(0);
  triangle(200, 200, 100, 70, 100, 330);
  rect(0, 70, 100, 260)
  
  //Ghost  
  fill(255, 0, 0)
  rect(450, 213, 325, 150)
  circle(613, 200, 325)
  
  fill(255)
  circle(535, 200, 85)
  circle(685, 200, 85)
  
  fill(0, 0, 255)
  circle(535, 200, 55)
  circle(685, 200, 55)
}
**/

//Example 4
function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(0,0,255);
  stroke(255)
  strokeWeight(5)
  
  fill(0, 100, 0)
  circle(200, 200, 200)
  
  fill(255, 0, 0)
  beginShape()
  vertex(200, 100)
  vertex(225, 175)
  vertex(295, 175)
  vertex(240, 215)
  vertex(260, 275)
  vertex(200, 240)
  vertex(140, 275)
  vertex(160, 215)
  vertex(105, 175)
  vertex(175, 175)
  vertex(200, 100)
  endShape();
  
}
