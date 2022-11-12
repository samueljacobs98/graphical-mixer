const canvasSketch = require("canvas-sketch");
const { default: Channel } = require("./classes/Channel");
const { default: Equation } = require("./classes/Equation");
const { default: Group } = require("./classes/Group");
const { default: Store } = require("./classes/Store");
const { default: Sketch } = require("./classes/Sketch");

/**
 * Store
 *
 * Responsible for storing channels, groups, and dimensions
 */
const store = new Store();

/**
 * Equations
 */
const equation1 = new Equation("x + 3");
const equation2 = new Equation("x^2 + x^3");
const equation3 = new Equation("t + x^3");
const equation4 = new Equation("t^2 + x^3");

/**
 * Channels
 *
 * Channels are automatically added to the store
 */
const channel1 = new Channel("channel1", [equation1, equation2], "*");
const channel2 = new Channel("channel2", [equation3, equation4], "/");

/**
 * Groups
 *
 * Groups are automatically added to the store
 */
const group1 = new Group([channel1, channel2]);

canvasSketch(Sketch.sketch, store.getSettings());
