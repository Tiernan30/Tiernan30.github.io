//
// this is just a stub for a function you need to implement
//
function getChars(txt){
    return txt.length;
}

function getWords(txt){
    var word = txt.match(/[\w\d]+/gi);
    return word ? word.length : 0;
}

function getLines(txt){
    return txt.split(/\r\n|\r|\n/).length;
}

function getNonEmptyLines(txt){
    return (txt.match(/^\s*\S/gm) || "").length;
}

function getAvgWordLength(txt){
    var words = getWords(txt);
    var wordArray = [txt.split()];
    var avgWord = 0;
    for(var i = 0; i <words.length; i++){
        avgWord += wordArray[i].length;
    }
    var avgLength = avgWord / words;
    return avgLength;
}
function getStats(txt) {
    return {
        nChars: getChars(txt),
        nWords: getWords(txt),
        nLines: getLines(txt),
        nNonEmptyLines: getNonEmptyLines(txt),
        averageWordLength: getAvgWordLength(txt),
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

