function setup()
{
    canvas = createCanvas(500, 400);
    video = createCapture(VIDEO);
    video.size(500, 400);
    canvas.position(750, 250);
    video.position(50,250);
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', showResult);
}

function modelLoaded()
{
    console.log("Model Is Loaded");
}
noseX = 0;
noseY = 0;
leftWrist= 0;
rightWrist= 0;
difference = 0;

function showResult(result)
{
    console.log(result);
    noseX = result[0].pose.nose.x;
    noseY = result[0].pose.nose.y;
    leftWrist = result[0].pose.leftWrist.x;
    rightWrist = result[0].pose.rightWrist.x;
    difference = leftWrist - rightWrist;
    
}

function draw()
{
   background("orangered")
   fill("cyan")
   textSize(difference)
   text("Spider-man", 100, 175)
   document.getElementById("size").innerHTML= "font size-"+ difference + "px"

}
