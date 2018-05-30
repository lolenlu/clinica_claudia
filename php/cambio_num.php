<?php 
include_once "conexion.php";

$num_new = $_POST['tel_new'];
$nombre = $_POST['nombre'];

$sql="UPDATE usuarios
SET telefono = '".$num_new."'
WHERE nombre_completo = '".$nombre."';";
	$res=$conexion->query($sql);


 ?>