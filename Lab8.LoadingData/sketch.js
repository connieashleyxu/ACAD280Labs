var table;
var song;

function preload(){
  table = loadTable("cities.csv", "csv","header");

  song = loadSound('flashingLights.mp3');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);

  //fill(255,150);
  noStroke();
  window.alert('click the screen, turn up your volume, & wait:)');
}

function mousePressed() {
  song.play();
}

function draw() {
  background(0);

  scale(5.5);

  for(var i=0; i <table.getRowCount(); i++){
    var latitude = table.getNum(i, "LATITUDE");
    var longitude = table.getNum(i, "LONGITUDE");

    setXY(latitude,longitude);
  }
}

function setXY(lat, long){

  // var x = map(long,-180,180,0,width);
  // var y = map(lat,90,-90,0,height);
  var x = map(long,-180,1920,0,width);
  var y = map(lat,90,-1080,0,height);

  fill(random(255), random(255), random(255));
  var num = random(0.5);
  ellipse(x,y,num,num);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
