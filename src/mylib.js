// Adds two numbers
function add(a, b){
    // Check if inputs are numbers
     if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

// Subtracts two numbers
function subtract(a, b){
    // Check if inputs are numbers
    if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a - b;
}

// Multiplies two numbers
function multiply(a, b){
    // Check if inputs are numbers
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Inputs must be numbers");
    }
    return a * b;
}

// Divides two numbers
function divide(a, b){
    // Check if inputs are numbers
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Inputs must be numbers");
    // Check for division by zero
    }else if(b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}

module.exports = { add, subtract, multiply, divide };