const assert = require("chai").assert;
const { add, subtract, multiply, divide  } = require("../src/mylib.js");

before(() => { console.log("Testing starts"); });
after(() => { console.log("Testing finished"); });

describe("mylib", () => {
    // group of add tests
    describe("add", () => {
        // test for adding correctly
        it("add two numbers", () => {
            assert.equal(add(2, 3), 5);
            assert.equal(add(-2, -3), -5);
            assert.equal(add(0.2, 0.3), 0.5);
        });

        // test for throwing an error if input is not a number
        it("throw an error if input is not a number", () => {
            assert.throws(() => add(2,"a"), Error, "Inputs must be numbers");
        });
    });

    // group of subtract tests
    describe("subtract", () => {
        // test for subtracting correctly
        it("subtract two numbers", () => {
            assert.equal(subtract(5, 3), 2);
            assert.equal(subtract(-5, -3), -2);
            assert.equal(subtract(0.5, 0.3), 0.2);
        });

        // test for throwing an error if input is not a number
        it("throw an error if input is not a number", () => {
            assert.throws(() => subtract(2,"a"), Error, "Inputs must be numbers");
        });
    });

    // group of multiply tests
    describe("multiply", () => {
        // test for multiplying correctly
        it("multiply two numbers", () => {
            assert.equal(multiply(2, 3), 6);
            assert.equal(multiply(-2, -3), 6);
            assert.equal(multiply(0.2, 0.3), 0.06);
            assert.equal(multiply(2, 0), 0);
        });

        // test for throwing an error if input is not a number
        it("throw an error if input is not a number", () => {
            assert.throws(() => multiply(2,"a"), Error, "Inputs must be numbers");
        });
    });

    // group of divide tests
    describe("divide", () => {
        // test for dividing correctly
        it("divide two numbers", () => {
            assert.equal(divide(6, 3), 2);
            assert.equal(divide(-6, -3), 2);
            assert.equal(divide(0.6, 0.3), 2);
            assert.equal(divide(0, 3), 0);
        });

        // test for throwing an error if input is not a number
        it("throw an error if input is not a number", () => {
            assert.throws(() => divide(6,"3"), Error, "Inputs must be numbers");
        });

        // test for throwing an error if dividing by zero
        it("throw an error if dividing by zero", () => {
            assert.throws(() => divide(6, 0), Error, "Cannot divide by zero");
        });
    });

});