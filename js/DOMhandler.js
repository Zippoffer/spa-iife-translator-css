var toTranslate = document.getElementById("textInput");
var selected = document.getElementById("selectMenu");
var submit = document.getElementById("submitButton");
var finalText = document.getElementById("outputDiv");

submit.addEventListener("click", translate);


function translate () {
  var langText = toTranslate.value.trim();
  var translatedText = "";
  finalText.innerHTML = "";

  if (selected.value === "french") {
    translatedText = Translator.toFrench(langText);
  } else if (selected.value === "finnish") {
    translatedText = Translator.toFinnish(langText);
  } else {
    translatedText = Translator.toSpanish(langText);
  }

  finalText.innerHTML = translatedText;

  if (translatedText === "NO") {
    finalText.innerHTML = "";
    var nope = document.createElement("h1");
    var nopeText = document.createTextNode(translatedText);
    nope.appendChild(nopeText);
    finalText.appendChild(nope);
    translatedText.focus
  }


  // convert output to text-to-speech
  // var msg = new SpeechSynthesisUtterance(translatedText);
  // window.speechSynthesis.speak(msg);
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();

  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to  1
  msg.rate = .5; // 0.1 to 10
  msg.pitch = 2; //0 to 2
  msg.text = translatedText;
  msg.lang = 'en-US';

  speechSynthesis.speak(msg);
}





