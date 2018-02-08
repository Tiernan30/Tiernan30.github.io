//
// Seng 513 - Assignment
// University of Calgary
// W2018
// Jared Madden
// ID: 30008241
//

//function to return the number of characters
function getChars(txt){
    return txt.length;
}

//function to return the number of words
function getWords(txt){
    var word = txt.match(/[\w\d]+/gi);
    return word ? word.length : 0;
}

//function to return the number of lines
function getLines(txt){
    return txt.split(/\r\n|\r|\n/).length;
}

//function to return the number of non-empty lines
function getNonEmptyLines(txt){
    return (txt.match(/^\s*\S/gm) || "").length;
}

//function to return the average word length
function getAvgWordLength(txt){
    var words = txt.match(/[\w\d]+/gi);
    var avgWord = 0;
    for(var i = 0; i <words.length; i++){
        avgWord += words[i].length;
    }
    var avgLength = avgWord / words;
    return avgLength;
}

//function to return the length of the line that has the longest length
function getMaxLineLength(txt){
    var lines = txt.split("\n");
    var maxLength = lines[0].length;

    for(let i = 1; i < lines.length; i++){
        if(lines[i].length > maxLength) {
            maxLength = lines[i].length;
        }
    }
    return maxLength;
}

//function to return the palindromes found in text
function getPalindromes(txt){
    var words = txt.match(/[\w\d]+/gi);
    var palindromes = [];
    for(var i = 0; i< words.length; i++){
        if(words[i].toLowerCase() === words[i].toLowerCase().split("").reverse().join("") && words[i].length >=2) {
            palindromes.push(words[i].toLowerCase());
        }
    }
    return palindromes;
}


function getStats(txt) {
    return {
        nChars: getChars(txt),
        nWords: getWords(txt),
        nLines: getLines(txt),
        nNonEmptyLines: getNonEmptyLines(txt),
        maxLineLength: getMaxLineLength(txt),
        averageWordLength: getAvgWordLength(txt),
        palindromes: getPalindromes(txt),
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

