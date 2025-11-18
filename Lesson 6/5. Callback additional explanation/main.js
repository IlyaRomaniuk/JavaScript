// function filter(arr, predicate) {
//     let exitArr = [];
//     if (predicate === 'хочу парні') {
//         for (const item of exitArr) {
//             if (item % 2 === 0) {
//                 exitArr[exitArr.length] = item;
//             }
//         }
//     }
//     if (predicate === 'хочу не парні') {
//         for (const item of exitArr) {
//             if (item % 2 !== 0) {
//                 exitArr[exitArr.length] = item;
//             }
//         }
//     }
//     return exitArr;
// }
//
// // console.log(filter([11, 22, 33, 44, 55], 'хочу парні'));
// // console.log(filter([11, 22, 33, 44, 55], 'хочу  не парні'));
//
// let users = [
//     {name: 'ilya', age: 18, status: true},
//     {name: 'petya', age: 17, status: false},
//     {name: 'kolya', age: 16, status: false},
//     {name: 'sasha', age: 46, status: true},
//     {name: 'katya', age: 32, status: false},
//     {name: 'maryna', age: 21, status: false},
//     {name: 'anya', age: 24, status: true},
//     {name: 'igor', age: 41, status: true},
//     {name: 'oleg', age: 43, status: false}
// ];
//
// filter(users, )

function filter(arr, callback) {
    let mass= [];
    for (const item of arr) {
        if (callback(item)) {
            mass[mass.length] = item;
        }
    }
    return mass;
}

console.log(filter([11, 22, 33, 44, 55], function (item) {
    return item % 2 === 0;
}));

let users = [
    {name: 'ilya', age: 18, status: true},
    {name: 'petya', age: 17, status: false},
    {name: 'kolya', age: 16, status: false},
    {name: 'sasha', age: 46, status: true},
    {name: 'katya', age: 32, status: false},
    {name: 'maryna', age: 21, status: false},
    {name: 'anya', age: 24, status: true},
    {name: 'igor', age: 41, status: true},
    {name: 'oleg', age: 43, status: false}
];

console.log(filter(users, function (user) {
    return user.age != 30;
}));
