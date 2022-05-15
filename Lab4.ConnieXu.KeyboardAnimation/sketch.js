var circleX = 100;
var circleY = 100;

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");

  frameRate(60);
}

function draw(){
  background("#290628");

  //game text title
  fill("#230621");
  textAlign(CENTER, CENTER);
  strokeWeight(0);
  textSize(500);
  text("vowels", width/2, height/2);
  textSize(100);
  text("<-- stay4lyfe -->", width/2, height/1.4);

  //alphabet
  //vowels stay
  //others don't
  if ((keyIsPressed == true) && (key == 'x')) {
    strokeWeight(5);
    stroke("#EA7AF4");
    line(circleX - 50, circleY, circleX, circleY + 50);
    line(circleX, circleY, circleX - 50, circleY + 50);
  }
  else if (key == 'a') {
    strokeWeight(0);
    fill("#6200B3");
    textSize(64);
    text("a", circleX + 10, circleY + 20);
  }
  else if ((keyIsPressed == true) && (key == 'b')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("b", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'c')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("c", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'd')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("d", circleX, circleY);
  }
  else if (key == 'e') {
    strokeWeight(0);
    fill("#6200B3");
    textSize(64);
    text("e", circleX + 10, circleY + 20);
  }
  else if ((keyIsPressed == true) && (key == 'f')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("f", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'g')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("g", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'h')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("h", circleX, circleY);
  }
  else if (key == 'i') {
    strokeWeight(0);
    fill("#6200B3");
    textSize(64);
    text("i", circleX + 10, circleY + 20);
  }
  else if ((keyIsPressed == true) && (key == 'j')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("j", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'k')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("k", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'l')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("l", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'm')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("m", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'n')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("n", circleX, circleY);
  }
  else if (key == 'o') {
    fill("#3B0086");
    strokeWeight(0);
    circle(circleX + 20, circleY + 20, 60);

    fill("#290628");
    circle(circleX + 20, circleY + 20, 50);
  }
  else if ((keyIsPressed == true) && (key == 'p')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("p", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'q')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("q", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'r')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("r", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 's')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("s", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 't')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("t", circleX, circleY);
  }
  else if (key == 'u') {
    strokeWeight(0);
    fill("#6200B3");
    textSize(64);
    text("u", circleX + 20, circleY + 20);
  }
  else if ((keyIsPressed == true) && (key == 'v')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("v", circleX, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'w')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("w", circleX, circleY);
  }
  else if (key == 'y') {
    strokeWeight(0);
    fill("#B43E8F");
    textSize(64);
    text("y", circleX - 40, circleY);
  }
  else if ((keyIsPressed == true) && (key == 'z')) {
    strokeWeight(0);
    fill("#EA7AF4");
    textSize(64);
    text("z", circleX, circleY);
  }
  else {
    //use arrow key to move circle
    if (keyIsDown(UP_ARROW)) {
      circleY--;
    }
    if (keyIsDown(DOWN_ARROW)) {
      circleY++;
    }
    if (keyIsDown(LEFT_ARROW)) {
      circleX--;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      circleX++;
    }

    fill("#B43E8F");
    strokeWeight(0);
    circle(circleX, circleY, 50);
  }

  //keep in bounds of screen
  if (circleX < 0) {
    circleX = 150;
  }

  if (circleX > width){
    circleX = width - 150;
  }

  if (circleY < 0) {
    circleY = 150;
  }

  if (circleY > height){
    circleY = height - 150;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
