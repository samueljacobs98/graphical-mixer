import { expect, it, describe } from "@jest/globals";
import Channel from "../../classes/Channel";
import Equation from "../../classes/Equation";

describe("Equation tests", () => {
  it("returns an instantiated Channel", () => {
    const input = {
      id: "channel-1",
      equations: [
        new Equation("x + 3"),
        new Equation("x^3"),
        new Equation("t ^ x"),
      ],
      interaction: "*",
    };
    const expectedResult = {
      id: "channel-1",
      equations: [
        new Equation("x + 3"),
        new Equation("x^3"),
        new Equation("t ^ x"),
      ],
      interaction: "*",
    };
    const result = new Channel(input.id, input.equations, input.interaction);
    expect(result.getId()).toBe(input.id);
    result.getEquations().forEach((equation, index) => {
      expect(equation).toEqual(input.equations[index]);
    });
    expect(result.getInteraction()).toBe("*");
  });
  it("throws an error", () => {
    const invalidInteractions = ["* ", "_7*", "!/2", 2, true, 0xffffff];
    invalidInteractions.forEach((interaction) => {
      expect(() => {
        new Channel("some-id", [], interaction);
      }).toThrow();
    });
  });
});
