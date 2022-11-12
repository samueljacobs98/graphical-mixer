import { it, describe, expect } from "@jest/globals";
import Calculator from "../../classes/Calculator";

describe("Calculator tests", () => {
  it("valid", () => {
    // const res1 = Calculator.basicCalc("x+3", 32, 4);
    // const res1 = Calculator.basicCalc("x-3", 32, 4);
    // const res1 = Calculator.basicCalc("x/3", 32, 4);
    // const res1 = Calculator.basicCalc("x*3", 32, 4);
    // const res1 = Calculator.basicCalc("x^3", 2, 4);
    // const res1 = Calculator.basicCalc("x+-3", 32, 4);
    // const res1 = Calculator.basicCalc("x-+3", 32, 4);
    // const res1 = Calculator.basicCalc("x/-3", 32, 4);
    // const res1 = Calculator.basicCalc("x*+3", 32, 4);
    // const res1 = Calculator.basicCalc("x*-3", 32, 4);
    // const res1 = Calculator.basicCalc("x/+3", 32, 4);
    // const res1 = Calculator.basicCalc("x--3", 32, 4);
    // const res1 = Calculator.basicCalc("x++3", 32, 4);
  });

  it("Invalid operator ordering should throw an error", () => {
    // const res1 = Calculator.basicCalc("x-*3", 321.125, 4);
    // const res2 = Calculator.basicCalc("x+*3", 321.125, 4);
    // const res3 = Calculator.basicCalc("x-/3", 321.125, 4);
    // const res4 = Calculator.basicCalc("x+/3", 321.125, 4);
    // const res1 = Calculator.basicCalc("x//3", 32, 4);
    // const res1 = Calculator.basicCalc("x**3", 32, 4);
  });

  // Basic Operations
  it("All basic operations work", () => {
    const a = [0.1, 0.5, 1, 2, 3, 5, 8, 13];
    const b = [0.12, 1, 14, 0.73, 9, 11, 37, 1];

    a.forEach((term1, index) => {
      console.log("index: ", index);
      const term2 = b[index];
      const multiplied = Calculator._testBasicOperation("*", term1, term2);
      const divided = Calculator._testBasicOperation("/", term1, term2);
      const added = Calculator._testBasicOperation("+", term1, term2);
      const subtracted = Calculator._testBasicOperation("-", term1, term2);
      const powered = Calculator._testBasicOperation("^", term1, term2);

      expect(multiplied).toEqual(term1 * term2);
      expect(divided).toEqual(term1 / term2);
      expect(added).toEqual(term1 + term2);
      expect(subtracted).toEqual(term1 - term2);
      expect(powered).toEqual(term1 ** term2);
    });
  });
});
