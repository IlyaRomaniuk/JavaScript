let books = [
    {name: 'The Very Hungry Caterpillar', pages: 300, authors: 'Eric Carle', genre: ['adventures', 'mystery'] },
    {name: 'Harry Potter', pages: 500, authors: 'J. K. Rowling', genre: ['adventures', 'fantasy'] },
    {name: "Where's Spot?", pages: 301, authors: 'Eric Hill', genre: 'adventures'},
    {name: "Goodnight Moon", pages: 200, authors: 'Margaret Wise Brown', genre: ['drama', 'historical fiction'] },
    {name: "Curious George", pages: 120, authors: ['Hans Augusto Rey', 'Margret Rey'], genre: ['romance', 'mystery'] }
]
// let biggestBook = books[0];
// for (let book of books) {
//     if (book.pages > biggestBook.pages) {
//         biggestBook = book;
//     }
// }
// console.log(biggestBook);

// let mostAuthorsBook = books[0];
//
// for (let book of books) {
//     let currentCount = Array.isArray(book.authors) ? book.authors.length : 1;
//     let maxCount = Array.isArray(mostAuthorsBook.authors) ? mostAuthorsBook.authors.length : 1;
//     if (currentCount > maxCount) {
//         mostAuthorsBook = book;
//     }
// }
// console.log(mostAuthorsBook);

let longestNameBook = books[0];
for (let book of books) {
    if (book.name.length > longestNameBook.name.length) {
        longestNameBook = book;
    }
}
console.log(longestNameBook);