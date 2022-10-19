import Calculator from "./Calculator";

class BracketHandler {
  static checkForBrackets = (eqString) => /\(|\)/.test(eqString);

  static containsBrackets = (eqString) => /\(|\)/.test(eqString);

  static getBracketsIndex = (eqString) => {
    const closeIndex = eqString.indexOf(")");
    const openIndex = eqString.slice(0, closeIndex).lastIndexOf("(");
    return { closeIndex, openIndex };
  };

  static #checkBracketsClosed = (equation) => {
    let bracketCount = 0;

    for (let i = 0; i < equation.length; i++) {
      if (equation.charAt(i) === "(") bracketCount++;
      else if (equation.charAt(i) === ")") bracketCount--;
    }

    return bracketCount === 0;
  };
}

export default BracketHandler;
