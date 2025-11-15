let arrayMinValue = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const minElement = numbers[i];
        if (minElement < min) {
            min = minElement;
        }
    }
    return min;
}
console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));