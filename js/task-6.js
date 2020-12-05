'use strict'

let input;
let numbers = [];
let total = 0;

do{
    input = prompt('Введите число');
         if (Number.isNaN(Number(input))) {
            alert('Было введено не число, попробуйте еще раз');
        }
        else {
            numbers.push(Number(input));
        }
} while (input !== null)
if (numbers !== null) {
    for (let numb of numbers) {
        total += numb;
    }
    total !==0 ?  alert(`Общая сумма чисел равна ${total}`) : alert(`Массив пустой!`);
}
