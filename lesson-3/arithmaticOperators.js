// + +=/ - ** ++ --

let jesus = "salvation"

let a = 5;
let b = 3;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a ** b;
let h = a % b;
let i = a++;
let j = ++a;
let k = a--;
let l = --a;

console.log(c, d, e, f, g, h, i, j, k, l);


let num1 = 5;
let num2 = 10;

let isNum1GreaterThanNum2 = num1 > num2;
let isNum1LessThanNum2 = num1 < num2;
let isNum1EqualNum2 = num1 == num2;
let isNum1NotEqualNum2 = num1 != num2;

console.log(isNum1GreaterThanNum2);
console.log(isNum1LessThanNum2);
console.log(isNum1EqualNum2);
console.log(isNum1NotEqualNum2);


// loose equality operator
let isNum1LooseEqualNum2 = num1 === num2;
console.log(isNum1LooseEqualNum2);


// strict equality operator
let isNum1StrictEqualNum2 = num1 !== num2;
console.log(isNum1StrictEqualNum2);

let points = 10;
const customerType = points > 10 ? "gold" : "silver";
console.log(customerType);