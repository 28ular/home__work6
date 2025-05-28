let data = [42, 'текст', true, null, undefined, 3.14];

console.log( data.length);
console.log(data[0]);
console.log( data[data.length - 1]);
data[2] = false;
console.log( data);

let numbers = [10, 20, 30, 40, 50];
console.log( numbers.indexOf(30));
console.log( numbers.includes(100));


let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

fruits.push('mango');

fruits.unshift('strawberry');

let lastFruit = fruits.pop();
console.log( lastFruit);

let firstFruit = fruits.shift();
console.log( firstFruit);

console.log(fruits.indexOf('orange'));

console.log( fruits.includes('banana'));



let numbers2 = [45, 12, 67, 23, 89, 34, 56, 91, 8, 77];


let slice1 = numbers2.slice(2, 7);
console.log( slice1);


let slice2 = numbers2.slice(-3);
console.log( slice2);


let ascending = [...numbers2].sort((a, b) => a - b);
console.log( ascending);


let descending = [...numbers2].sort((a, b) => b - a);
console.log( descending);

console.log( numbers2.join(" - "));



let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log( combinedArray);
