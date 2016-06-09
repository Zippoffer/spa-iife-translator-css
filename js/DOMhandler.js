var toTranslate = document.getElementById("textInput");
var selected = document.getElementById("selectMenu");
var submit = document.getElementById("submitButton");
var finalText = document.getElementById("outputDiv");

submit.addEventListener("click", translate);

function translate () {
  var langText = toTranslate.value;
  var translatedText = "";
  
  if (selected.value === "french") {
    translatedText = Translator.toFrench(langText);
  } else if (selected.value === "finnish") {
    translatedText = Translator.toFinnish(langText);
  } else {
    translatedText = Translator.toSpanish(langText);
  }
  finalText.innerHTML = translatedText;

  // convert output to text-to-speech
  var msg = new SpeechSynthesisUtterance(translatedText);
  window.speechSynthesis.speak(msg);
}


