//
// Seng 513 - Assignment 2
// University of Calgary
// W2018
// Jared Madden
// ID: 30008241
//

//function to return the number of characters
function getChars(s){
    return s.length;
}

function getWords(s){

    s = s.trim()

    s = s.replace(/[^a-z0-9]+|\s+/gmi, " ");
    var words = s.split(" ");

    if(words[words.length-1] === ""){
        words.splice(words.length-1, 1);
    }

    return words;

}

//function to return the number of words
function getWordCount(s){
    var word = getWords(s);
    return word ? word.length : 0;
}

//function to return the number of lines
function getLines(s){
    return s.split(/\r\n|\r|\n/).length;
}

//function to return the number of non-empty lines
function getNonEmptyLines(s){
    return (s.match(/^\s*\S/gm) || "").length;
}

//function to return the average word length
function getAvgWordLength(s){
    var words = getWords(s);
    var avgWord = 0;
    for(var i = 0; i < words.length; i++){
        avgWord += words[i].length;
    }
    var avgLength = avgWord / words.length;
    return avgLength;
}

//function to return the length of the line that has the longest length
function getMaxLineLength(s){
    var lines = s.split("\n");
    var maxLength = lines[0].length;

    for(var i = 1; i < lines.length; i++){
        if(lines[i].length > maxLength) {
            maxLength = lines[i].length;
        }
    }
    return maxLength;
}

//function to return the palindromes found in text
function getPalindromes(s){
    var words = getWords(s);
    var palindromes = [];
    for(var i = 0; i< words.length; i++){
        if(words[i].toLowerCase() === words[i].toLowerCase().split("").reverse().join("") && words[i].length >=2) {
            palindromes.push(words[i].toLowerCase());
        }
    }
    return palindromes;
}

//function to return the 10 longest words in the string
function getLongestWords(s){
    var words = getWords(s);
    var longestWordArray = [];
    var longestWordsLength = words[0].length;

    for(var i= 1; i < words.length; i++){
        if(words[i].length > longestWordsLength){
            longestWordsLength = words[i].length;
        }
    }

    while(longestWordsLength > 0 && longestWordArray.length < 10){
        for(var i = 0; i < words.length; i++){
            if(words[i].length >= longestWordsLength && longestWordArray.indexOf(words[i].toLowerCase()) <= -1){
                longestWordArray.push(words[i].toLowerCase());
            }
        }
        longestWordsLength--;
    }

    //sorting by alphanumeric
    //longestWordArray.sort();
    //reversing sort as above seems to sort descending, still not right though.
    //longestWordArray.reverse();

    //sorting by length then alphabetically
    longestWordArray.sort(function(a,b){return b.length - a.length || a.localeCompare(b);});


    while (longestWordArray.length > 10){
        longestWordArray.pop();
    }

    return longestWordArray;
}

//function to return the 10 most frequently occurring words in the string.
function  getMostFrequentWords(s){
    var words = getWords(s);
    var counter = {};
    var result = [];
    var mostFrequent = 0;

    for(var i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase();
    }

    words.sort();

    for(var i = 0; i < words.length; i++){
        if(!(words[i] in counter)){
            counter[words[i]] = 1;
        }else{
            counter[words[i]]++;
        }
    }

    for(var i = 0; i < words.length; i++){
        if(counter[words[i]] > mostFrequent){
            mostFrequent = counter[words[i]];
        }
    }

    while(mostFrequent > 0 && result.length < 10){
        for(var i = 0; i < words.length; i++){
            if(counter[words[i]] === mostFrequent && result.indexOf(words[i] + "(" + counter[words[i]] + ")") <= -1){
                result.push(words[i] + "(" + counter[words[i]] + ")");
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

