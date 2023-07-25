statuses = ""
object = [];

function setup()
{
   canvas = createCanvas(380,380);
   canvas.center();
   video = captureCanvas(VIDEO);
   video.size(360,360);
   video.hide();
}

function start()
{
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   name_of_object = document.getElementById('inputBox');
   input_value = number_of_objects.value;
}

function modelLoaded()
{
    console.log("Model Loaded");
    statuses = true;
}

function draw()
{
    webcam.size(380,380);

    if( statuses != "")
    {
        objectDetector.detect(video , gotResults);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+ objects.length;

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i], objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}




