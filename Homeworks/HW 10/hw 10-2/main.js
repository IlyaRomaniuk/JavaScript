let input = document.getElementById('ageInput');
let btn = document.getElementById('checkBtn');

btn.addEventListener('click', function () {
    let age = Number(input.value);
    if (!age) {
        alert('Введіть коректний вік!');
        return;
    }
    if (age < 18) {
        alert('Вам ще немає 18!');
    } else {
        alert('Вам 18, або більше');
    }
});