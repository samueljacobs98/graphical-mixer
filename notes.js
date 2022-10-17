// let xoff1 = 0;
// let xoff2 = 10000;
let inc = 0.01;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;

  loadPixels();

  for (let x = 0; x < width; x++) {
    let xoff = 0;
    for (let y = 0; y < width; y++) {
      const index = (x + y * width) * 4;
      //   const r = random(255);
      const r = noise(xoff, yoff) * 255;
      pixels[index] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }

  updatePixels();
  //   noLoop();
}

// There are multiple channels
// Each channel consists of a set of mathematical functions
// These functions can be selectively (or randomly) added or subtracted from one another
// The values should be normalised to hit some maximum
// Alternatively, the amplitude could be based on some amount of offset (i.e. a percentage over a designated value)
// Chanels can be grouped for interaction
// in a given group, a subset of all the current chanels can interact by result multiplication and division
//
// groups can have a user designated or random number of duplicates
// the duplicates are synchronised by an to run parallel with one another min(0) (stacking)
// or at some value
// could create a function that generates the distance between each offset to add variety
// groups can be rotated around a point so that each group does not only run from left to right
// need to designated the colour of a group
// a group's offsets can be one single colour or it can vary, perhaps a gradient by using the offset
// to mathematically determine the hsl
// do i need to look into the fourier function?
//
// must be able to save directly
// must be able to set line thickness - again can be function like colours,
// could use same function that normalises
// must be able to add a t0 offset for each offset line, again using same functions
// must be able to set the background colour/gradient
