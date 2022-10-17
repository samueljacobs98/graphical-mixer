import Channel from "./Channel";

class Group {
  #channels;

  constructor(channels = []) {
    this.#channels = Group.#validateChannels(channels);
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
  getGroupEquation = () => {
    this.#channels
      .map((channel, index) => {
        console.log(index);
        if (index) {
          channel.interaction + channel.equations.join("+");
        } else return "1" + channel.interaction + channel.equations.join("+");
      })
      .join("");
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
