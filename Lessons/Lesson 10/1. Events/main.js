// let target = document.getElementById('target');
// target.onclick = function (ev) {
//     console.log('click');
//     console.log(ev);
// };
//
// // target.onmousemove = function (ev) {
// //     console.log(ev.clientX, ev.clientY);
// //     let r = ev.clientX;
// //     let g = ev.clientX;
// //     let b = ev.clientY;
// //     this.style.background = `rgb (${r},${g},${b}`
// // };
//
// // target.onclick = function () {
// //     console.log('asd');
// // };
// //
// // console.log(target);
//
// // target.addEventListener('click', function (ev) {
// //     console.log('asdsdadadad');
// // });
//
// target.onmouseover = function () {
//     console.log('over');
// };
//
// target.onmouseleave = function () {
//     console.log('leave');
// };

// let target = document.getElementById('target');
//
// // let i1 = document.getElementById('i1');
// // i1.oninput = function () {
// //     target.innerText = this.value;
// // };
//
// let f1 = document.forms.f1;
// f1.onsubmit = function (ev) {
//     ev.preventDefault();
//     console.log('hello');
//     let user = {name: this.username.value}
//     console.log(user);
// };
//
// let button = document.getElementById('button')[0];
// button.onclick = function () {
//     let value = f1.username.value;
// }

window.onload = function () {
    console.log('load');
};

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        document.body.innerText = 'loading start...'
    }
    if (document.readyState === "complete") {
        document.body.innerText = 'loading complete'
    }
};