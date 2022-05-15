<!DOCTYPE html>
<head>
  <meta charset="utf-8">
    <title>Lab 14 Form Update</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
  <div>

<?php
    // if(isset($_POST['submit']))
    // {
        $servername = "localhost";
        $username = "caxu_demouser";
        $password = "TomatoSoup123";
        $dbname = "caxu_acad280";

        $conn = mysqli_connect($servername, $username, $password, $dbname);

        if (!$conn)
        {
            die("Connection failed: " . mysqli_connect_error());
        }

        if(isset($_GET["id"])) {
          $id = $conn->real_escape_string($_GET["id"]);

          if(isset($_GET["name_fld"])) {
            $name_fld = $conn->real_escape_string($_GET["name_fld"]);

            $sql = "UPDATE lab11form_entries SET name_fld='$name_fld' WHERE id=$id";

            if($conn->query($sql)){
              echo "Thank you for your update!";
            }
            else {
              echo "Uh oh something went wrong... " . $conn->error;
            }
          }
        }

        $sql = "SELECT * FROM lab11form_entries";
        $result = $conn->query($sql);

        echo "<form action='update.php' method='get'>";
        echo "<h1>Lab 14 Form</h1>";
        echo "<table>";

        if($result->num_rows > 0) {
          echo "Name: <select name='id'>";

          while($row = $result->fetch_assoc()) {
            echo "<option value='{$row['id']}'>{$row['name_fld']}</option>";
          }

          echo "</select>";
        } else {
          echo "0 results";
        }

        mysqli_close($conn);
    // }
?>

<tr>
    <td>
        <label for="msg">Your Message</label><br>
        <textarea name="msg" placeholder="Message..." id="" cols="30" rows="10"></textarea>
    </td>
</tr>
<tr>
    <td>
        <input type="submit" name="submit" value="Send">
    </td>
</tr>
</table>
</form>
</div>
</body>
</html>
