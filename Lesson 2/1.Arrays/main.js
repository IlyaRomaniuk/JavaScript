let arr;
arr = [123, 234, 345, -123, 0, true, 'dasdaadad'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr.length);

arr[0] = 'new value';
console.log(arr);

arr[7] = 'okten';
console.log(arr);

arr[arr.length] = 12213123;
console.log(arr);

arr[arr.length] = 'dasdsadjasda'
console.log(arr);
