var table;

function preload(){
  table = loadTable("films.php", "csv", "header");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);

  for(var i = 0; i < table.getRowCount(); i++) {
    var title = table.getString(i, 0);
    var gross = table.getNum(i, 1);

    console.log(title, gross);
  }
}

function draw() {
  background(0, 180, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
