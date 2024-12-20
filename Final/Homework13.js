//varibles
var x = 300
var y = 450
var diameter = [];
//character & controller variables
var characterX = 100;
var characterY = 100;
var shapeX = [];
var shapeY = [];
var shapeXSpeed = [];
var shapeYSpeed = [];
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
    for (var i = 0; i < 50; i++){
        createCanvas(800,800);
        shapeXSpeed[i] = Math.floor(Math.random() * 5) + 1;
        shapeYSpeed[i] = Math.floor(Math.random() * 5) + 1;
        shapeX[i] = getRandomNumber(800);
        shapeY[i] = getRandomNumber(800);
        diameter[i] = getRandomNumber(50);
    }
        createCharacter(200,400);
}
function draw()
{
    background(100,100,100);
    stroke(0);
    fill(0);
    //functions
    createBorders(10);
    characterMovement();
    drawCharacter();
    createEXIT();
    createWIN();
    drawMouseshape();
    fill(200,200,160);
    for (var i = 0; i < 50; i++){
        circle(shapeX[i], shapeY[i], diameter[i]);
        shapeXSpeed[i] = Math.floor(Math.random() * 5) + 1;
        shapeYSpeed[i] = Math.floor(Math.random() * 5) + 1;
        //move the shape
        shapeX[i] += shapeXSpeed[i];
        shapeY[i] += shapeYSpeed[i];

        if(shapeX[i] > width)
        {
            shapeX[i] = 0;
        }
        if(shapeX[i] < 0)
        {
            shapeX[i] = width;
        }
        if(shapeY[i] > height)
        {
            shapeY[i] = 0;
        }
        if(shapeY[i] < 0)
        {
            shapeY[i] = height;
        }
    }
}

function characterMovement()
{
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
            console.log("movement" + characterX)
        }
        if(keyIsDown(d))
        {
            characterX += 10;
        }
}

function drawMouseshape()
{
    // mouse shape
    fill(100,90,25);
    circle(mouseShapeX, mouseShapeY, 25);
}

function createWIN()
{
    if(characterX > width && characterY > width-50)
        {
            fill(0,75,80);
            stroke(5);
            textSize(26);
            text("You Win", width/2-50, height/2-50);
        }
}

function createEXIT()
{
    //exit message
    textSize(16);
    text("EXIT", width-50,height-50)
}


function drawCharacter()
{
    fill(200,200,50);
    circle(characterX, characterY, 30);
}

function createCharacter(x,y)
{
    //character
    console.log(characterX);
    characterX = x;
    characterY = y;
}

function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
}