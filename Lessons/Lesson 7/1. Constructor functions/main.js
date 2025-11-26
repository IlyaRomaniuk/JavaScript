// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
// let user1 = new User('asd', 123, true);
// let user2 = new User('dsa', 456, false);
// console.log(user1);
// console.log(user2);

function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
}
let user1 = new User ('asd', 123, true, 'anna', 25);
console.log(user1);