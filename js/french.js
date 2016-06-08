var Translator = (function (wordLife){

  var frenchWords = { "Merry":"Joyeux", "Christmas":"Noel" };
  var translated = "";

    wordLife.toFrench = function (word) {
      word = word.split(" ");
      console.log("words: ", word );
      for (var i = 0; i < word.length; i++) {
        console.log("word:", i, word[i] );
        translated += frenchWords[word[i]];
        translated += " "
      }
      return translated;
    };

  return wordLife;

})(Translator);