class Validation {
  static validateEquation = (input) => {
    const regexString = /^[0-9\*\/\+\-\^xyt]*$/g;
    const regex = new RegExp(regexString);
    const equation = input.replace(/\s+/g, "");
    if (regex.test(equation)) return equation;
    else throw "Invalid Equation";
  };
}

export default Validation;
