var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();

    
}
recognition.onresult = function(event){
        console.log(event);
        var Content=event.results[0][0].transcript;
        console.log(Content);
        document.getElementById("textbox").innerHTML=Content;
        if(Content =="take my selfie"){
            console.log("taking selfie ---")
        speak();
        }
}

function speak(){
    var synth = window.speechSynthesis;
    Speak_data = 'taking selfie in 5 seconds'
    var utterThis=new SpeechSynthesisUtterance(Speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save()
    },5000);
}

Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("webcam");

function take_snapshot(){
    Webcam.snap (function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    });
}

function save()
{
    link=document.getElementById("link");
    image=doc.getElementById("selfie_image").src
    link.herf=image;
    link.click();
}