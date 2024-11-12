//varibles
var x = 50;
var y = 50;
var diameter = 25;
//character & controller variables
var characterX = 100;
var characterY = 100;
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
var w = 87;
var s = 83;
var a = 65;
var d = 68;
//mouse variables
var mouseShapeX = 100;
var mouseShapeY = 100;
//fucntions & canvas
function setup()
{
    createCanvas(800,800);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function draw()
{
    background(100,100,100);
    stroke(0);
    fill(0);
    //borders
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);
    //exit message
    textSize(16);
    text("EXIT", width-50,height-50)
    //controls
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
//enemy?
fill(300,300,80);
circle(shapeX, shapeY, 10);
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
//move the shape
shapeX += shapeXSpeed
shapeY += shapeYSpeed
if(shapeX > width)
{
    shapeX = 0;
}
if(shapeX < 0)
{
    shapeX = width;
}
if(shapeY > height)
{
    shapeY = 0;
}
if(shapeY < 0)
{
    shapeY = height;
}

if(characterX > width && characterY > width-50)
{
    fill(0,75,80);
    stroke(5);
    textSize(26);
    text("You Win", width/2-50, height/2-50);
}
//character
fill(200,200,50);
circle(characterX, characterY, 30);

// mouse shape
fill(100,90,25);
circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}