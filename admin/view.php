<?php
session_start();
include('../functions.php');
if(isset($_SESSION['login']) and $_SESSION['login']);
else
	header("Location:index.php");
make_connection();
$all_contacts=get_all_contacts();
$all_subscribe=get_all_subscibe();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Admin View</title>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<br>
		<h2>Contact us database</h2>
		<table class="table table-bordered table-striped">
			<tr>
				<th>Name</th>
				<th>email</th>
				<th>Subject</th>
				<th>Message</th>
			</tr>
			<?php
			while($row=mysqli_fetch_assoc($all_contacts))
			{
				echo "<tr>";
				echo "<td>".$row['name']."</td>";
				echo "<td>".$row['email']."</td>";
				echo "<td>".$row['subject']."</td>";
				echo "<td>".$row['message']."</td>";
				echo "</tr>";
			}
			?>
		</table>
		<br>
		<h2>Subscribe database</h2>
		<table class="table table-bordered table-striped">
			<tr>
				<th>email</th>
			</tr>
			<?php
			while($row=mysqli_fetch_assoc($all_subscribe))
			{
				echo "<tr>";
				echo "<td>".$row['email']."</td>";
				echo "</tr>";
			}
			?>
		</table>
	</div>
</body>
</html>