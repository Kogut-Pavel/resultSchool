// Task #1

var a = 5;
var b = 10;
var c = 13;
console.log(a, b, c);

a = 10;
b = 20;
c = 26;

console.log(a, b, c);

// Task #2

// const a = 100;
// a = 20;
// console.log(a);

// const a = 100;
// a = 20;
// console.log(a);

// const a = 100;
// a = 20;
// console.log(a);

// Task #3

const productName = "Кроссовки";
const productPrice = 5000;
const productQuantity = 3;
const resultCost = productPrice * productQuantity;
const resultMessage = `Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`;

console.log(resultMessage);

// Task #4

console.log(
    typeof "Hello",
    typeof 10,
    typeof {},
    typeof null,
    typeof undefined,
    typeof true,
    typeof [],
    typeof (() => {})
);

// Task #5

console.log(
    10 == 10,
    10 != 10,
    12 == "Привет",
    10 < 11,
    12 > 20,
    true && true,
    true && false,
    false && true,
    false || true,
    true || false,
    true || true,
    10 <= 10,
    18 <= 20,
    50 >= 50,
    51 >= 50,
    {} === {},
    {} == {}
);

const a = {};
const b = a;
console.log(a === b);

// Task #6;

const a = 5;
const b = 10;
console.log(a > b);