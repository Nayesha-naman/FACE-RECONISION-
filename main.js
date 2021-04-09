//https://teachablemachine.withgoogle.com/models/v_w_tdy13/ family  

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});


var camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image'src='"+data_uri+"'></img>"
    });
}

console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_w_tdy13/ family',modelLoaded);
function modelLoaded(){
    console.log("model has been loaded");
};
