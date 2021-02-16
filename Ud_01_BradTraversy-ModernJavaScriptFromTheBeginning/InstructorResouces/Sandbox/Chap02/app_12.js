// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Applse', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date(), ['a', 'b', 'c']];

let val;

// // Get array length
// val = numbers.length;
// // Check if Array
// val = Array.isArray(String);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// MUTATING ARRAYS
// // adds onto the end
// numbers.push(250);
// // put on front
// numbers.unshift(120);
// // Take off end
// numbers.pop();
// // Take of front
// numbers.shift();
// // Splice values
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// // Concatenate
// val = numbers.concat(numbers2);
// // Sort
// val = fruit.sort();
// val = numbers.sort();

// Use the "compare Function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse Sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

function over50(num){
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers)
console.log(val);