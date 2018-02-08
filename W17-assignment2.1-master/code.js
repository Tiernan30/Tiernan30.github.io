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
function getStats(txt) {
    return {
        nChars: getChars(txt),
        nWords: getWords(txt),
        nLines: txt.split(/\r\n|\r|\n/).length,
        nNonEmptyLines: (txt.match(/^\s*\S/gm) || "").length,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

