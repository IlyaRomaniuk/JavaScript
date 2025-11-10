function foobar(arrayUsers) {
    for (const user of arrayUsers) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age} </div>`)
    }
}
foobar([
    {id: 1, name: 'John Doe', age: 18},
    {id: 2, name: 'John Doe', age: 18},
    {id: 3, name: 'John Doe', age: 18},
    {id: 4, name: 'John Doe', age: 18}
])