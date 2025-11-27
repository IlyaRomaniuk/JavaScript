// console.log(document.head.children);
// console.log(document.body);
// console.log(document.head.innerHTML);
// console.log(document.body.innerHTML);

// let ul1 = document.getElementById('list-1');
// console.log(ul1);

// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }

// let liList = document.getElementsByTagName('li');
// console.log(liList);

// let list1 = document.getElementById('list-1');
// console.log(list1);

// let list1LiCollection = document.getElementsByTagName('li');
// console.log(list1LiCollection);

// console.log(document.querySelector('.menu'));
// console.log(document.querySelectorAll('.menu'));

let nodeListOf = document.querySelectorAll('.menu:nth-child(2)>li');
console.log(nodeListOf);
for (const node of nodeListOf) {
    console.log(node);
}