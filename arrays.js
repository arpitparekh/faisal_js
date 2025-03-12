// arrays are used to store multiple values in a single variable
let num = [1, 2, 3, 4, 5];
console.log(num);

let fruits = ['apple', 'banana', 'orange', 'mango']; // dynamic array
console.log(fruits[1]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits[2] = 'kiwi';
console.log(fruits);

console.log(fruits.toString());

let allType = ['Bascom', 23, 23.34, true];
console.log(allType);

fruits.sort();

// for in loop
// for of loop

for (let i of fruits) {
  console.log(i);
}

for (let i in fruits) {
  console.log(i);
}
let arr2d = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // matrix

console.log(arr2d);
console.log(arr2d[1][0]);

// arrays methods
fruits.push('grapes');
console.log(fruits);
fruits.pop();
console.log(fruits);

console.log(fruits[1]);
console.log(fruits.at(1));

console.log(fruits.toString());
console.log(fruits.join(' => '));

fruits.shift(); // remove first element
console.log(fruits);
console.log(fruits[0]);

fruits.unshift('grapes'); // add first element
console.log(fruits);

// merge 2  arrays
let anotherArray = [1, 2, 3, 4, 5, 6];
let newArray = anotherArray.concat(fruits, arr2d, num); // concatination
console.log(newArray);

console.log(fruits);
fruits.copyWithin(2, 0);
console.log(fruits);

// fatterning arrays
let arr1d = arr2d.flat(1);
console.log(arr1d);

// pending flatMap()
let newFruits = fruits.toSpliced(0, 2, 'kiwi2', 'kiwi3');
console.log(newFruits);

// slice()
let slicedFruits = fruits.slice(1, 3); // start , end-1
console.log(slicedFruits);

// search elements in array
myArr = [1, 2, 3, 77, 55, 33, 67, 9, 67, 5, 4, 7, 67, 67];
console.log(myArr.indexOf(67));
console.log(myArr.lastIndexOf(67));
console.log(myArr.includes(67)); // true or false

// find pending
// other sorting in functions
