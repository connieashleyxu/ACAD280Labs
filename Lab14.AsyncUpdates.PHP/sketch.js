var table;

// function preload(){
//   table = loadTable("films.php", "csv", "header");
// }

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);

  // for(var i = 0; i < table.getRowCount(); i++) {
  //   var title = table.getString(i, 0);
  //   var gross = table.getNum(i, 1);
  //
  //   console.log(title, gross);
  // }
}

function draw() {
  background(0, 180, 255);
}

function mousePressed(){
  var normx = mouseX/width;
  var calories = Math.floor(983 * normx);

  console.log(calories);
  // color("#000000");
  // circle(mouseX, mouseY, calories);

  table = loadTable("api.php?calories="+calories, "csv", "header", dataLoaded, dataLoadError);
}

function dataLoaded(){
  console.log(table);
}

function dataLoadError(){
  console.log("data load error");
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
