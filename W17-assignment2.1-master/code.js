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

function getWords(txt){

    txt = txt.trim()

    txt = txt.replace(/[^a-z0-9]+|\s+/gmi, " ");
    var words = txt.split(" ");

    if(words[words.length-1] === ""){
        words.splice(words.length-1, 1);
    }

    return words;

}

//function to return the number of words
function getWordCount(txt){
    var word = getWords(txt);
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
    var words = getWords(txt);
    var avgWord = 0;
    for(var i = 0; i < words.length; i++){
        avgWord += words[i].length;
    }
    var avgLength = avgWord / words.length;
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
    var words = getWords(txt);
    var palindromes = [];
    for(var i = 0; i< words.length; i++){
        if(words[i].toLowerCase() === words[i].toLowerCase().split("").reverse().join("") && words[i].length >=2) {
            palindromes.push(words[i].toLowerCase());
        }
    }
    return palindromes;
}

//function to return the 10 longest words in the string
function getLongestWords(txt){
    var words = getWords(txt);
    var longestWords = [];
    var longestWordsLength = words[0].length;

    for(var i= 1; i <words.length; i++){
        if(words[i].length > longestWordsLength){
            longestWordsLength = words[i].length;
        }
    }

    while(longestWordsLength > 0 && longestWords.length < 10){
        for(var i = 0; i < words.length; i++){
            if(words[i].length >= longestWordsLength && longestWords.indexOf(words[i].toLowerCase()) <= -1){
                longestWords.push(words[i].toLowerCase());
            }
        }
        longestWordsLength--;
    }

    longestWords.sort();
    longestWords.sort(function(a,b){
        return b.length - a.length;
    });


    while (longestWords.length > 10){
        longestWords.pop();
    }

    return longestWords;
}

//function to return the 10most frequently occurring words in the string.
function  getMostFrequentWords(txt){
    var words = getWords(txt);
    var wordCount = {};
    var result = [];
    var mostFrequent = 0;

    for(var i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase();
    }

    words.sort();

    for(var i = 0; i < words.length; i++){
        if(!(words[i] in wordCount)){
            wordCount[words[i]] = 1;
        }else{
            wordCount[words[i]]++;
        }
    }

    for(var i = 0; i < words.length; i++){
        if(wordCount[words[i]] > mostFrequent){
            mostFrequent = wordCount[words[i]];
        }
    }

    while(mostFrequent > 0 && result.length < 10){
        for(var i = 0; i < words.length; i++){
            if(wordCount[words[i]] === mostFrequent && result.indexOf(words[i] + "(" + wordCount[words[i]] + ")") <= -1){
                result.push(words[i] + "(" + wordCount[words[i]] + ")");
            }
        }
        mostFrequent--;
    }

    while(result.length > 10){
        result.pop();
    }

    return result;

}
function getStats(txt) {
    return {
        nChars: getChars(txt),
        nWords: getWordCount(txt),
        nLines: getLines(txt),
        nNonEmptyLines: getNonEmptyLines(txt),
        maxLineLength: getMaxLineLength(txt),
        averageWordLength: getAvgWordLength(txt),
        palindromes: getPalindromes(txt),
        longestWords: getLongestWords(txt),
        mostFrequentWords: getMostFrequentWords(txt)
    };
}

