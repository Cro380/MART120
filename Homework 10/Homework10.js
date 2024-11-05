
var headX = 200;
var headY = 45;
var headDirection = 2;

var bodyX = 250;
var bodyY = 225;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2
function setup()
{
    createCanvas(800,800);
}
function draw()
{
    background(220);
    textSize(22)
    text('Hey there!', 10, 30);

    //head
    strokeWeight(10)
    fill(10, 150, 0);
    square(headX,45,100);
    headX+=headDirection;
    if(headX >= 0|| headX <= 250);
        {
            headDirection *=-1;
        }

    //eyes
    fill(0)
    circle(225,75,20);
    circle(275,75,20);

    //nose
    strokeWeight(10);
    point(250,100);
    
    //mouth
    line(300,130,130,130);

    //body
    fill(10,150,0);
    circle(250,bodyY,150);
    bodyY+=bodyDirection;
    if(bodyY >= 225 || bodyY <= 220);
    {
        bodyDirection *= -1;
    }

    //rightarm
    fill(10, 150, 0);
    rect(350,195,50);

    //leftarm
    fill(10, 150, 0);
    rect(105, 195, 50);

    //leftleg
    fill(10, 150, 0);
    rect(310, 300, 50);

    //rightleg
    fill(10, 150, 0);
    rect(145, 300, 50);

    //deco
    fill(250, 175, 0);
    triangle(200,220,300,120,156,220)
    triangle(260,220,300,240,312,220)

    fill(150);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5);
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Dylan Crotto",270,500);



}

