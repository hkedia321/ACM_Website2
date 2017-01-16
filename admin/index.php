<?php
session_start();
include('../functions.php');
if(isset($_SESSION['login']) and $_SESSION['login'])
	header("Location:view.php");
if(isset($_POST['submit']))
{
	$password=$_POST['password'];
	if($password=="acmadmin01")
	{
		$_SESSION['login']=true;
		header("Location:view.php");
	}
	else
		$wrong="Wrong password";
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Admin view</title>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
	<style type="text/css">
		.red{
			color: red;
		}
	</style>
</head>
<body>
	<br><br>
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<form action="#" method="POST">
					<label for="password">Password</label>
					<input type="password" name="password" class="form-control">
					<input type="submit" name="submit" class="btn btn-primary">
				</form>
				<?php
				if(isset($wrong))
					echo "<div class='red'>".$wrong."</div>";
				$wrong=null;
				?>
			</div>
		</div>
	</div>

</body>
</html>