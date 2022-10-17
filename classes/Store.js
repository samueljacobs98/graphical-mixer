import Channel from "./Channel";

class Store {
  #channels = [];
  #groups = [];

  //   constructor() {}

  /**
   * Getters and Setters
   */
  getChannels = () => [...this.#channels];
  getGroups = () => [...this.#groups];

  getChannelsCount = () => this.#channels.length;
  getGroupsCount = () => this.#groups.length;

  /**
   * Other Methods
   */
  addChannel = (channel) => {
    if (channel instanceof Channel) {
      this.#channels.push(channel);
      this.channelsCount++;
    } else throw "Invalid channel provided";
  };

  //   addGroup = (group) => {
  //     if (group instanceof Group) {
  //       this.#groups.push(group);
  //       this.groupsCount++;
  //     } else throw "Invalid group provided";
  //   };
}

export default Store;
