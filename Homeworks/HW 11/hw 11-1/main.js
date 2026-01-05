fetch('https://dummyjson.com/docs/carts')
    .then(value => value.json())
    .then(cartsObjects => {
        let {carts} = cartsObjects;
        console.log(carts);

        for (const cart of carts) {
            let div = document.createElement('div');
            div.classList.add('cart-container');

        }
    });