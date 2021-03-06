'use strict';

const checkForSpam = function (message) {
    const correctMessage = String(message.toLowerCase());
    const spam = 'spam';
    const sale = 'sale';
    return correctMessage.includes(spam) || correctMessage.includes(sale);
};


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true