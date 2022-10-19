import { it, describe } from "@jest/globals";
// import Calculator from "../../classes/Calculator";

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
});
