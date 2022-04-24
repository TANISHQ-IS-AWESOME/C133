img = "";
status = "";
objects  = [];

function preload() {
  img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);

      if(status != ""){
        for (i = 0; 1 < objects.length; i++)
        {
          document.getElementById("status".innerHTML = "Status : Object Detected");

          fill("#FF0000");
          percent = floor(object[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("FF0000");
          rect(objects[i].x, object[i].y, object[i].width, object[i].height);
        }
      }
    fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350 );

    fill('#FF0000');
    text("Cat", 320, 120)
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}

function setup() {  
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("model Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
object = results;
}