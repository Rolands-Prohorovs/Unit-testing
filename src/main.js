// src/main.js
const { add, subtract, multiply, divide} = require("./mylib.js");

const a = 6;
const b = 3;

// Perform calculations
console.log("Addition:", add(a, b));
console.log("Subtraction:", subtract(a, b));
console.log("Multiplication:", multiply(a, b));
console.log("Division:", divide(a, b));