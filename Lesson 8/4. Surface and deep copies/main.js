let user = {
    name: 'vasya',
    skills: ['html', 'js'],
    greeting: function () {

    },
}
//
// let userClone = {...user};
// console.log(user === userClone);
// console.log(user.skills === userClone.skills);

// let userJsonClone = JSON.stringify(user);
// console.log(userJsonClone);
// let parse = JSON.parse(userJsonClone);
// console.log(parse);
// console.log(user);
// console.log(user === parse);
// console.log(user.skills === parse.skills);
let assign = Object.assign({}, user);
console.log(assign);
console.log(assign === user);
console.log(assign.skills === user.skills);