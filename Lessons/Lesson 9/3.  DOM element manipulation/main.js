// let target = document.getElementById('target');
// console.log(target.innerText);
// // target.innerText = 'okten';
// target.style.background = 'red';
// console.log(target.classList);
// target.classList.add('foo');
// target.classList.add('bar');
// target.classList.keys();
// console.log(target.classList.item(0));
// console.log(target.classList.contains('bar'));
// target.classList.toggle('bar');

// console.log(target.getAttribute('xxx'));
// console.log(target.getAttribute('id'));

// console.log(target.previousElementSibling);
// console.log(target.nextElementSibling);

// console.log(target.children);
// console.log(target.childNodes);

// target.innerHTML = '<b>dasdasdad</b>';
// console.log(target.outerHTML);

let collectionOfDiv = document.getElementsByClassName('point');

for (const divElement of collectionOfDiv) {
    divElement.innerText ='dadadad';
    divElement.classList.add('qqq');
}


