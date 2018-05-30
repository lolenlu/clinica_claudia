<?php 
include_once "conexion.php";

$nombre = $_POST['nombre'];
$viejo = $_POST['pass_anti'];
$new = $_POST['pass_new_1'];
$new_comp = $_POST['pass_new_2'];

if ($new !== $new_comp) {
	echo 1;
}
else
{
	$sql="SELECT pass FROM usuarios WHERE nombre_completo='".$nombre."'";
	$res=$conexion->query($sql);
	$obj=$res->fetch_object();

	if ($obj->pass != $viejo) {
		echo 2;
	}
	else
	{
		$sql_f="UPDATE usuarios
		SET pass = '".$new."'
		WHERE nombre_completo = '".$nombre."';";
	$res=$conexion->query($sql_f);
		echo 0;
	}


}



 ?>