let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Число:');

    if (isNaN(input) || input == '') {
        break;
    }
    
    numbers.push(+input);

} while (input !== null);

total = numbers.reduce((a, b) => a + b);
console.log(`Общая сумма чисел равна ${total}`)