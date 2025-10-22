// let user = {
//     id: 1,
//     name: 'vasya',
//     status: true,
//     skills: [],
// }
// for (let fieldName in user) {
//     console.log(fieldName, user[fieldName]);
// }

let users = [
    {name: 'vasya', age: 29, status: true},
    {name: 'olya', age: 23, status: false},
    {name: 'katya', age: 43, status: true},
    {name: 'sergey', age: 54, status: true},
    {name: 'anton', age: 32, status: false},
    {name: 'ilya', age: 43, status: false},
    {name: 'petya', age: 12, status: false},
    {name: 'kolya', age: 32, status: true},
    {name: 'anna', age: 44, status: true},
    {name: 'ira', age: 55, status: true},
    {name: 'vlad', age: 66, status: true}
];
for (const user of users) {

    for (const fieldName in user) {
        console.log(fieldName, user[fieldName]);
    }
    console.log('');
}