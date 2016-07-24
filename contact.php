<?php

//Let's do some boring stuff -_-

        error_reporting( E_ALL );
        ini_set( "display_errors", 1 );

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $subject = $_POST['subject'];
        $servername = "localhost";
        $username = "root";
        $password = "password";
        $dbname = "acm-vit";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO contact (name,email,subject,message)
        VALUES ('$name', '$email', '$subject','$message')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();

?>