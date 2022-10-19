class Equation {
  #equation;

  constructor(equation) {
    this.#equation = Equation.#validateEquation(equation);
  }

  static #validateEquation = (input) => {
    const regex = /^[0-9\*\/\+\-\^()xyt]*$/g;
    const equation = input.replace(/\s+/g, "");
    if (regex.test(equation)) return equation;
    else throw "Invalid Equation";
  };

  getEquation = () => this.#equation;
}

export default Equation;
