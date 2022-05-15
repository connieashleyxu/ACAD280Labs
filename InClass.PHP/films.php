<?php

  $servername = "localhost";
  $username = "caxu_demouser";
  $password = "TomatoSoup123";
  $dbname = "caxu_acad280";

  $conn = mysqli_connect($servername, $username, $password, $dbname);

  if(!$conn) {
    die("Conection failed: " . mysqli_connect_error());
  }

  echo "Title,Gross";

  $sql = "SELECT * FROM films";
  $result = mysqli_query($conn, $sql);

  if(mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
      echo $row["Title"] . "," . $row["Gross"] . "\n";
    }
  }

?>
