import { expect, it, describe } from "@jest/globals";
import Channel from "../../classes/Channel";
import Group from "../../classes/Group";
import Store from "../../classes/Store";

const store = new Store();

describe("Store tests", () => {
  it("channels and groups are automatically added to store", () => {
    const validChannel = new Channel();
    const validGroup = new Group([validChannel]);

    expect(store.getChannels()[0]).toEqual(validChannel);
    expect(store.getChannelsCount()).toEqual(1);
    expect(store.getGroups()[0]).toEqual(validGroup);
    expect(store.getGroupsCount()).toEqual(1);
  });
  it("allows dimensions to be updated retrospectively", () => {
    const defaultLength = 2048;
    const expectedInitialSettings = {
      dimensions: [defaultLength, defaultLength],
    };
    const newLength = 1024;
    const expectedFinalSettings = {
      dimensions: [newLength, newLength],
    };

    expect(store.getDimensions().width).toEqual(defaultLength);
    expect(store.getDimensions().height).toEqual(defaultLength);
    expect(store.getSettings()).toEqual(expectedInitialSettings);

    store.setDimensions(newLength, newLength);

    expect(store.getDimensions().width).toEqual(newLength);
    expect(store.getDimensions().height).toEqual(newLength);
    expect(store.getSettings()).toEqual(expectedFinalSettings);
  });
  it("throws an error when Channel and Group are invalid", () => {
    const invalidInputs = [1, "invalid", 1.0, true];

    invalidInputs.forEach((invalidInput) => {
      expect(() => {
        store.addChannel(invalidInput);
      }).toThrow();
      expect(() => {
        store.addGroup(invalidInput);
      }).toThrow();
    });
  });
});
