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
]
// users.forEach(function (value){
//     console.log(value);
// });
// users.forEach(value => console.log(value));
// let filteredUsers = users.filter(value => value.age > 30);
// console.log(filteredUsers);
// let mapedUsers = users.map(function (value, index) {
//     return {...value, id:index + 1};
// });
// console.log(mapedUsers);
// users.map((value, index) => {
//     return {id: index + 1, name: value.name, age: value.age, status: value.status}
// });
// let find = users.find(value => value.name === 'igor');
// console.log(find);
// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));

// let sort = users.sort((u1, u2) => {
//     return u1.age - u2.age;
// });
// console.log(sort);

// let sort = users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// })
// console.log(sort);

let reduce = users.reduce((accumulator, user)=> {
    if (user.status) {
        accumulator.statT.push(user);
    } else {
        accumulator.statF.push(user);
    }

return accumulator;
}, {statT: [], statF: []});
console.log(reduce);