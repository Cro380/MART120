
            function setup()
            {
                createCanvas(500,500);
            }
            function draw()
            {
                background(220);
                textSize(22)
                text('Hey there!', 10, 30);

                //head
                strokeWeight(10)
                fill(10, 150, 0);
                square(200,45,100);

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
                ellipse(250,225,150,160);

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
                textSize(20);
                text("Dylan Crotto",270,500);


            }
