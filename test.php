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
			<footer class="footer">
				<a href="http://acmvit.com">
			<img src="images/ourlogo2.png"/></a>
		</footer>
		</div>
		
	</body>
	</html>
