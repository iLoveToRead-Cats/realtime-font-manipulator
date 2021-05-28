difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500,400);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is intialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference =" + difference);
    }
}

function draw()
{
    background('#4287f5');
    document.getElementById("square_side").innerHTML = "width and height of the font will be = " + difference + "px" ;
    fill('#291f36');
    text('Star', 20, 400);
    textSize(difference);
}