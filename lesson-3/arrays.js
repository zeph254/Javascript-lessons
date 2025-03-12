// arrays
// 1. Create an array called `colors` that contains three colors.
// 2. Log the array to the console.
// 3. Log the length of the array to the console.
// 4. Log the first item in the array to the console.

let colors = ["red", "green", "blue"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);

console.log(typeof colors); // object
console.log(Array.isArray(colors)); // true
console.log(colors instanceof Array); // true
console.log(colors instanceof Object); // true
console.log(colors instanceof String); // false
console.log(colors instanceof Number); // false
console.log(colors instanceof Boolean); // false
console.log(colors instanceof Function); // false
console.log(colors instanceof Object); // true
console.log(colors instanceof Date); // false   