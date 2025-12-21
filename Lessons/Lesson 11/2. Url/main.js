



let url = new URL('https://jsonplaceholder.typicode.com/posts');
url.searchParams.set('userId', 8);
url.searchParams.set('asd','asdasdasda');
console.log(url.searchParams.get('asd'));




fetch(url)
.then(value => value.json())
.then(value => {
    console.log(value);
});