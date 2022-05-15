<?php

  $servername = "localhost";
  $username = "caxu_demouser";
  $password = "TomatoSoup123";
  $dbname = "caxu_acad280";

  $conn = mysqli_connect($servername, $username, $password, $dbname);

  if(!$conn) {
    die("Conection failed: " . mysqli_connect_error());
  }

  if (isset($_GET["calories"]) || isset($_GET["genre"]) || isset($_GET["date"])){

    $sql = "SELECT * FROM workoutxmusic WHERE 1=1";


    if(isset($_GET["calories"])) {
      $calories = $conn->real_escape_string($_GET["calories"]);
      //$calories = 983;

      $sql .= " AND CALORIES > $calories";
    }

    if(isset($_GET["genre"])) {
      $genre = $conn->real_escape_string($_GET["genre"]);

      $sql .= " AND GENRE = '$genre'";

    }

    if(isset($_GET["date"])) {
      $date = $conn->real_escape_string($_GET["date"]);

      $sql .= " AND DATE > '$date'";
    }

    $result = $conn->query($sql);

    if($result->num_rows > 0){
      echo "DATE, GENRE, TRACK, ARTIST, CALORIES\n";

      while($row = $result->fetch_assoc()){
        echo $row["DATE"] . "," . $row["GENRE"] . "," . $row["TRACK"] . "," . $row["ARTIST"] . "," . $row["CALORIES"] . "\n";
      }
    }

}



  // echo "Title,Gross";
  //
  // $sql = "SELECT * FROM films";
  // $result = mysqli_query($conn, $sql);
  //
  // if(mysqli_num_rows($result) > 0) {
  //   while($row = mysqli_fetch_assoc($result)) {
  //     echo $row["Title"] . "," . $row["Gross"] . "\n";
  //   }
  // }
?>
