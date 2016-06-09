var Translator = (function (oldTranslator){
  var spanishWords = { "Merry":"Feliz", "Christmas":"Navidad", "and":"y", "a":"a", "Happy":"Contento", "New":"Nueva", "Year":"Anos" };
  var translated = "";

  oldTranslator.toSpanish = function (word) {
    word = word.split(" ");
    for (var i = 0; i < word.length; i++) {
      var translatedWord = spanishWords[word[i]];
      if (translatedWord === undefined) {
        translated = `NO`;
      } else {
        translated += translatedWord;
        translated += " ";
      }
    }
    return translated;
  };
  return oldTranslator;
})(Translator);
