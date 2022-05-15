var cloudColor;

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);

  noLoop();

  cloudColor = color(210,219,225);
}

function draw(){
  background(139,171,201);


  strokeWeight(0);
  //stroke(255, 0, 0);

  //line(100, 50, 400, 100);
  //circle(600, 200, 200);
  //square(600, 200, 100);

  // if(decider) {
  //   fill(cloudColor)
  // }

  // var i = 0;
  // while(i < 100){
  //   console.log(i);
  //   i++
  // }

  //translate(width/2, height/2);

  for(var i = 0; i < 50; i ++) {
    fill(139,201,241, 50);
    rect(40, i*5 + 50, 100, 50);
    rect(250, i*5 + 220, 100, 50);
    rect(windowWidth - 140, i*5 + 80, 100, 50);
    rect(windowWidth - 350, i*5 + 300, 100, 50);
  }

  fill(189,141,74);
  ellipse(windowWidth/2, 450, 500, 500);

  fill(cloudColor);
  ellipse(50, 50, 60, 50);
  ellipse(80, 40, 60, 50);
  ellipse(130, 50, 60, 50);
  ellipse(70, 70, 60, 50);
  ellipse(110, 65, 60, 50);

  ellipse(250, 200, 80, 60);
  ellipse(290, 190, 80, 60);
  ellipse(340, 240, 80, 60);
  ellipse(280, 230, 80, 60);
  ellipse(320, 220, 80, 60);

  ellipse(windowWidth - 50, 80, 60, 50);
  ellipse(windowWidth - 80, 70, 60, 50);
  ellipse(windowWidth - 130, 80, 60, 50);
  ellipse(windowWidth - 70, 100, 60, 50);
  ellipse(windowWidth - 110, 95, 60, 50);

  ellipse(windowWidth - 250, 300, 80, 60);
  ellipse(windowWidth - 290, 290, 80, 60);
  ellipse(windowWidth - 340, 340, 80, 60);
  ellipse(windowWidth - 280, 330, 80, 60);
  ellipse(windowWidth - 320, 320, 80, 60);

  fill(22,113,73);
  rect(-20, windowHeight - 360, windowWidth + 30, 100);

  fill(22,113,103);
  rect(-20, windowHeight - 270, windowWidth + 30, 100);

  fill(22,113,133);
  rect(-20, windowHeight - 180, windowWidth + 30, 100);

  fill(22,113,163);
  rect(-20, windowHeight - 90, windowWidth + 30, 100);

  console.log(frameCount)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
