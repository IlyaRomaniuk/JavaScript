let items = [];
for (let i = 1; i <= 100; i++) {
    items.push({ id: i, text: `Об’єкт №${i}` });
}

let container = document.getElementById("container");
let page = 0;

function render() {
    container.innerHTML = "";

    let start = page * 10;
    let end = start + 10;

    let part = items.slice(start, end);

    part.forEach(obj => {
        let div = document.createElement("div");
        div.className = "item";
        div.innerText = obj.text;
        container.appendChild(div);
    });
}

document.getElementById("nextBtn").onclick = () => {
    if ((page + 1) * 10 < items.length) {
        page++;
        render();
    }
};

document.getElementById("prevBtn").onclick = () => {
    if (page > 0) {
        page--;
        render();
    }
};
render();