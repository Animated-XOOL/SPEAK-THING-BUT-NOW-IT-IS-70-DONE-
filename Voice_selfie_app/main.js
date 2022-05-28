var SpeechRecognition = window.webkitSpeedRecognition;
var recognition = new SpeedRecognition();
var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);

    var Content = event.result[0][0].transcript;

    Textbox.innerHTML = Content;
    console.assert(Content);
    if(Content =="take a selfie me")
    {
        console.log("taking a selfie of you --- ");
        speak();
    }
}