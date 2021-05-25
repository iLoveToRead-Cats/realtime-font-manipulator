noseX = 0;
noseY = 0;
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
    }
}

function draw()
{
    background('#7a97cc');
}