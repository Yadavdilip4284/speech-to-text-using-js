function runSpeechRecognition() {
    
    var output = document.getElementById("output");
    
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    
    recognition.onstart = function() {
        action.innerHTML = "listening, please speak...";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "stopped listening, hope you are done...";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
       
        output.innerHTML = "Text: " + transcript  ;
        
    };
  
     
     recognition.start();
}