<?php 

include_once "conexion.php";

$name = $_POST['name'];
$ape = $_POST['ape'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$pass = $_POST['pass'];
$pass_confirm = $_POST['pass_confirm'];

if ($pass !== $pass_confirm) {
	echo 1;
}
else{
$sql1 = "SELECT nombre_completo FROM usuarios WHERE nombre_completo='".$name."'";
$prub=$conexion->query($sql1);
if ($prub->num_rows === 1) {
	echo 2;
}else{
$sql2 = "SELECT email FROM usuarios WHERE email='".$email."'";
$prub2=$conexion->query($sql2);
if ($prub2->num_rows === 1) {
	echo 3;
}
else{

$sql_final="INSERT INTO usuarios VALUES (null,'".$name."','".$ape."','".$tel."','".$email."','".$pass."','USER')";
$conexion->query($sql_final);	
	echo 0;
}
}

 
}

 ?>