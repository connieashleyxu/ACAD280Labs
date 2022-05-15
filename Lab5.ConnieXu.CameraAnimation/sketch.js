var r;
var g;
var b;

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  frameRate(60);
}

function draw() {
  background(255);

  //size of pixels
  let grid = 15;

  video.loadPixels();
  for (let j = 0; j < video.height; j += grid) {
    for (let i = 0; i < video.width; i += grid) {

      // get red color to show
      let index = (j * video.width + i) * 4;
      let r = video.pixels[index];
      let dia = map(r, 0, 255, grid, 2);

      // draw random colored circles in red locations
      r = random(255);
      g = random(100, 255); //green toned
      b = random(255);

      fill(r, g, b);
      noStroke();

      //more red makes bigger circles
      ellipse(i + grid/2, j + grid/2, dia);
    }
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
