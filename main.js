img="";
Status="";
object=[];
function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();

objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
image(img,0,0,640,420);
if(Status!=" "){
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="status : objects detected";
        fill("navy");
        percent=floor(object[i].confidence*100);
        text(object[i].label +" "+percent+"%",object[i].x+15,object[i].y+15);
        noFill();
        stroke("maroon");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
}
function modelLoaded(){
console.log("Model Loaded!");
Status=true;
objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
     console.error(error);
    }
    else{
        console.log(results);
        object=results;
    }
}
