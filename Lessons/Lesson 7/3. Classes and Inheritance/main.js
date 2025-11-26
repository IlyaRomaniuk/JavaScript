// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// //     static greeting () {
// //         console.log(this)
// //         console.log(this.age)
// //         return `hello my name is ${this.name}`;
// //     }
// // }
//
//     work () {
//
//         return `work in process`;
//     }
// }
//
//
//
//
//
// class Customer extends User {
//
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
//
//     work() {
//         return 'adadad';
//     }
//
//     foobar () {
//
//     }
//
// }
// let customer = new Customer('petya', 31, 'qwerty')
// console.log(customer);
// console.log(customer.work());
// console.log(foobar());

function User(name, age) {
    this.name = name;
    this.age = age;
}
function Customer(name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}
let customer = new Customer('vasya', 31, 111);
console.log(customer);