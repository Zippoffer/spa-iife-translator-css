

var Translator = (function(event) {
var translated = "";
var finnishWords = {"Merry":"Iloinen", "Christmas":"Joulu", "and":"ja", "Happy":"Onnellinen", "New":"Uusi", "Year":"Vuosi"};


event.toFinnish = function(motherTongue) {
	motherTongue = motherTongue.split(" ");
	for (var i = 0; i < word.length; i++) {
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

})(Translator);

