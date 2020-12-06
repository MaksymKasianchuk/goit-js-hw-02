'use strict';

const calculateEngravingPrice = function(message, pricePerWord) {
    const arr = message.split(' ');
    let sum = 0;
    for (let i = 1; i <= arr.length; i++) {
        sum += pricePerWord;
    }
    return sum;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120