<?php
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

$sql = "SELECT id, name,email,subject,message FROM contact";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"].'email - '.$row['email'].'subject- '.$row['subject'].' Message :: '.$row['message'];
    }
} else {
    echo "0 results";
}
$conn->close();
?>