/**
 * Channels
 *
 * Channels are a group of equations
 * The equations are summed together to output a final value
 * The equations are never subtracted
 * Therefore, to subtract an equation, you should flip all positive operators to negative
 */

import Store from "./Store";

class Channel {
  #id;
  #equations;
  #interaction;

  constructor(id, equations = [], interaction = "*") {
    // unique identifier
    this.#id = id;
    // array of Equations
    this.#equations = equations;
    // how the channel will interact with other channels
    // in a group
    // either "*" or "/"
    this.#interaction = Channel.#validateInteraction(interaction);
    // add the channel to the store
    this.store = new Store();
    this.store.addChannel(this);
  }

  /**
   * Getters and Setters
   */
  getId = () => this.#id;
  getEquations = () => [...this.#equations];
  getInteraction = () => this.#interaction;

  static #validateInteraction = (interaction) => {
    const regexString = /^[*\/]$/gm;
    const regex = new RegExp(regexString);
    if (regex.test(interaction)) return interaction;
    else throw "Invalid Interaction";
  };
}

export default Channel;
