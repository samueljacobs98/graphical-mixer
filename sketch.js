const canvasSketch = require("canvas-sketch");
const { default: Channel } = require("./classes/Channel");
const { default: Equation } = require("./classes/Equation");
const { default: Group } = require("./classes/Group");
const { default: Store } = require("./classes/Store");

/**
 * Store
 */
const store = new Store();

/**
 * Dimensions
 */
const dimensions = {
  width: 2048,
  height: 2048,
};

/**
 * Equations
 */
const equation1 = new Equation("x + 3");
const equation2 = new Equation("x^2 + y^3");
const equation3 = new Equation("x + y^3");
const equation4 = new Equation("t^2 + y^3");

/**
 * Channels
 *
 * Channels are a group of equations
 * The equations are summed together to output a final value
 * The equations are never subtracted
 * Therefore, to subtract an equation, you should flip all positive operators to negative
 */

const channel1 = new Channel("channel1", [equation1, equation2], "*");
const channel2 = new Channel("channel2", [equation3, equation4], "/");

store.addChannel(channel1);
store.addChannel(channel2);

console.log(store.getChannels());

/**
 * Groups
 *
 * Groups are sets of channels
 * The channels are multiplied together
 */

const group1 = new Group([channel1, channel2]);

console.log(group1);

/**
 * Settings
 */
const settings = {
  dimensions: [dimensions.width, dimensions.height],
};

/**
 * Sketch
 */
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
