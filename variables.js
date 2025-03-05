// comment in javascipt
console.log('Hello World');

/*
multiline comment
*/

// variables  // var let and const

var a = 10;
let num = 10;
let height = 12.45;
const institute = 'bascom';

{
  let num1 = 10;   // scope of let is within the block
  var num2 = 10;   // scope of var is within the whole file
  const num3 = 12;
}

console.log(num2);
// console.log(num1);   // let cannot be accessed outside the block
// console.log(num3);

institute = 'tops';   // const cannot be changed
console.log(institute);
