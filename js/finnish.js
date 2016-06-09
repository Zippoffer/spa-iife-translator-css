var Translator = (function(event) {
  var finnishWords = {"Merry":"Iloinen", "Christmas":"Joulu", "and":"ja", "Happy":"Onnellinen", "New":"Uusi", "Year":"Vuosi", " ":" "};

  event.toFinnish = function(motherTongue) {
  	var translated = "";
    motherTongue = motherTongue.split(" ");
  	for (var i = 0; i < motherTongue.length; i++) {
  		var translatedWord = finnishWords[motherTongue[i]];
  		if (translatedWord === undefined) {
  			translated = `NO`;
  		} else {
  			translated += translatedWord;
  			translated += " ";
  			}
  		}
  	return translated;
  };

  return event;

})(Translator || {});

