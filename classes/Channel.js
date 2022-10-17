class Channel {
  constructor(id, equations, interaction) {
    // unique identifier
    this.id = id;
    // array of Equations
    this.equations = equations;
    // how the channel will interact with other channels
    // in a group
    // either "*" or "/"
    this.interaction = Channel.#validateInteraction(interaction);
  }

  static #validateInteraction = (interaction) => {
    const regexString = /^[*\/]$/gm;
    const regex = new RegExp(regexString);
    if (regex.test(interaction)) return interaction;
    else throw "Invalid Interaction";
  };
}

export default Channel;
