let user = ['id', 'name', 'username', 'age', 'status', true, false, 1, 2, 3]
for (let i = 0; i < user.length; i++) {
    if (typeof user[i] === 'number') {
        console.log(user[i])
    }
}