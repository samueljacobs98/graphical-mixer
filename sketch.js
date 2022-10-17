const canvasSketch = require("canvas-sketch");
const { default: Channel } = require("./classes/Channel");
const { default: Equation } = require("./classes/Equation");
const { default: Group } = require("./classes/Group");
const { default: Store } = require("./classes/Store");
const { default: Sketch } = require("./classes/Sketch");

/**
 * Store
 */
const store = new Store();

/**
 * Equations
 */
const equation1 = new Equation("x + 3");
const equation2 = new Equation("x^2 + y^3");
const equation3 = new Equation("x + y^3");
const equation4 = new Equation("t^2 + y^3");

/**
 * Channels
 */
const channel1 = new Channel("channel1", [equation1, equation2], "*");
const channel2 = new Channel("channel2", [equation3, equation4], "/");
store.addChannel(channel1);
store.addChannel(channel2);

/**
 * Groups
 */
const group1 = new Group([channel1, channel2]);
store.addGroup(group1);

canvasSketch(Sketch.sketch, store.getSettings());
