import { expect, it, describe } from "@jest/globals";
import Channel from "../../classes/Channel";
import Group from "../../classes/Group";
import Equation from "../../classes/Equation";

describe("Group tests", () => {
  it("returns a new group with an empty channels array", () => {
    const result = new Group();
    expect(result).toBeInstanceOf(Group);
    expect(result.getChannels().length).toBe(0);
  });
  it("returns a new group with validated channels", () => {
    const channel = new Channel(
      "channel-1",
      [new Equation("x + 3"), new Equation("x^3"), new Equation("t ^ y")],
      "*"
    );

    const result = new Group([channel]);

    expect(result).toBeInstanceOf(Group);
    expect(result.getChannels()[0]).toEqual(channel);
    expect(result.getGroupEquation().getEquation()).toEqual("1*(x+3+x^3+t^y)");
  });
  it("can retrospectively add a channel", () => {
    const channel = new Channel(
      "channel-1",
      [new Equation("x + 3"), new Equation("x^3"), new Equation("t ^ y")],
      "*"
    );
    const group = new Group();

    expect(group.getChannels().length).toEqual(0);

    group.addChannel(channel);

    expect(group).toBeInstanceOf(Group);
    expect(group.getChannels()[0]).toEqual(channel);
    expect(group.getGroupEquation().getEquation()).toEqual("1*(x+3+x^3+t^y)");
  });
  it("throws an error when channels are invalid", () => {
    const invalidInputs = [1, "invalid", 1.0, new Channel(), true];

    invalidInputs.forEach((invalidInput) => {
      expect(() => {
        new Group(invalidInput);
      }).toThrow();
    });
  });
});
