// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         for (const {name, username, email} of users) {
//             document.write(`<div>
//                 ${name} ${username} ${email}
//             </div>`)
//         }
//     });

fetch('https://dummyjson.com/products')
.then(value => value.json())
.then(res => {
    console.log(res);
    let {products} = res;

    document.write(`<div>`);
    for (const product of products) {
        document.write(`<div>`);
        document.write(`<p>${product.brand} - ${product.price}</p>`);
        document.write(`<img src="${product.thumbnail}" alt="">`)
        document.write(`</div>`);
    }
    document.write(`</div>`);

});