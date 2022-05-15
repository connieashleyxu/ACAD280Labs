var balls = [];

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);
}

function draw(){
  background(0,180,255);
  //circle(mouseX, mouseY, 50);

  strokeWeight(10);

  stroke(255);
  if(mouseIsPressed) {
    stroke(255, 0, 0);
  }

  line(mouseX, mouseY, pmouseX, pmouseY);

  for(var i = 0; i < balls.length; i++) {
    
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  //console.log("mouse pressed", mouseX, mouseY);

  balls.push(new Ball(mouseX, mouseY));
}

function mouseReleased() {
  //console.log("mouse released", mouseX, mouseY);
}

function mouseDragged() {
  //console.log("mouse dragged");
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;

    console.log(this.x, this.y, this.size)
  }

  display() {
    circle(this.x, this.y, this.size);
  }
}
