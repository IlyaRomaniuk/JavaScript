let divValue = document.getElementById('divValue');

let savedPrice = localStorage.getItem('price');
let lastUpdate = localStorage.getItem('lastUpdate');
let now = Date.now();

if (!savedPrice) {
    savedPrice = 100;
    localStorage.setItem('price', savedPrice);
    localStorage.setItem('lastUpdate', now);
} else {
    savedPrice = Number(savedPrice);

if (now - lastUpdate >= 10000) {
    savedPrice += 10;
    localStorage.setItem('price', savedPrice);
    localStorage.setItem('lastUpdate', now);
    }
}
divValue.innerText = savedPrice + 'грн';


