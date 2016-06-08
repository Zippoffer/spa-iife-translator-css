

var Translator = (function(event) {
var translated = "";
    var finnishWords = {"Merry":"Iloinen", "Christmas":"Joulu", "and":"ja", "Happy":"Onnellinen", "New":"Uusi", "Year":"Vuosi"};
    console.log(finnishWords);


    event.toFinnish = function(motherTongue) {
        motherTongue = motherTongue.split(" ");
        for (var i = 0; i < motherTongue.length; i++) {
        	translated += finnishWords[motherTongue[i]];
        	translated += " "
        }

        return translated;
    };

    return event;

})(Translator);

console.log(Translator);
