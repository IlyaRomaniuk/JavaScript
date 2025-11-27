// let h2 = document.createElement('h2');
// h2.innerText = 'some title';
// document.body.appendChild(h2);


// let allUsersDiv = document.getElementsByClassName('users')[0];
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
// for (const user of users) {
//
//     let div = document.createElement('div');
//     div.classList.add('user');
//     div.innerText = user.name;
//     allUsersDiv.appendChild(div);
// }

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
for (const user of users) {
    let userInfoDiv = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = user.name;

    let p = document.createElement('p');
    p.innerText = user.status + ' ' + user.age;

    userInfoDiv.append(h2, p);



    document.body.appendChild(userInfoDiv);
    
}