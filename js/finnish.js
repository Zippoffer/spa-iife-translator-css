

var translatedWords = "";

var Translator = (function(event) {

    var holidayString = {"Merry":"iloinen", "Christmas":"joulu", "and":"ja", "Happy":"onnellinen", "New":"uusi", "Year":"vuosi"};
    console.log(holidayString);


    event.addTranslatedWords = function(motherTongue) {
        

        return translatedWords;
    };

    return event;

})(Translator);

console.log(Translator);