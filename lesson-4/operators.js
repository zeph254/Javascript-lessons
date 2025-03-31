console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false


console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true
console.log(false && false); // false

age = 20;


const carDrive = age >= 18 && age <= 65;
const carDrive2 = age >= 18 && age < 65;
const carDrive3 = age >= 18 && age <= 65;

console.log(carDrive);
console.log(carDrive2);
console.log(carDrive3);


console.log(!true); // false
console.log(!false); // true

let isMarried = true;
let isMarried2 = false;

console.log(!isMarried);
console.log(!isMarried2);


let a = 5;
let b = null;

const result = a ?? false;
console.log(result); // 5