<?php
    if(isset($_POST['submit']))
    {
        $name = $_POST['fname'];
        $email = $_POST['email'];
        $message = $_POST['msg'];

        $servername = "localhost";
        $username = "caxu_demouser";
        $password = "TomatoSoup123";
        $dbname = "caxu_acad280";

        $conn = mysqli_connect($servername, $username, $password, $dbname);

        if (!$conn)
        {
            die("Connection failed: " . mysqli_connect_error());
        }

        $sql = "INSERT INTO lab11form_entries (id, name_fld, email_fld, msg_fld) VALUES ('0', '$name', '$email', '$message')";

        $result = mysqli_query($conn, $sql);

        if($result)
        {
            echo "Thank you for your response.";
        }
        else {
          echo "Uh oh. Something went wrong.";
        }

        mysqli_close($conn);
    }
?>
