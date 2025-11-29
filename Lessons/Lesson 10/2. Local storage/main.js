// let item = localStorage.getItem('asd');
// console.log(item);

// localStorage.clear();

// localStorage.setItem('user', JSON.stringify({id: 1, name: 'kokos'}));

// let userJSON = localStorage.getItem('user');
// console.log(userJSON);
// let user = JSON.parse(userJSON);
// console.log(user);
// user.age = 31;
// console.log(user);
// localStorage.setItem('user', JSON.stringify(user));

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
// localStorage.setItem('users', JSON.stringify(users));

let usersJSON = localStorage.getItem('users');
console.log(usersJSON);
let users = JSON.parse(usersJSON);
console.log(users);

localStorage.setItem('users', JSON.stringify(users));
