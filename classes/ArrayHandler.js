class ArrayHandler {
  static getArrayIndexes = (arr, val) =>
    arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

  static getEquationArray = (eqString) => {
    const numberArray = eqString.split(/\^|\/|\*|\+|\-/);
    const operatorArray = eqString
      .split(/\d/)
      .filter((op) => ["^", "/", "*", "+", "-"].includes(op));
    const equationArray = [];

    for (let i = 0; i < numberArray.length; i++) {
      if (i === operatorArray.length) equationArray.push(numberArray[i]);
      else equationArray.push(numberArray[i], operatorArray[i]);
    }

    return equationArray;
  };
}

export default ArrayHandler;
