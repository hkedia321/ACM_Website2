<?php
function make_connection(){
	global $connection;
	
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="secret";
	$dbname="acmvit";
	$connection=mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
	if(mysqli_connect_errno()){
		die("Database connection failed:".mysqli_conect_error()."(".mysqli_connect_errorno().")"
			);
	}
}
function sql_escape($input){
	global $connection;
	return mysqli_real_escape_string($connection,$input);
}
function insert_contact($name,$email,$subject,$message){
	global $connection;
	session_start();
	$name=sql_escape($name);
	$email=sql_escape($email);
	$subject=sql_escape($subject);
	$message=sql_escape($message);
	$query="INSERT INTO contact(name,email,subject,message) values('{$name}','{$email}','{$subject}','{$message}');";
	$result=mysqli_query($connection,$query);
	$_SESSION['contact_success']='none';
	if($result)
		$_SESSION['contact_success']='send';
	else
		$_SESSION['contact_success']='fail';
}

function insert_subscribe($email){
	global $connection;
	session_start();
	$email=sql_escape($email);
	$query="INSERT INTO subscribe(email) values('{$email}');";
	$result=mysqli_query($connection,$query);
	$_SESSION['subscribe_success']='none';
	if($result)
		$_SESSION['subscribe_success']='send';
	else
		$_SESSION['subscribe_success']='fail';
}
function insert_upload($name){
	global $connection;
	$query="INSERT INTO uploads(name) values('{$name}');";
	$result=mysqli_query($connection,$query);
}
function get_all_contacts(){
	global $connection;
	$query="SELECT * FROM contact;";
	$result=mysqli_query($connection,$query);
	return $result;
}
function get_all_subscibe(){
	global $connection;
	$query="SELECT * FROM subscribe;";
	$result=mysqli_query($connection,$query);
	return $result;
}
function get_all_uploads(){
	global $connection;
	$query="SELECT * FROM uploads;";
	$result=mysqli_query($connection,$query);
	return $result;
}
?>