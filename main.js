var SpeechRecognition = window.webkitSpeechRecognition; //Web SPeech API - convert speech to text 
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}

function speak(){
    var synth = window.speechSynthesis; // Convert text to speech 

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    timer();

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 13000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}


function timer()
{
    var synth = window.speechSynthesis;
    for(var i=5;i>=1;i--){

        speak_data = i;

        var utterThis = new SpeechSynthesisUtterance(speak_data);
    
        synth.speak(utterThis);
    }
    speak_data = "Taking Selfie Now";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
    
        synth.speak(utterThis);
}