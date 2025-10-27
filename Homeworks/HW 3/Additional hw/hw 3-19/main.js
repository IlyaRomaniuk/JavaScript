// let numbers = [12, 7, 9, 20, 33, 46, 55, 68, 71, 84];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

let numbers = [5, 12, 7, 20, 33, 46, 55, 68, 71, 84];

let copiedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    copiedNumbers.push(numbers[i]);
}

console.log('original array', numbers);
console.log('copied array', copiedNumbers);