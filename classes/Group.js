import Channel from "./Channel";
import Equation from "./Equation";
import Store from "./Store";

/**
 * Groups
 *
 * Groups are sets of channels
 * The channels are multiplied together
 */

class Group {
  #channels;

  constructor(channels = []) {
    this.#channels = Group.#validateChannels(channels);

    // add the channel to the store
    this.store = new Store();
    this.store.addGroup(this);
  }

  /**
   * Validation
   */
  static #validateChannels = (inputArray) => {
    const validateResult = inputArray.map((input) => input instanceof Channel);

    if (validateResult.includes(false)) throw "Invalid channel(s) provided";
    return inputArray;
  };

  /**
   * Getters and Setters
   */
  getChannels = () => [...this.#channels];

  getGroupEquation = () => {
    return new Equation(
      this.#channels
        .map((channel, index) => {
          const string =
            channel.getInteraction() +
            "(" +
            channel
              .getEquations()
              .map((eq) => eq.getEquation())
              .join("+") +
            ")";

          return index ? string : "1" + string;
        })
        .join("")
    );
  };

  /**
   * Other Methods
   */
  addChannel = (channel) => {
    if (channel instanceof Channel) this.#channels.push(channel);
    else throw "Invalid channel provided";
  };
}

export default Group;
