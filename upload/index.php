<?php
include('../functions.php');
make_connection();
if(isset($_POST['upload']))
{
	if(isset($_FILES['fileToUpload']))
	{
		$target_dir = "uploads/";
		$target_file = $target_dir . $_POST['name'];//new name of the file
		$uploadOk = 1;
		$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check file size
		if ($_FILES["fileToUpload"]["size"] > 500000) {
			echo "Sorry, your file is too large.";
			$uploadOk = 0;
		}
// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
			echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
		} else {
			if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
				echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
				insert_upload($_POST['name']);
			} else {
				echo "Sorry, there was an error uploading your file.";
			}
		}
	}

}
$all_uploads=get_all_uploads();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Upload files for lab use</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3">
				<form action="#" method="POST" enctype="multipart/form-data">
					<label for="name">FUll name of file:</label>
					<input type="text" name="name" class="form-control" id="name" placeholder="homework.pdf">

					<input type="file" name="fileToUpload" placeholder="Your file" class="form-control">
					<input type="submit" name="upload" class="btn btn-primary">
				</form>
				<br><br>
				<h3>Files uploaded are:</h3>
				<ul>
					<?php
					while($row=mysqli_fetch_assoc($all_uploads))
						echo "<li><a href='uploads/".$row['name']."' target='_blank'>".$row['name']."</a></li>";
					?>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>