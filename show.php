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
		?>
		<!DOCTYPE html>
		<head>
			<title>Thank you</title>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta charset="UTF-8">
			<meta name="Language" content="en" />
			<link rel="icon" href="images/favicon.ico" />
			<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
			<style>
			td:first-child{
				font-weight: bold;
				text-align: right;
			}
			footer img{
				width: 300px;
				max-width: 70vw;
			}
			footer{
				text-align: center;
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
			.tablediv{
				min-height: 63vh;
			}
			body{
				overflow-x:hidden; 
			}
		}
		</style>
	</head>
	<body>
		<div class="container">
			<h3>Thank you for your Response. We will contact you soon.</h3>
			<h4>Here are your details:</h4>
			<div class="tablediv">
				<table class="table table-bordered table-hover table-striped">
					<tbody>
						<tr>
							<td>Reference ID</td>
							<td><?php echo $row["id"] ?></td>
						</tr>
						<tr>
							<td>Name</td>
							<td><?php echo $row["name"] ?></td>
						</tr>
						<tr>
							<td>Email</td>
							<td><?php echo $row['email'] ?></td>
						</tr>
						<tr>
							<td>Subject</td>
							<td><?php echo $row['subject'] ?></td>
						</tr>
						<tr>
							<td>Message</td>
							<td><?php echo $row['message'] ?></td>
						</tr>
					</tbody>
				</table>
				<a href="http://acmvit.com"><button class="btn btn-primary">Go back</button></a>
			</div>
		</div>
		<footer class="footer">
			<a href="http://acmvit.com">
				<img src="images/ourlogo2.png"/></a>
			</footer>
		</body>
		</html>
		<?php
	}
} else {
	echo "Submission failed. Please try again later.";
}
$conn->close();
?>