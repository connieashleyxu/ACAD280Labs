var circleY = 0;
var circleSpeed = 1;

var theta = 0;

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);
}

function draw(){
  background(102,137,167);

  strokeWeight(0);

  //ellipses
  for(var j = 0; j < 10; j++){
    for(var i = 0; i < 50; i++) {
        fill(216,220,106)
        circle(30 + (90 * i), circleY + (100 * j), 30);
    }
  }

  for(var j = 0; j < 10; j++){
    for(var i = 0; i < 50; i++) {
        fill(25,56,31)
        circle(60 + (90 * i), circleY + (100 * j), 30);
    }
  }

  circleY = circleY + circleSpeed;

  if(circleY + 900 > height) {
    circleSpeed = circleSpeed * -1;
  }

  if(circleY < 0) {
    circleSpeed = circleSpeed * -1;
  }

  //rectangle
  fill(214,73,51);
  dashLine([0, 0]);
  strokeWeight(6);
  stroke(color(204,63,41));
  rect(300, (height-600)/2, width - 600, 600);

  //text
  fill(25,56,31);
  stroke(color(15,46,21));
  textSize(100);
  text('PRESS', width/2 - 160, height/2 + 20);

  //cursor ball stroke
  strokeWeight(20);

  stroke(41, 51, 92);
  if(mouseIsPressed) {
    stroke(25, 31, 46);
  }

  //cursor ball color
  fill(233,196, 106, 150);
  if(mouseIsPressed) {
    fill(42, 157, 143, 150);
  }
  ellipse(mouseX, height/2, mouseY, mouseY);

  fill(42, 157, 143, 150);
  if(mouseIsPressed) {
    fill(233,196, 106, 150);
  }
  ellipse(width - mouseX, height/2, height - mouseY, height - mouseY);
  //line(mouseX, mouseY, pmouseX, pmouseY);

  //big circle
  var diameter = sin(theta) * 350;
  fill(255, 214, 224);
  dashLine([10, 10]);
  stroke(color(245,204,214));
  circle(width - 300, 800, diameter);
  theta += .01;

  //medium circle
  rotate(sin(frameCount * 0.025) * HALF_PI);
  fill(25, 36, 51);
  stroke(color(15,26,41));
  circle(300, 600, 250);

}

function dashLine(list) {
  drawingContext.setLineDash(list);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
