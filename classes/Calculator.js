import ArrayHandler from "./ArrayHandler";
import BracketHandler from "./BracketHandler";
import Calculator from "./Calculator";

class Calculator {
  static BIDMAS = ["^", "/", "*", "+", "-"];

  static calculate(equation, x, t) {
    Calculator.#validate(equation, x, t);

    const strCalc = equation.replaceAll("x", x).replaceAll("t", t);

    Calculator.calculateRecursion(strCalc);
  }

  // FIX
  static calculateRecursion = (eqString) => {
    // BracketHandler.containsBrackets(eqString)
    // BracketHandler.getBracketsIndex(eqString)
    if (BracketHandler.containsBrackets(eqString)) {
      const { openIndex, closeIndex } =
        BracketHandler.getBracketsIndex(eqString);
      const eqSlice = eqString.slice(openIndex + 1, closeIndex);

      const result = calculateRecursion(eqSlice);
    } else {
      calculateWithoutBrackets(eqString);
    }
    // } else {
    //      Create array of calculations
    //      getCalulationArray(eqString) -> ["3^2"]
    // }
  };

  // WORKS
  static #calculateResultArray = (equationArray, bidmasIndex = 0) => {
    if (bidmasIndex > Calculator.BIDMAS.length - 1 || equationArray.length <= 2)
      return equationArray;

    const indexes = ArrayHandler.getArrayIndexes(
      equationArray,
      Calculator.BIDMAS[bidmasIndex]
    );
    const resultArray = [...equationArray];

    for (const operatorIndex in indexes) {
      const start = operatorIndex - 1;
      const end = operatorIndex + 2;

      const terms = equationArray.slice(start, end);
      const result = Calculator.#basicOperation(
        terms[1],
        Number(terms[0]),
        Number(terms[2])
      ).toString();

      end === equationArray.length
        ? resultArray.splice(resultArray.length - 3, resultArray.length, result)
        : resultArray.splice(operatorIndex - 1, 3, result);
    }

    // returns result in array as first value
    // value is a string
    // i.e. ["32"]

    return resultArray.length > 1
      ? Calculator.#calculateResultArray(resultArray, bidmasIndex + 1)
      : resultArray;
  };

  /**
   *
   *
   *
   *
   *
   * Simple Functions
   */

  static #validate(equation, x, t) {
    if (!BracketHandler.checkBracketsClosed(equation))
      throw "Invalid equation - Ensure brackets are closed";

    // if (!Calculator.#checkOperatorsAreValid(equation))
    //   throw "Invalid equation - Ensure operators are valid";
  }

  static #basicOperation = (operator, term1, term2) => {
    if (typeof term1 !== "number" || typeof term2 !== "number")
      throw "Invalid input";

    switch (operator) {
      case "-":
        return term1 - term2;
      case "/":
        return term1 / term2;
      case "*":
        return term1 * term2;
      case "+":
        return term1 + term2;
      case "^":
        return term1 ** term2;
      default:
        throw "Invalid operation";
    }
  };
}

export default Calculator;
