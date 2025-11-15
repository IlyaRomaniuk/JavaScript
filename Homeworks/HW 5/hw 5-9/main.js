let foobar = (arrayUsers) => {
    for (let user of arrayUsers) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`)
    }
}
foobar([
    {id: 1, name: 'John', age: 34},
    {id: 2, name: 'Hanna', age: 32},
    {id: 3, name: 'Luisa', age: 53},
    {id: 4, name: 'Liza', age: 12}
])