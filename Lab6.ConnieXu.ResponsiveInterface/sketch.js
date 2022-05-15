var button;
var colorChange;
var addColor;
var slider;
var cursorArr = [];
var i = 0;

var buttons = [];
var label;

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");

  frameRate(60);
  textAlign(CENTER, CENTER);

  //color me button
  // button = createButton("color me");
  // button.style('background-color', "#BCEDF6");
  // button.style('color', "#6B7FD7");
  // button.style('font-family', "Helvetica");
  // button.size(100, 50);
  // button.position(width - 200, height - 200);
  // button.mousePressed(changeBG);

  //cursor array
  cursorArr = ['assets/flowerCursor.png', 'assets/flowerCursor2.png', 'assets/flowerCursor3.png'];

  //buttons
  buttons.push(new Button(100, 50, 150, 50, "🌈⚡️"));
  // buttons.push(new Button(100, 200, 200, 100, "Another Button"));
  buttons.push(new RoundButton(width/2, height/2, 200));

  //slider for background color
  // colorMode(HSB);
  // slider = createSlider(0, 255, 20, 5);
  // slider.position(100, 100);
  // slider.style('width', '150px');

  changeBG();
}

//change color of flower
function changeBG(){
  colorChange = color(random(255), random(255), random(255));
  addColor = color(random(255), random(255), random(255));
}

function draw(){
  background('#8FAD88');

  //flower 1
  // fill(colorChange);
  // translate(width/2, height/2);
  // noStroke();
  // for (let i = 0; i < 10; i ++) {
  //   ellipse(0, 90, 100, 130);
  //   rotate(PI/5);
  // }

  //heart
  // fill(addColor);
  // ellipse(66.6, 66.6, 20, 20);
  // ellipse(83.2, 66.6, 20, 20);
  // triangle(91.2, 72.6, 75, 95, 58.6, 72.6);

  //buttons
  for(var i = 0; i < buttons.length; i++){
    buttons[i].display();
    buttons[i].hover();
  }

  //change cursor
  cursor('assets/flowerCursor.png');

  i++;
  cursor(cursorArr[i - 1]);
  if(i >= cursorArr.length){
    i = 0;
  }

  //background color change with slider
  // bgColor = slider.value();
  // let val = slider.value();
  // background(val, 42, 133);
}

//auto resize canvas
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  // button.position(width - 200, height - 200);
  // buttons.push(new Button(100, 50, 150, 50, "🌈⚡️"));
  // buttons.push(new Button(100, 200, 200, 100, "Another Button"));
  buttons.push(new RoundButton(width/2, height/2, 200));
}

function mousePressed(){
  for(var i = 0; i < buttons.length; i++){
    buttons[i].mousePressed();
    changeBG();
  }
}

function mouseReleased(){
  for(var i = 0; i < buttons.length; i++){
    buttons[i].mouseReleased();
  }
}

//class for buttons
class Button{
  constructor(x, y, w, h, label){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.pressed = false;
    this.hovering = false;
  }

  display(){
    push();

    translate(this.x, this.y);
    strokeWeight(6);
    fill("#7F9C96");
    if(this.hovering){
      fill("#627F79");
    }
    rect(0, 0, this.w, this.h);
    fill("#FDEDEE");
    text(this.label, this.w/2, this.h/2);

    pop();
  }

  mousePressed(){
    if(this.isOver()){
      console.log(this.label + " pressed.");
      this.pressed = true;
      fill(colorChange);
    }
  }

  mouseReleased(){
    if(this.pressed){
      console.log(this.label + " released.");
      this.pressed = false;
    }
  }

  hover(){
    if(this.isOver()){
      console.log(this.label + " hovering.");
      this.hovering = true;
      changeBG();
    } else {
      this.hovering = false;
    }
  }

  isOver(){
    if(mouseX > this.x && mouseX < this.x + this.w){
      if(mouseY > this.y && mouseY < this.y + this.h){
        return true;
      }
    }
    return false;
  }
}

class RoundButton extends Button{
  constructor(x, y, d, label){
    super(x, y, d, d, label);
    this.d = d;
    this.r = d/2;
  }

  isOver(){
    if(dist(mouseX, mouseY, this.x, this.y) < this.r){
      return true;
    }
    return false;
  }

  display(){
    push();

    translate(this.x, this.y);
    strokeWeight(10);
    fill(colorChange);
    if(this.hovering){
      fill("#CBDF90");
    }
    circle(0, 0, this.d);
    fill(0);
    text(this.label, this.w/2, this.h/2);

    pop();

  }
}
