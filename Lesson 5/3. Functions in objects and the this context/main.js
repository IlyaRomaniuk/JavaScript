let user = {
    name: 'John',
    age: 32,
    greeting: function (msg) {
        console.log(this);
        return `${msg} my name is ${this.name}`;

    },
    vitanny: (msg) => `${msg} my age is ${user.age}`
}
console.log(user.greeting('hi'));
console.log(user.vitanny('hello'));