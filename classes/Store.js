import Channel from "./Channel";
import Group from "./Group";

let singleton = null;

class Store {
  #channels = [];
  #groups = [];
  #dimensions = {};

  constructor(width = 2048, height = 2048) {
    if (singleton) {
      return singleton;
    }
    this.setDimensions(width, height);
    singleton = this;
  }

  /**
   * Getters and Setters
   */
  getChannels = () => [...this.#channels];
  getGroups = () => [...this.#groups];
  getDimensions = () => this.#dimensions;

  getChannelsCount = () => this.#channels.length;
  getGroupsCount = () => this.#groups.length;
  getSettings = () => {
    return {
      dimensions: [this.#dimensions.width, this.#dimensions.height],
    };
  };

  /**
   * Other Methods
   */
  addChannel = (channel) => {
    if (channel instanceof Channel) {
      this.#channels.push(channel);
      this.channelsCount++;
    } else throw "Invalid channel provided";
  };

  addGroup = (group) => {
    if (group instanceof Group) {
      this.#groups.push(group);
      this.groupsCount++;
    } else throw "Invalid group provided";
  };

  setDimensions = (width, height) => {
    this.#dimensions.width = width;
    this.#dimensions.height = height;
  };
}

export default Store;
