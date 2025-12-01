function addToLocalStorage (arrayName, objToAdd) {
    let LsItem = localStorage.getItem(arrayName)
    if (!LsItem) {
        throw new Error('there is no such array ');
    }

    let array = JSON.parse(LsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('sessionList', {});