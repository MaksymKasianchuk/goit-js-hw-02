'use strict';

const findLongestWord = function(string) {
    const arrOfWords = string.split(' ');
    let biggestWord = arrOfWords[0];
    for (let i = 0; i < arrOfWords.length; i++) { 
        if (arrOfWords[i].length > biggestWord.length) {
            biggestWord = arrOfWords[i];
        }
    }
    return biggestWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'