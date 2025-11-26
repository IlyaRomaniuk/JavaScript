let arr = [];
console.log(Array.isArray(arr));
// arr[arr.length] = 100;
console.log(arr.push('new element1'));
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.unshift('!!!'));
console.log(arr);

console.log(arr.shift());
console.log(arr);

let join = arr.join(';');
console.log(join);
let nums = [1, 2, 3];

let concat = arr.concat(nums);
console.log(concat);

console.log(nums.reverse());

let slice = concat.slice(0, 4);
console.log(slice);
console.log(concat);

console.log(concat.includes(3));