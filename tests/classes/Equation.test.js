import { expect, it, describe } from "@jest/globals";
import Equation from "../../classes/Equation";

describe("Equation tests", () => {
  it("returns the validated Equation", () => {
    const validEquations = ["x +  3", "x ^2 + t^3", " t^2 + x^3"];
    const expectedResults = ["x+3", "x^2+t^3", "t^2+x^3"];

    validEquations.forEach((equation, index) => {
      const result = new Equation(equation);
      expect(result.getEquation()).toEqual(expectedResults[index]);
    });
  });

  it("throws an error", () => {
    const invalidEquations = ["abcde", "_7*6", "!1+2", true, 32, 0.001];
    invalidEquations.forEach((equation) => {
      expect(() => {
        new Equation(equation);
      }).toThrow();
    });
  });
});
