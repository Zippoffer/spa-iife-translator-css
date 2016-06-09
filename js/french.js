var Translator = (function (wordLife){
  var frenchWords = { "Merry":"Joyeux", "Christmas":"Noel", "and":"et", "a":"une", "Happy":"Bonne", "New":"Nouvelle", "Year":"Annee", " ":" " };

  wordLife.toFrench = function (word) {
    var translated = "";
    word = word.split(" ");
    for (var i = 0; i < word.length; i++) {
      var translatedWord = frenchWords[word[i]];
      if (translatedWord === undefined) {
        translated = `NO`;
      } else {
        translated += translatedWord;
        translated += " ";
      }
    }
    return translated;
  };

 

  return wordLife;
})(Translator || {});