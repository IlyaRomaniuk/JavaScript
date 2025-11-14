// console.log('start');
// try {
//     console.log(a);
// } catch (e) {
//     console.log(e);
// }
// console.log('end');

function calc(a, b) {
    if (b === 0) {
        throw new Error('b is 0');
    }
    return a / b;
}