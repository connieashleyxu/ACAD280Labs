var table;
var workout = [];
//var mode = 0;
// var groceries = ["poratoes", "flour", "apples"];
// var numbers = [23, 46, 39, 9, 873, 23, 46, 123];

function preload(){
  table = loadTable("workoutxmusic.php", "ssv", "header");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(5);

  // //string sort
  // groceries.sort();
  // groceries.reverse();
  // console.log(groceries);
  //
  // //number sort
  // console.log(numbers);
  // numbers.sort(numSort);
  // console.log(numbers);
  //
  // //max/min for num
  // console.log(Math.min.apply(null, numbers));
  // console.log(Math.max.apply(null, numbers));

 for (var r = 0; r < table.getRowCount(); r++) {    // var genre = table.getString(i, 0);
    // var track = table.getString(i, 1);
    // var artist = table.getString(i, 2);
    // var calories = table.getString(i, 3);

    var row = table.getRow(r);
    workout.push(new Workout(row.get(0), row.get(1), row.get(2), row.get(3)));
  }

  //workout.sort(sortByCalories);
  console.log(workout);
}

function draw() {
  background(45, 70, 84);
  for (var i = 1; i < workout.length; i++){
    workout[i].display(i);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// function numSort(a, b) {
//   return a - b;
// }

function sortByTrack(a, b) {
  var x = a.track.toLowerCase();
  var y = b.track.toLowerCase();

  if(x < y) {
    return -1;
  }
  else if (x > y) {
    return 1;
  }
  else {
    return 0;
  }
}

function sortByCalories(a, b) {
  var x = a.calories.toLowerCase();
  var y = b.calories.toLowerCase();

  return x - y;
}

function sortByArtist(a, b) {
  var x = a.artist.toLowerCase();
  var y = b.artist.toLowerCase();

  if(x < y) {
    return -1;
  }
  else if (x > y) {
    return 1;
  }
  else {
    return 0;
  }
}

function sortByGenret(a, b) {
  var x = a.genre.toLowerCase();
  var y = b.genre.toLowerCase();

  if(x < y) {
    return -1;
  }
  else if (x > y) {
    return 1;
  }
  else {
    return 0;
  }
}

class Workout{
  constructor(genre, track, artist, calories){
    //this.date = date;
    this.genre = genre;
    this.track = track;
    this.artist = artist;
    this.calories = calories;
    // this.genre = genre.split(", ");
    // for(var i = 0; i<this.genre.length; i++){
    //   this.genre[i] = this.genre[i].trim();
    // }
    //console.log(this.track, this.genre);
  }

  display(i) {
    circle(i*width/workout.length, random(height), this.calories/10);

    noStroke();
    if(this.genre == "Rap") {
      fill("#909CC2");
    }
    else if(this.genre == "Pop") {
      fill("#084887");
    }
    else if(this.genre == "Country") {
      fill("#F58A07");
    }
    else if(this.genre == "Alternate Indie" || this.genre == "Indie Pop") {
      fill("#F9AB55");
    }
    else if(this.genre == "Electronic Dance") {
      fill("#F7F5FB");
    }
    else if(this.genre == "Chill R&B" || this.genre == "R&B" || this.genre == "Alternative R&B") {
      fill("#87BCDE");
    }
    else {
      fill("#FFFFFF");
    }
  }
}
