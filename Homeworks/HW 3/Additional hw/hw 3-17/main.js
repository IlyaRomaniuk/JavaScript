// let numbers = [];
//
// for (let i = 1; i <= 50; i++) {
//     numbers.push(i * 2);
// }
// console.log(numbers);

// let numbers = [];
//
// for (let i = 1; i <= 50; i++) {
//     numbers.push(i * 3);
// }
// console.log(numbers);

// let randomNumbers = [];
// for (let i = 0; i < 20; i++) {
//     randomNumbers.push(Math.floor(Math.random() * 100));
// }
// console.log(randomNumbers);

// let randomNumbers = [];
// for (let i = 0; i < 20; i++) {
//     let num = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//     randomNumbers.push(num);
// }
// console.log(randomNumbers);

// for (let i = 2; i < randomNumbers.length; i += 3) {
//     console.log(randomNumbers[i]);
// }

// for (let i = 2; i < randomNumbers.length; i += 3) {
//     if (randomNumbers[i] % 2 === 0) {
//         console.log(randomNumbers[i]);
//     }
// }

// let evenThirdElements = [];
//
// for (let i = 2; i < randomNumbers.length; i += 3) {
//     if (randomNumbers[i] % 2 === 0) {
//         console.log(randomNumbers[i]);
//         evenThirdElements.push(randomNumbers[i]);
//     }
// }
//
// console.log('evenThirdElements', evenThirdElements);


// let numbers = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i + 1] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// let purchases = [100, 250, 50, 168, 120, 345, 188]
//
// let total = 0;
// for (let i = 0; i < purchases.length; i++) {
//     total += purchases[i];
// }
//
// let average = total / purchases.length;
//
// console.log('average', average);

// let randomNumbers = [];
// for (let i = 0; i < 10; i++) {
//     randomNumbers.push(Math.floor(Math.random() * 100) + 1);
// }
//
// console.log('initial array', randomNumbers);
//
// let multipliedNumbers = [];
//
// for (let i = 0; i < randomNumbers.length; i++) {
//     multipliedNumbers.push(randomNumbers[i] * 5);
// }
//
// console.log('array from * 5', multipliedNumbers);

// let mixedArray = [1, 'hello', true, 42, 'world', false, 7, 'JS', 3.14];
// let numbersArray = [];
//
// for (let i = 0; i < mixedArray.length; i++) {
//     if (typeof mixedArray[i] === 'number') {
//         numbersArray.push(mixedArray[i]);
//     }
// }
// console.log('numbers array', numbersArray);
