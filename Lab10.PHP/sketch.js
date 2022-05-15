var table;

function preload(){
  table = loadTable("workoutxmusic.php", "csv", "header");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);

  for(var i = 0; i < table.getRowCount(); i++) {
    var genre = table.getString(i, 0);
    var track = table.getString(i, 1);
    var artist = table.getString(i, 2);
    var calories = table.getString(i, 3);

    console.log(genre, track, artist, calories);
  }
}

function draw() {
  background(0, 180, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
